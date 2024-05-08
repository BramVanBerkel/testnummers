<script setup lang="ts">

import { onMounted, ref, watch } from 'vue'
import { generateTimestamp } from '../../generators/UnixTimestampGenerator.ts'
import { generateRelativeTime } from '../../generators/RelativeTimeGenerator.ts'

const state = {
  currentTimestamp: ref<number>(),
  timestamp: ref<number>(generateTimestamp(new Date())),
  date: ref<Date>(new Date()),
  year: ref<number>(new Date().getFullYear()),
  month: ref<number>(new Date().getMonth() + 1),
  day: ref<number>(new Date().getDate()),
  hour: ref<number>(new Date().getHours()),
  minute: ref<number>(new Date().getMinutes()),
  second: ref<number>(new Date().getSeconds()),
  relative: ref<string>(),
  localeString: ref<string>(),
  localeStringUTC: ref<string>()
}

function updateUnixTimestamp (): void {
  state.currentTimestamp.value = generateTimestamp(new Date())
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

  state.localeString.value = state.date.value.toLocaleString('nl-NL', options)
  state.localeStringUTC.value = state.date.value.toLocaleString('nl-NL', {
    ...options,
    timeZone: 'UTC'
  })
}

onMounted(() => {
  updateLocaleString()
  updateUnixTimestamp() // run the function immediately when the component is mounted
  setInterval(updateUnixTimestamp, 1000) // and update the value every second afterward
  state.relative.value = generateRelativeTime(new Date())
})

watch([state.year, state.month, state.day, state.hour, state.minute, state.second], () => {
  state.date.value = new Date(state.year.value, state.month.value - 1, state.day.value, state.hour.value, state.minute.value, state.second.value)
  state.timestamp.value = generateTimestamp(state.date.value)
  state.relative.value = generateRelativeTime(state.date.value)
})

watch(state.timestamp, () => {
  const date = new Date(state.timestamp.value * 1000)
  state.year.value = date.getFullYear()
  state.month.value = date.getMonth() + 1
  state.day.value = date.getDate()
  state.hour.value = date.getHours()
  state.minute.value = date.getMinutes()
  state.second.value = date.getSeconds()
})

watch(state.date, () => { updateLocaleString() })

</script>

<template>
  <div class="text-center text-lg">
    <h2 class="text-center text-xl">
      Current timestamp: <span
        class="font-semibold"
        v-html="state.currentTimestamp.value"
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
        v-model="state.timestamp.value"
        :format="false"
        :input-props="{ type: 'number', inputmode: 'tel' }"
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
          v-model="state.year.value"
          input-id="year"
          :min="1970"
          :max="9000"
          :format="false"
          :input-props="{ type: 'number', inputmode: 'tel' }"
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
          v-model="state.month.value"
          input-id="month"
          :min="1"
          :max="12"
          :format="false"
          :input-props="{ type: 'number', inputmode: 'tel' }"
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
          v-model="state.day.value"
          input-id="day"
          :min="1"
          :max="31"
          :format="false"
          :input-props="{ type: 'number', inputmode: 'tel' }"
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
          v-model="state.hour.value"
          input-id="hour"
          :min="0"
          :max="24"
          :format="false"
          :input-props="{ type: 'number', inputmode: 'tel' }"
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
          v-model="state.minute.value"
          input-id="minute"
          :min="0"
          :max="59"
          :format="false"
          :input-props="{ type: 'number', inputmode: 'tel' }"
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
          v-model="state.second.value"
          input-id="second"
          :min="0"
          :max="59"
          :format="false"
          :input-props="{ type: 'number', inputmode: 'tel' }"
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
      v-html="state.localeString.value"
    />
    <div class="font-semibold">
      UTC:
    </div>
    <div
      v-html="state.localeStringUTC.value"
    />
    <div class="font-semibold">
      Relative:
    </div>
    <div
      v-html="state.relative.value"
    />
  </div>
</template>
