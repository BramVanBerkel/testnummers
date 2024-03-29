<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CopyIcon from '../icons/CopyIcon.vue'
import CopiedIcon from '../icons/CopiedIcon.vue'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import { generateSHA256 } from '../../generators/SHA256Generator.ts'

const state = {
  value: ref<string>(),
  hash: ref<string>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

async function generate (setSuccess: boolean = true): Promise<void> {
  state.hash.value = await generateSHA256(state.value.value)

  if (setSuccess) {
    state.generateSuccess.value = true

    setTimeout(() => {
      state.generateSuccess.value = false
    }, 300)
  }
}

onMounted(async () => {
  await generate(false)
})

watch(state.value, async () => { await generate() })
</script>

<template>
  <div class="-space-y-px">
    <input
      id="value"
      v-model="state.value.value"
      type="text"
      name="value"
      placeholder="input"
      class="relative block w-full rounded-t-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    >
    <div class="relative flex">
      <input
        id="hash"
        v-model="state.hash.value"
        type="text"
        readonly
        name="hash"
        placeholder="hash"
        class="relative block w-full rounded-bl-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        @focus="select"
      >
      <button
        type="button"
        class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-br-md px-3 py-2 text-sm font-semibold group text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        @click="(state.hash) ? copy(state.hash.value, state.copySuccess) : null"
      >
        <CopyIcon
          :class="{hidden: state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"
        />
        <CopiedIcon
          :class="{hidden: !state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"
        />

        <span
          :class="{'opacity-100': state.copySuccess.value, 'opacity-0': !state.copySuccess.value}"
          class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center scale-100 translate-y-0 transition-opacity duration-300"
        >
          <span
            class="rounded-md bg-gray-900 px-3 py-1 text-xs font-semibold leading-4 tracking-wide text-white drop-shadow-md filter"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="6"
              viewBox="0 0 16 6"
              class="absolute left-1/2 top-full -ml-2 -mt-px text-gray-900"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                fill="currentColor"
              />
            </svg>
            Copied!
          </span>
        </span>
      </button>
    </div>
  </div>
</template>
