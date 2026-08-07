<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { generateTimestamp } from '../../generators/UnixTimestampGenerator.ts'
import { generateRelativeTime } from '../../generators/RelativeTimeGenerator.ts'
import { useCopy } from '../../composables/useCopy.ts'
import CopyButton from '../CopyButton.vue'
import DatetimeInput from '../DatetimeInput.vue'

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

const date = ref<Date>(now)

const timestamp = computed<number>({
  get: () => generateTimestamp(date.value),
  set: (seconds) => { date.value = new Date(seconds * 1000) }
})

const localeString = computed<string>(() => date.value.toLocaleString('nl-NL', LOCALE_OPTIONS))
const localeStringUTC = computed<string>(() => date.value.toLocaleString('nl-NL', { ...LOCALE_OPTIONS, timeZone: 'UTC' }))

// Depends on the wall clock as well as `date`, so it cannot be a computed.
const relative = ref<string>(generateRelativeTime(now))

const { canCopy: canCopyCurrentTimestamp, handleCopy: copyCurrentTimestamp } = useCopy(currentTimestamp, 'current timestamp')
const { canCopy: canCopyTimestamp, handleCopy: copyTimestamp } = useCopy(timestamp, 'unix timestamp')

function onTimestampInput (event: Event): void {
  const value = (event.target as HTMLInputElement).value

  if (value !== '') {
    timestamp.value = Number(value)
  }
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
    <CopyButton
      :on-click="copyCurrentTimestamp"
      :disabled="!canCopyCurrentTimestamp"
    />
  </div>

  <jelly-divider />

  <div class="field">
    <jelly-label
      class="field-label"
      for="unix"
    >
      Unix timestamp
    </jelly-label>
    <div class="input-group">
      <jelly-input
        id="unix"
        type="number"
        :value.attr="timestamp"
        @input="onTimestampInput"
      />
      <div class="input-group-actions">
        <CopyButton
          :on-click="copyTimestamp"
          :disabled="!canCopyTimestamp"
        />
      </div>
    </div>
  </div>

  <div class="field">
    <span
      id="datetime-label"
      class="field-label"
    >Date &amp; time</span>
    <DatetimeInput
      v-model="date"
      aria-labelledby="datetime-label"
    />
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
