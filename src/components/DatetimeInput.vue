<script setup lang="ts">
import { ref, watch } from 'vue'

type SegmentKey = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'

type Parts = Record<SegmentKey, number>

interface Segment {
  key: SegmentKey
  label: string
  digits: number
  min: number
  max: number
  separator?: string
}

// The day's max is the calendar-independent 31 so that typing behaves the same
// in every month; commit() is what pulls 31 February back to 28.
const SEGMENTS: Segment[] = [
  { key: 'year', label: 'Year', digits: 4, min: 1, max: 9999, separator: '-' },
  { key: 'month', label: 'Month', digits: 2, min: 1, max: 12, separator: '-' },
  { key: 'day', label: 'Day', digits: 2, min: 1, max: 31 },
  { key: 'hour', label: 'Hour', digits: 2, min: 0, max: 23, separator: ':' },
  { key: 'minute', label: 'Minute', digits: 2, min: 0, max: 59, separator: ':' },
  { key: 'second', label: 'Second', digits: 2, min: 0, max: 59 }
]

const model = defineModel<Date>({ required: true })

// Holds the digits typed so far in the focused segment, so partial entry like a
// lone '2' in the year survives until the fourth digit lands.
const buffer = ref<{ key: SegmentKey, digits: string } | null>(null)

const inputs = ref<HTMLInputElement[]>([])

function toParts (value: Date): Parts {
  return {
    year: value.getFullYear(),
    month: value.getMonth() + 1,
    day: value.getDate(),
    hour: value.getHours(),
    minute: value.getMinutes(),
    second: value.getSeconds()
  }
}

// Writing the model round-trips through the parent, so reading it back is a tick
// behind and the next keystroke would build on a stale value. This copy is the
// one editing works against.
const parts = ref<Parts>(toParts(model.value))

let emitted: number | null = null

// Only a change we did not cause -- the unix field, say -- resets the copy and
// throws away whatever was half-typed.
watch(model, (value) => {
  if (value.getTime() === emitted) {
    return
  }

  parts.value = toParts(value)
  buffer.value = null
})

function daysInMonth (year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

function clamp (value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

// The Date constructor maps years 0-99 onto 1900-1999, which a half-typed year
// hits on every keystroke. The setters take the year verbatim, and both roll
// out-of-range fields into their neighbours the same way the constructor does.
function toDate (value: Parts): Date {
  const date = new Date()

  date.setFullYear(value.year, value.month - 1, value.day)
  date.setHours(value.hour, value.minute, value.second, 0)

  return date
}

function display (segment: Segment): string {
  if (buffer.value?.key === segment.key) {
    return buffer.value.digits.padStart(segment.digits, '0')
  }

  return String(parts.value[segment.key]).padStart(segment.digits, '0')
}

function set (date: Date): void {
  parts.value = toParts(date)
  emitted = date.getTime()
  model.value = date
}

// Clamping the day before constructing keeps 31 February on 28 rather than
// letting Date roll it forward into March. Stepping deliberately skips this, so
// that arrowing past the 31st still rolls into the next month.
function commit (next: Parts): void {
  set(toDate({ ...next, day: clamp(next.day, 1, daysInMonth(next.year, next.month)) }))
}

function focusSegment (index: number): void {
  const input = inputs.value[index]

  if (input !== undefined) {
    input.focus()
    input.select()
  }
}

function onDigit (segment: Segment, index: number, digit: string): void {
  const previous = buffer.value?.key === segment.key ? buffer.value.digits : ''
  const digits = (previous.length >= segment.digits ? '' : previous) + digit
  const value = clamp(Number(digits), segment.min, segment.max)

  buffer.value = { key: segment.key, digits }

  commit({ ...parts.value, [segment.key]: value })

  // Move on once the segment is full, or once no further digit could stay in
  // range, so a '7' month does not wait for a second keystroke.
  if (digits.length >= segment.digits || Number(digits) * 10 > segment.max) {
    buffer.value = null
    focusSegment(index + 1)
  }
}

// Date's own overflow handling carries December into January, so stepping needs
// no wrap logic of its own.
function onStep (segment: Segment, delta: number): void {
  buffer.value = null

  set(toDate({ ...parts.value, [segment.key]: parts.value[segment.key] + delta }))
}

function onKeydown (segment: Segment, index: number, event: KeyboardEvent): void {
  if (/^\d$/.test(event.key) && !event.metaKey && !event.ctrlKey) {
    event.preventDefault()
    onDigit(segment, index, event.key)
    return
  }

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault()
      onStep(segment, 1)
      break
    case 'ArrowDown':
      event.preventDefault()
      onStep(segment, -1)
      break
    case 'ArrowLeft':
      event.preventDefault()
      focusSegment(index - 1)
      break
    case 'ArrowRight':
      event.preventDefault()
      focusSegment(index + 1)
      break
    case 'Backspace':
      event.preventDefault()

      if (buffer.value?.key === segment.key && buffer.value.digits.length > 1) {
        const digits = buffer.value.digits.slice(0, -1)
        buffer.value = { key: segment.key, digits }
        commit({ ...parts.value, [segment.key]: clamp(Number(digits), segment.min, segment.max) })
      } else {
        buffer.value = null
        focusSegment(index - 1)
      }

      break
  }
}

function onFocus (event: FocusEvent): void {
  buffer.value = null
  ;(event.target as HTMLInputElement).select()
}

// Keydown handles every accepted edit, so anything that still reaches input --
// a paste, an IME commit -- is rejected. Vue would not repaint a value it
// believes is already there, so put it back by hand.
function onInput (segment: Segment, event: Event): void {
  (event.target as HTMLInputElement).value = display(segment)
}
</script>

<template>
  <div
    class="segmented-input"
    role="group"
  >
    <template
      v-for="(segment, index) in SEGMENTS"
      :key="segment.key"
    >
      <input
        ref="inputs"
        class="segment"
        type="text"
        inputmode="numeric"
        autocomplete="off"
        spellcheck="false"
        :style="{ width: `${segment.digits}ch` }"
        :aria-label="segment.label"
        :value="display(segment)"
        @keydown="onKeydown(segment, index, $event)"
        @input="onInput(segment, $event)"
        @focus="onFocus"
        @blur="buffer = null"
      >
      <span
        v-if="segment.separator !== undefined"
        class="segment-separator"
      >{{ segment.separator }}</span>
      <span
        v-else-if="index < SEGMENTS.length - 1"
        class="segment-gap"
      />
    </template>
  </div>
</template>
