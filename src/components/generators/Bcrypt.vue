<script setup lang="ts">
import { ref, watch } from 'vue'
import { checkBcrypt, generateBcrypt } from '../../generators/BcryptGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import CopiedIcon from '../icons/CopiedIcon.vue'
import CopyIcon from '../icons/CopyIcon.vue'
import { debounce } from '../../helpers/debounce.ts'
import { select } from '../../helpers/select.ts'

const state = {
  generateInput: ref<string>(),
  generateHash: ref<string>(),
  checkInput: ref<string>(),
  checkHash: ref<string>(),
  checkSuccess: ref<boolean>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

function generate (setSuccess: boolean = true): void {
  state.generateHash.value = generateBcrypt(state.generateInput.value)

  if (setSuccess) {
    state.generateSuccess.value = true

    setTimeout(() => {
      state.generateSuccess.value = false
    }, 300)
  }
}

function check (): void {
  state.checkSuccess.value = checkBcrypt(state.checkInput.value, state.checkHash.value)
}

watch(state.generateInput, debounce(generate))

watch([state.checkInput, state.checkHash], debounce(check))
</script>

<template>
  <div class="-space-y-px">
    <p class="pb-4 text-lg text-gray-500">
      Generate hash
    </p>
    <input
      id="generateInput"
      v-model="state.generateInput.value"
      type="text"
      name="generateInput"
      placeholder="input"
      class="relative block w-full rounded-t-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    >
    <div class="relative flex">
      <input
        id="generateHash"
        v-model="state.generateHash.value"
        type="text"
        readonly
        name="generateHash"
        placeholder="hash"
        class="relative block w-full rounded-bl-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        @focus="select"
      >
      <button
        type="button"
        class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-br-md px-3 py-2 text-sm font-semibold group text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        @click="(state.generateHash) ? copy(state.generateHash.value, state.copySuccess) : null"
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
  <hr class="my-5 border border-gray-200">
  <div class="-space-y-px">
    <p class="pb-4 text-lg text-gray-500">
      Check hash
    </p>
    <input
      id="checkInput"
      v-model="state.checkInput.value"
      type="text"
      name="checkInput"
      placeholder="input"
      class="relative block w-full rounded-t-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      :class="[
        state.checkSuccess.value === true ? ['bg-green-50', 'ring-green-500', 'text-green-900'] : [],
        state.checkSuccess.value === false ? ['bg-red-50', 'ring-red-500', 'text-red-900'] : []
      ]"
    >
    <input
      id="checkHash"
      v-model="state.checkHash.value"
      type="text"
      name="checkHash"
      placeholder="hash"
      class="relative block w-full rounded-b-md border-0 pl-3.5 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      :class="[
        state.checkSuccess.value === true ? ['bg-green-50', 'ring-green-500', 'text-green-900'] : [],
        state.checkSuccess.value === false ? ['bg-red-50', 'ring-red-500', 'text-red-900'] : []
      ]"
    >
  </div>
</template>
