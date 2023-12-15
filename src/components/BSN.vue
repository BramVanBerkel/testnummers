<script setup lang="ts">
import {onMounted, ref} from "vue";

let BSN = ref<string>();
let success = ref<boolean>(false);

function generate() {
  const numbers = {
    9: Math.floor(Math.random() * 7),
    8: Math.floor(Math.random() * 10),
    7: Math.floor(Math.random() * 10),
    6: Math.floor(Math.random() * 10),
    5: Math.floor(Math.random() * 10),
    4: Math.floor(Math.random() * 10),
    3: Math.floor(Math.random() * 10),
    2: Math.floor(Math.random() * 10),
  }

  if (numbers[9] === 0 && numbers[8] === 0) {
    numbers[8] = 1
  }

  const sum = (9 * numbers[9] + 8 * numbers[8] + 7 * numbers[7] + 6 * numbers[6] + 5 * numbers[5] + 4 * numbers[4] + 3 * numbers[3] + 2 * numbers[2])

  let checkNr = Math.floor(sum - Math.floor(sum / 11) * 11);

  if (checkNr > 9) {
    if (numbers[2] > 0) {
      numbers[2] -= 1;
      checkNr = 8
    } else {
      numbers[2] += 1
      checkNr = 1
    }
  }

  BSN.value = Object.values(numbers).reverse().map(String).join('') + checkNr;
}

function copy(value: string) {
  navigator.clipboard.writeText(value);
  success.value = true;

  setTimeout(() => {
    success.value = false;
  }, 2000)
}

onMounted(() => generate())
</script>

<template>
  <div class="relative flex flex-grow items-stretch cursor-progress focus-within:z-10">
    <input disabled type="text" name="bsn" id="email" :value="BSN"
           class="block w-full rounded-none rounded-l-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6">
  </div>
  <button type="button" @click="generate()"
          class="relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
    <svg class="-ml-0.5 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
    </svg>
    Genereer
  </button>
  <button type="button" @click="(BSN) ? copy(BSN) : null"
          :class="[(success) ? ['text-green-600', 'bg-green-300'] : null]"
          class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 cursor-copy hover:bg-gray-50">
    <svg :class="{hidden: success}" class="-ml-0.5 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
    </svg>
    <svg :class="{hidden: !success}" class="-ml-0.5 w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"/>
    </svg>
    Kopieer
  </button>
</template>
