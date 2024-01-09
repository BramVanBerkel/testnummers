<script setup lang="ts">
import {onMounted, ref} from "vue";
import {copyToClipboard} from "../helpers/copy.ts";
import {banks, generateIBAN} from "../generators/IBANGenerator.ts";
import GenerateIcon from "./icons/GenerateIcon.vue";
import CopyIcon from "./icons/CopyIcon.vue";
import CopiedIcon from "./icons/CopiedIcon.vue";

let IBAN = ref<string>();
let copySuccess = ref<boolean>(false);
let generateSuccess = ref<boolean>(false);
let bankCode = ref<string>(banks[1].code)

function generate(setSuccess: boolean = true) {
  IBAN.value = generateIBAN(bankCode.value);

  if (setSuccess) {
    generateSuccess.value = true;

    setTimeout(() => {
      generateSuccess.value = false;
    }, 300)
  }
}

async function copy(value: string) {
  await copyToClipboard(value);

  copySuccess.value = true;

  setTimeout(() => {
    copySuccess.value = false;
  }, 2000)
}

function select(event: FocusEvent) {
  const target = event.target as HTMLInputElement;

  target.select();
}

onMounted(() => generate(false))
</script>

<template>
  <div class="relative flex flex-grow">
    <div class="absolute inset-y-0 left-0">
      <select id="bank" name="bank" @change="generate()" v-model="bankCode"
              class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-xs sm:text-base text-gray-500 focus:ring-0">
        <option v-for="bank in banks" :value="bank.code">{{ bank.name }}</option>
      </select>
    </div>
    <input readonly type="text" name="IBAN" id="IBAN" :value="IBAN" @focus="select"
           class="block w-full h-full rounded-l-md border-0 py-1.5 pl-32 sm:pl-36 pr-0 text-gray-900 text-sm sm:text-base ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
    <button type="button" @click="generate()"
            class="relative -ml-px inline-flex items-center px-2 sm:px-3 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <GenerateIcon :class="{'rotate-45': generateSuccess, 'text-green-600': generateSuccess}"
                    class="-ml-0.5 w-6 h-6 text-gray-400 transition-transform duration-300"></GenerateIcon>
    </button>
    <button type="button" @click="(IBAN) ? copy(IBAN) : null"
            class="relative -ml-px inline-flex items-center rounded-r-md px-2 sm:px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 cursor-copy hover:bg-gray-50">
      <CopyIcon :class="{hidden: copySuccess}"
                class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"></CopyIcon>
      <CopiedIcon :class="{hidden: !copySuccess}" class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"></CopiedIcon>

      <span :class="{'opacity-100': copySuccess, 'opacity-0': !copySuccess}"
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
</template>
