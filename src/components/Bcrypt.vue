<script setup lang="ts">
import {ref, watch} from "vue";
import {generateBcrypt} from "../generators/BcryptGenerator.ts";
import {copy} from "../helpers/copy.ts";
import CopiedIcon from "./icons/CopiedIcon.vue";
import CopyIcon from "./icons/CopyIcon.vue";
import {debounce} from "../helpers/debounce.ts";

const state = {
  input: ref<string>(),
  hash: ref<string>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false),
}

function generate(setSuccess: boolean = true) {
  console.log('generateBcrypt(state.input.value)', generateBcrypt(state.input.value));

  state.hash.value = generateBcrypt(state.input.value);

  if (setSuccess) {
    state.generateSuccess.value = true;

    setTimeout(() => {
      state.generateSuccess.value = false;
    }, 300)
  }
}

function select(event: FocusEvent) {
  const target = event.target as HTMLInputElement;

  target.select();
}

watch(state.input, debounce(generate));
</script>

<template>
  <div class="-space-y-px">
    <input type="text" name="input" id="input" v-model="state.input.value" placeholder="input"
           class="relative block w-full rounded-t-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
    <div class="relative flex">
      <input type="text" readonly @focus="select" name="hash" id="hash" v-model="state.hash.value" placeholder="hash"
             class="relative block w-full rounded-bl-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
      <button type="button" @click="(state.hash) ? copy(state.hash.value, state.copySuccess) : null"
              class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-br-md px-3 py-2 text-sm font-semibold group text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
  </div>
</template>
