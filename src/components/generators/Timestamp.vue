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
      for="year"
      class="block text-sm font-medium leading-6 text-gray-900"
    >Unix timestamp</label>
    <div class="mt-1">
      <input
        id="unix"
        v-model="state.timestamp.value"
        type="number"
        name="unix"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
    </div>
  </div>

  <div class="columns-3 pb-4">
    <div>
      <label
        for="year"
        class="block text-sm font-medium leading-6 text-gray-900"
      >Year</label>
      <div class="mt-1">
        <input
          id="year"
          v-model.lazy="state.year.value"
          type="number"
          name="year"
          min="1970"
          max="9000"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
      </div>
    </div>

    <div>
      <label
        for="month"
        class="block text-sm font-medium leading-6 text-gray-900"
      >Month</label>
      <div class="mt-1">
        <input
          id="month"
          v-model.lazy="state.month.value"
          type="number"
          name="month"
          min="1"
          max="12"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
      </div>
    </div>

    <div>
      <label
        for="day"
        class="block text-sm font-medium leading-6 text-gray-900"
      >Day</label>
      <div class="mt-1">
        <input
          id="day"
          v-model.lazy="state.day.value"
          type="number"
          name="day"
          min="1"
          max="31"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
      </div>
    </div>
  </div>

  <div class="columns-3">
    <div>
      <label
        for="hour"
        class="block text-sm font-medium leading-6 text-gray-900"
      >Hour</label>
      <div class="mt-1">
        <input
          id="hour"
          v-model.lazy="state.hour.value"
          type="number"
          name="hour"
          min="0"
          max="23"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
      </div>
    </div>

    <div>
      <label
        for="minute"
        class="block text-sm font-medium leading-6 text-gray-900"
      >Minute</label>
      <div class="mt-1">
        <input
          id="minute"
          v-model.lazy="state.minute.value"
          type="number"
          name="minute"
          min="0"
          max="59"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
      </div>
    </div>

    <div>
      <label
        for="second"
        class="block text-sm font-medium leading-6 text-gray-900"
      >Second</label>
      <div class="mt-1">
        <input
          id="second"
          v-model.lazy="state.second.value"
          type="number"
          name="second"
          min="0"
          max="59"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
      </div>
    </div>
  </div>
  <table class="min-w-full divide-y divide-gray-300 table-fixed">
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          Local time
        </td>
        <td
          class="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0"
          v-html="state.localeString.value"
        />
      </tr>
      <tr>
        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          UTC
        </td>
        <td
          class="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0"
          v-html="state.localeStringUTC.value"
        />
      </tr>
      <tr>
        <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          Relative
        </td>
        <td
          class="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0"
          v-html="state.relative.value"
        />
      </tr>
    </tbody>
  </table>
</template>
