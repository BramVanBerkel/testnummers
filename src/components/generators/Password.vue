<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import GenerateIcon from "../icons/GenerateIcon.vue";
import CopyIcon from "../icons/CopyIcon.vue";
import CopiedIcon from "../icons/CopiedIcon.vue";
import {generatePassword} from "../../generators/PasswordGenerator.ts";
import {copy} from "../../helpers/copy.ts";
import {select} from "../../helpers/select.ts";

let passwordScore: 0 | 1 | 2 | 3 | 4 | 5;

const state = {
  password: ref<string>(),
  length: ref<number>(16),
  lowercase: ref<boolean>(true),
  uppercase: ref<boolean>(true),
  numbers: ref<boolean>(true),
  symbols: ref<boolean>(true),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false),
}

function generate(setSuccess: boolean = true) {
  state.password.value = generatePassword(state.length.value, state.lowercase.value, state.uppercase.value, state.numbers.value, state.symbols.value);

  if (state.password.value?.length === 0) {
    passwordScore = 0;
  } else if (state.length.value < 4) {
    passwordScore = 1;
  } else if (state.length.value <= 7) {
    passwordScore = 2;
  } else if (state.length.value <= 11) {
    passwordScore = 3;
  } else if (state.length.value <= 15) {
    passwordScore = 4;
  } else {
    passwordScore = 5;
  }

  if (setSuccess) {
    state.generateSuccess.value = true;

    setTimeout(() => {
      state.generateSuccess.value = false;
    }, 300)
  }
}

onMounted(() => generate(false))

watch([state.length, state.lowercase, state.uppercase, state.numbers, state.symbols], () => generate(false))
</script>

<template>
  <div class="relative flex flex-grow items-stretch focus-within:z-10">
    <input readonly @focus="select" type="text" name="BSN" id="BSN" :value="state.password.value"
           class="block w-full rounded-none rounded-l-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
    <button type="button" @click="generate()"
            class="relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <GenerateIcon :class="{'rotate-45': state.generateSuccess.value, 'text-green-600': state.generateSuccess.value}"
                    class="-ml-0.5 w-6 h-6 text-gray-400 transition-transform duration-300"></GenerateIcon>
    </button>
    <button type="button" @click="(state.password.value) ? copy(state.password.value, state.copySuccess) : null"
            class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <CopyIcon :class="{hidden: state.copySuccess.value}"
                class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"></CopyIcon>
      <CopiedIcon :class="{hidden: !state.copySuccess.value}" class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"></CopiedIcon>

      <span :class="{'opacity-100': state.copySuccess.value, 'opacity-0': !state.copySuccess.value}"
            class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center scale-100 translate-y-0 transition-opacity duration-300">
       <span
           class="rounded-md bg-gray-900 px-3 py-1 text-xs font-semibold leading-4 tracking-wide text-white drop-shadow-md filter">
          <svg
              aria-hidden="true" width="16" height="6" viewBox="0 0 16 6"
              class="absolute left-1/2 top-full -ml-2 -mt-px text-gray-900">
             <path fill-rule="evenodd" clip-rule="evenodd"
                   d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                   fill="currentColor"></path>
          </svg>
          Copied!
       </span>
    </span>
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
    <input class="w-full" type="range" min="1" max="30" step="1" v-model="state.length.value">
    <div v-text="state.length.value"></div>
  </div>


  <div class="grid grid-cols-2 max-w-2xl">
    <label for="lowercase">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="lowercase" v-model="state.lowercase.value">
      <span class="text-sm font-semibold text-gray-500">Lowercase</span>
    </label>

    <label for="uppercase">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="uppercase" v-model="state.uppercase.value">
      <span class="text-sm font-semibold text-gray-500">Uppercase</span>
    </label>


    <label for="numbers">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="numbers" v-model="state.numbers.value">
      <span class="text-sm font-semibold text-gray-500">Numbers</span>
    </label>

    <label for="symbols">
      <input type="checkbox" class="h-4 w-4 mr-1 rounded border-gray-300" id="symbols" v-model="state.symbols.value">
      <span class="text-sm font-semibold text-gray-500">Symbols</span>
    </label>
  </div>


</template>
