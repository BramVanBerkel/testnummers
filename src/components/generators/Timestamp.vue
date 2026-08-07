<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { generateTimestamp } from '../../generators/UnixTimestampGenerator.ts'
import { generateRelativeTime } from '../../generators/RelativeTimeGenerator.ts'
import { useCopy } from '../../composables/useCopy.ts'
import CopyButton from '../CopyButton.vue'

const LOCALE_OPTIONS: Intl.DateTimeFormatOptions = {
  hour12: false,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
}

const now = new Date()
const currentTimestamp = ref<number>(generateTimestamp(now))

// The single source of truth. Both editable fields are writable computeds over
// it, so editing either one needs no re-entrancy guard.
const date = ref<Date>(now)

const timestamp = computed<number>({
  get: () => generateTimestamp(date.value),
  set: (seconds) => { date.value = new Date(seconds * 1000) }
})

const datetimeLocal = computed<string>({
  get: () => toDatetimeLocal(date.value),
  set: (value) => {
    const parsed = new Date(value)

    if (!Number.isNaN(parsed.getTime())) {
      date.value = parsed
    }
  }
})

const localeString = computed<string>(() => date.value.toLocaleString('nl-NL', LOCALE_OPTIONS))
const localeStringUTC = computed<string>(() => date.value.toLocaleString('nl-NL', { ...LOCALE_OPTIONS, timeZone: 'UTC' }))

// Relative time depends on the wall clock as well as on `date`, so unlike the
// two above it cannot be a pure computed.
const relative = ref<string>(generateRelativeTime(now))

const { handleCopy: copyCurrentTimestamp } = useCopy(currentTimestamp)
const { handleCopy: copyTimestamp } = useCopy(timestamp)

// A datetime-local input wants local wall-clock time, which toISOString() does
// not give (it is always UTC).
function toDatetimeLocal (value: Date): string {
  const pad = (n: number): string => String(n).padStart(2, '0')

  return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}T${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`
}

function onTimestampInput (event: Event): void {
  const value = (event.target as HTMLInputElement).value

  if (value !== '') {
    timestamp.value = Number(value)
  }
}

function onDatetimeInput (event: Event): void {
  datetimeLocal.value = (event.target as HTMLInputElement).value
}

let tick: ReturnType<typeof setInterval>

onMounted(() => {
  tick = setInterval(() => {
    currentTimestamp.value = generateTimestamp(new Date())
    relative.value = generateRelativeTime(date.value)
  }, 1000)
})

onUnmounted(() => { clearInterval(tick) })

watch(date, () => { relative.value = generateRelativeTime(date.value) })
</script>

<template>
  <div class="field-row field current-timestamp-row">
    <h2 class="current-timestamp">
      Current timestamp: <span>{{ currentTimestamp }}</span>
    </h2>
    <CopyButton :on-click="copyCurrentTimestamp" />
  </div>

  <jelly-divider />

  <div class="field">
    <jelly-label
      class="field-label"
      for="unix"
    >
      Unix timestamp
    </jelly-label>
    <div class="field-row">
      <jelly-input
        id="unix"
        type="number"
        :value.attr="timestamp"
        @input="onTimestampInput"
      />
      <CopyButton :on-click="copyTimestamp" />
    </div>
  </div>

  <div class="field">
    <label
      class="field-label"
      for="datetime"
    >Date &amp; time</label>
    <input
      id="datetime"
      class="plain-input"
      type="datetime-local"
      step="1"
      :value="datetimeLocal"
      @input="onDatetimeInput"
    >
  </div>

  <dl class="readout">
    <dt>Local time:</dt>
    <dd>{{ localeString }}</dd>
    <dt>UTC:</dt>
    <dd>{{ localeStringUTC }}</dd>
    <dt>Relative:</dt>
    <dd>{{ relative }}</dd>
  </dl>
</template>
