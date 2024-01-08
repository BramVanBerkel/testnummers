<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {copyToClipboard} from "../helpers/copy.ts";
import GenerateIcon from "./icons/GenerateIcon.vue";
import CopyIcon from "./icons/CopyIcon.vue";
import CopiedIcon from "./icons/CopiedIcon.vue";
import {generatePassword} from "../generators/PasswordGenerator.ts";

let password = ref<string>();
let passwordScore: 0 | 1 | 2 | 3 | 4 | 5;

let length = ref<number>(16);
let lowercase = ref<boolean>(true);
let uppercase = ref<boolean>(true);
let numbers = ref<boolean>(true);
let symbols = ref<boolean>(true);

let success = ref<boolean>(false);

watch([length, lowercase, uppercase, numbers, symbols], generate)

function generate() {
  password.value = generatePassword(length.value, lowercase.value, uppercase.value, numbers.value, symbols.value);

  if(password.value?.length === 0) {
    passwordScore = 0;
  } else if (length.value < 4) {
    passwordScore = 1;
  } else if (length.value <= 7) {
    passwordScore = 2;
  } else if (length.value <= 11) {
    passwordScore = 3;
  } else if (length.value <= 15) {
    passwordScore = 4;
  } else {
    passwordScore = 5;
  }
}

async function copy(value: string) {
  await copyToClipboard(value);

  success.value = true;

  setTimeout(() => {
    success.value = false;
  }, 2000)
}

function select(event: FocusEvent) {
  const target = event.target as HTMLInputElement;

  target.select();
}

onMounted(() => generate())
</script>

<template>
  <div class="relative flex flex-grow items-stretch cursor-progress focus-within:z-10">
    <input readonly @focus="select" type="text" name="BSN" id="BSN" :value="password"
           class="block w-full rounded-none rounded-l-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
    <button type="button" @click="generate"
            class="relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <GenerateIcon class="-ml-0.5 w-6 h-6 text-gray-400"></GenerateIcon>
    </button>
    <button type="button" @click="(password) ? copy(password) : null"
            :class="[(success) ? ['text-green-600', 'bg-green-300', 'hover:bg-green-400'] : null]"
            class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 cursor-copy hover:bg-gray-50">
      <CopyIcon :class="{hidden: success}" class="-ml-0.5 w-6 h-6 text-gray-400"></CopyIcon>
      <CopiedIcon :class="{hidden: !success}" class="-ml-0.5 w-6 h-6 text-green-600"></CopiedIcon>
    </button>
  </div>
  <div class="flex mt-2">
    <template v-for="i in 5">
      <div class="w-1/5 px-1">
        <div
            :class="i-1<passwordScore?(passwordScore<=2?'bg-red-400':(passwordScore<=4?'bg-yellow-400':'bg-green-500')):'bg-gray-200'"
            class="h-2 rounded-xl transition-colors"></div>
      </div>
    </template>
  </div>

  <hr class="my-5 border border-gray-200">

  <label class="block text-xs font-semibold text-gray-500 mb-2">Password length</label>

  <div class="flex items-stretch gap-2 max-w-2xl">
    <input class="w-full" type="range" min="1" max="30" step="1" v-model="length">
    <div v-text="length"></div>
  </div>


  <div class="grid grid-cols-2 max-w-2xl">
    <label for="lowercase">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="lowercase" v-model="lowercase">
      <span class="text-sm font-semibold text-gray-500">Lowercase</span>
    </label>

    <label for="uppercase">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="uppercase" v-model="uppercase">
      <span class="text-sm font-semibold text-gray-500">Uppercase</span>
    </label>


    <label for="numbers">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="numbers" v-model="numbers">
      <span class="text-sm font-semibold text-gray-500">Numbers</span>
    </label>

    <label for="symbols">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="symbols" v-model="symbols">
      <span class="text-sm font-semibold text-gray-500">Symbols</span>
    </label>
  </div>


</template>
