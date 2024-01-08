<script setup lang="ts">
import {onMounted, ref} from "vue";
import {copyToClipboard} from "../helpers/copy.ts";
import {banks, generateIBAN} from "../generators/IBANGenerator.ts";
import GenerateIcon from "./icons/GenerateIcon.vue";
import CopyIcon from "./icons/CopyIcon.vue";
import CopiedIcon from "./icons/CopiedIcon.vue";

let IBAN = ref<string>();
let success = ref<boolean>(false);
let bankCode = ref<string>(banks[1].code)

function generate() {
  IBAN.value = generateIBAN(bankCode.value);
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
  <div class="relative flex flex-grow">
    <div class="absolute inset-y-0 left-0">
      <select id="bank" name="bank" @change="generate" v-model="bankCode"
              class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-xs sm:text-base text-gray-500 focus:ring-0">
        <option v-for="bank in banks" :value="bank.code">{{ bank.name }}</option>
      </select>
    </div>
    <input readonly type="text" name="IBAN" id="IBAN" :value="IBAN" @focus="select"
           class="block w-full h-full rounded-l-md border-0 py-1.5 pl-32 sm:pl-36 pr-0 text-gray-900 text-sm sm:text-base ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
    <button type="button" @click="generate"
            class="relative -ml-px inline-flex items-center px-2 sm:px-3 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <GenerateIcon class="-ml-0.5 w-5 h-5 sm:w-6 sm:h-6 text-gray-400"></GenerateIcon>
    </button>
    <button type="button" @click="(IBAN) ? copy(IBAN) : null"
            :class="[(success) ? ['text-green-600', 'bg-green-300', 'hover:bg-green-400'] : null]"
            class="relative -ml-px inline-flex items-center rounded-r-md px-2 sm:px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 cursor-copy hover:bg-gray-50">
      <CopyIcon :class="{hidden: success}" class="-ml-0.5 w-5 h-5 sm:w-6 sm:h-6 text-gray-400"></CopyIcon>
      <CopiedIcon :class="{hidden: !success}" class="-ml-0.5 w-5 h-5 sm:w-6 sm:h-6 text-green-600"></CopiedIcon>
    </button>
  </div>
</template>
