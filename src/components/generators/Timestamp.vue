<script setup lang="ts">

import { computed, onMounted, ref, watch } from 'vue'
import { generateTimestamp } from '../../generators/UnixTimestampGenerator.ts'
import { generateRelativeTime } from '../../generators/RelativeTimeGenerator.ts'
import { ClipboardDocumentCheckIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import Tooltip from '../Tooltip.vue'
import { useCopy } from '../../composables/useCopy.ts'
import CopyButton from '../CopyButton.vue'

const currentTimestamp = ref<number>()
const timestamp = ref<number>(generateTimestamp(new Date()))
const date = ref<Date>(new Date())
const year = ref<number>(new Date().getFullYear())
const month = ref<number>(new Date().getMonth() + 1)
const day = ref<number>(new Date().getDate())
const hour = ref<number>(new Date().getHours())
const minute = ref<number>(new Date().getMinutes())
const second = ref<number>(new Date().getSeconds())
const relative = ref<string>()
const localeString = ref<string>()
const localeStringUTC = ref<string>()
const { copySuccess: currentTimestampCopySuccess, handleCopy: currentTimestampHandleCopy } = useCopy(currentTimestamp)
const { copySuccess: timestampCopySuccess, handleCopy: timestampHandleCopy } = useCopy(timestamp)
const daysInMonth = computed<number>(() => new Date(year.value, month.value, 0).getDate())

function updateUnixTimestamp (): void {
  currentTimestamp.value = generateTimestamp(new Date())
}

function updateRelativeTime (): void {
  relative.value = generateRelativeTime(date.value)
}

function updateLocaleString (): void {
  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }

  localeString.value = date.value.toLocaleString('nl-NL', options)
  localeStringUTC.value = date.value.toLocaleString('nl-NL', {
    ...options,
    timeZone: 'UTC'
  })
}

onMounted(() => {
  updateLocaleString()
  updateUnixTimestamp() // run the function immediately when the component is mounted
  setInterval(updateUnixTimestamp, 1000) // and update the value every second afterward
  relative.value = generateRelativeTime(new Date())
})

onMounted(() => {
  updateRelativeTime()
  setInterval(updateRelativeTime, 1000)
})

watch([year, month, day, hour, minute, second], () => {
  date.value = new Date(year.value, month.value - 1, day.value, hour.value, minute.value, second.value)
  timestamp.value = generateTimestamp(date.value)
  relative.value = generateRelativeTime(date.value)
})

watch(timestamp, () => {
  const date = new Date(timestamp.value * 1000)
  year.value = date.getFullYear()
  month.value = date.getMonth() + 1
  day.value = date.getDate()
  hour.value = date.getHours()
  minute.value = date.getMinutes()
  second.value = date.getSeconds()
})

// Clamp the day when the month or year changes
watch([year, month], () => {
  if (day.value > daysInMonth.value) {
    day.value = daysInMonth.value
  }
  if (day.value < 1) {
    day.value = 1
  }
})

watch(date, () => { updateLocaleString() })

</script>

<template>
  <div class="flex items-center justify-center">
    <h2 class="text-xl pr-2">
      Current timestamp: <span
        class="font-semibold font-mono"
        v-text="currentTimestamp"
      />
    </h2>
    <Tooltip
      :show="currentTimestampCopySuccess"
    >
      <Button
        severity="secondary"
        size="small"
        @click="currentTimestampHandleCopy"
      >
        <ClipboardDocumentListIcon
          :class="{hidden: currentTimestampCopySuccess}"
          class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"
        />
        <ClipboardDocumentCheckIcon
          :class="{hidden: !currentTimestampCopySuccess}"
          class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"
        />
      </Button>
    </Tooltip>
  </div>

  <Divider />

  <div class="pb-4">
    <label
      for="unix"
      class="block text-sm font-medium leading-6"
    >Unix timestamp</label>
    <div class="mt-1 lg:w-1/2">
      <InputGroup>
        <FloatLabel variant="on">
          <InputNumber
            v-model="timestamp"
            :format="false"
            :input-props="{ inputmode: 'tel' }"
            input-id="unix"
            show-buttons
          />
        </FloatLabel>
        <CopyButton
          :copy-success="timestampCopySuccess"
          :on-click="timestampHandleCopy"
        />
      </InputGroup>
    </div>
  </div>

  <div class="columns-3 pb-4 w-auto">
    <div>
      <label
        for="year"
        class="block text-sm font-medium leading-6"
      >Year</label>
      <div class="mt-1">
        <InputNumber
          v-model="year"
          button-layout="vertical"
          input-id="year"
          :min="1970"
          :max="9000"
          :format="false"
          :input-props="{ inputmode: 'tel' }"
          show-buttons
          class="w-full"
        />
      </div>
    </div>

    <div>
      <label
        for="month"
        class="block text-sm font-medium leading-6"
      >Month</label>
      <div class="mt-1">
        <InputNumber
          v-model="month"
          button-layout="vertical"
          input-id="month"
          :min="1"
          :max="12"
          :format="false"
          :input-props="{ inputmode: 'tel' }"
          show-buttons
          class="w-full"
        />
      </div>
    </div>

    <div>
      <label
        for="day"
        class="block text-sm font-medium leading-6"
      >Day</label>
      <div class="mt-1">
        <InputNumber
          v-model="day"
          button-layout="vertical"
          input-id="day"
          :min="1"
          :max="daysInMonth"
          :format="false"
          :input-props="{ inputmode: 'tel' }"
          show-buttons
          class="w-full"
        />
      </div>
    </div>
  </div>

  <div class="columns-3">
    <div>
      <label
        for="hour"
        class="block text-sm font-medium leading-6"
      >Hour</label>
      <div class="mt-1">
        <InputNumber
          v-model="hour"
          button-layout="vertical"
          input-id="hour"
          :min="0"
          :max="23"
          :format="false"
          :input-props="{ inputmode: 'tel' }"
          show-buttons
          class="w-full"
        />
      </div>
    </div>

    <div>
      <label
        for="minute"
        class="block text-sm font-medium leading-6"
      >Minute</label>
      <div class="mt-1">
        <InputNumber
          v-model="minute"
          button-layout="vertical"
          input-id="minute"
          :min="0"
          :max="59"
          :format="false"
          :input-props="{ inputmode: 'tel' }"
          show-buttons
          class="w-full"
        />
      </div>
    </div>

    <div>
      <label
        for="second"
        class="block text-sm font-medium leading-6"
      >Second</label>
      <div class="mt-1">
        <InputNumber
          v-model="second"
          button-layout="vertical"
          input-id="second"
          :min="0"
          :max="59"
          :format="false"
          :input-props="{ inputmode: 'tel' }"
          show-buttons
          class="w-full"
        />
      </div>
    </div>
  </div>
  <div class="mt-4 grid grid-cols-2 grid-rows-3 gap-y-2 w-2/3">
    <div class="font-semibold">
      Local time:
    </div>
    <div
      v-text="localeString"
    />
    <div class="font-semibold">
      UTC:
    </div>
    <div
      v-text="localeStringUTC"
    />
    <div class="font-semibold">
      Relative:
    </div>
    <div
      v-text="relative"
    />
  </div>
</template>
