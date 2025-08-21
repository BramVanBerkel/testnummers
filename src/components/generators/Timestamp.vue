<script setup lang="ts">

import { onMounted, ref, watch } from 'vue'
import { generateTimestamp } from '../../generators/UnixTimestampGenerator.ts'
import { generateRelativeTime } from '../../generators/RelativeTimeGenerator.ts'

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

function updateUnixTimestamp (): void {
  currentTimestamp.value = generateTimestamp(new Date())
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

watch(date, () => { updateLocaleString() })

</script>

<template>
  <div class="text-center text-lg">
    <h2 class="text-center text-xl">
      Current timestamp: <span
        class="font-semibold"
        v-html="currentTimestamp"
      />
    </h2>
  </div>

  <Divider />

  <div class="pb-4">
    <label
      for="unix"
      class="block text-sm font-medium leading-6"
    >Unix timestamp</label>
    <div class="mt-1">
      <InputNumber
        v-model="timestamp"
        :format="false"
        :input-props="{ inputmode: 'tel' }"
        input-id="unix"
        show-buttons
      />
    </div>
  </div>

  <div class="columns-3 pb-4">
    <div>
      <label
        for="year"
        class="block text-sm font-medium leading-6"
      >Year</label>
      <div class="mt-1">
        <InputNumber
          v-model="year"
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
          input-id="day"
          :min="1"
          :max="31"
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
          input-id="hour"
          :min="0"
          :max="24"
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
      v-html="localeString"
    />
    <div class="font-semibold">
      UTC:
    </div>
    <div
      v-html="localeStringUTC"
    />
    <div class="font-semibold">
      Relative:
    </div>
    <div
      v-html="relative"
    />
  </div>
</template>
