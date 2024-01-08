<script setup lang="ts">
import {onMounted, ref} from "vue";
import {copyToClipboard} from "../helpers/copy.ts";
import GenerateIcon from "./icons/GenerateIcon.vue";
import CopyIcon from "./icons/CopyIcon.vue";
import CopiedIcon from "./icons/CopiedIcon.vue";
import {generateUUID} from "../generators/UUIDGenerator.ts";

let UUID = ref<string>();
let success = ref<boolean>(false);

function generate() {
  UUID.value = generateUUID();
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
    <input readonly @focus="select" type="text" name="BSN" id="BSN" :value="UUID"
           class="block w-full rounded-none rounded-l-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
  </div>
  <button type="button" @click="generate"
          class="relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
    <GenerateIcon class="-ml-0.5 w-6 h-6 text-gray-400"></GenerateIcon>
  </button>
  <button type="button" @click="(UUID) ? copy(UUID) : null"
          :class="[(success) ? ['text-green-600', 'bg-green-300', 'hover:bg-green-400'] : null]"
          class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 cursor-copy hover:bg-gray-50">
    <CopyIcon :class="{hidden: success}" class="-ml-0.5 w-6 h-6 text-gray-400"></CopyIcon>
    <CopiedIcon :class="{hidden: !success}" class="-ml-0.5 w-6 h-6 text-green-600"></CopiedIcon>
  </button>
</template>
