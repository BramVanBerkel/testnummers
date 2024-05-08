<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { generatePassword } from '../../generators/PasswordGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import Tooltip from '../Tooltip.vue'
import { ArrowPathIcon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import InputText from 'primevue/inputtext'

let passwordScore: 0 | 1 | 2 | 3 | 4 | 5

const state = {
  password: ref<string>(),
  length: ref<number>(16),
  lowercase: ref<boolean>(true),
  uppercase: ref<boolean>(true),
  numbers: ref<boolean>(true),
  symbols: ref<boolean>(true),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

function generate (setSuccess: boolean = true): void {
  state.password.value = generatePassword(state.length.value, state.lowercase.value, state.uppercase.value, state.numbers.value, state.symbols.value)

  if (state.password.value?.length === 0) {
    passwordScore = 0
  } else if (state.length.value < 4) {
    passwordScore = 1
  } else if (state.length.value <= 7) {
    passwordScore = 2
  } else if (state.length.value <= 11) {
    passwordScore = 3
  } else if (state.length.value <= 15) {
    passwordScore = 4
  } else {
    passwordScore = 5
  }

  if (setSuccess) {
    state.generateSuccess.value = true

    setTimeout(() => {
      state.generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })

watch([state.length, state.lowercase, state.uppercase, state.numbers, state.symbols], () => { generate(false) })
</script>

<template>
  <div>
    <InputGroup>
      <InputText
        :value="state.password.value"
        readonly
        @focus="select"
      />
      <InputGroupAddon
        @click="generate()"
      >
        <ArrowPathIcon
          :class="{'rotate-45': state.generateSuccess.value, 'text-green-600': state.generateSuccess.value}"
          class="-ml-0.5 w-6 h-6 text-gray-400 transition-transform duration-300"
        />
      </InputGroupAddon>
      <InputGroupAddon
        @click="(state.password) ? copy(state.password.value, state.copySuccess) : null"
      >
        <ClipboardDocumentListIcon
          :class="{hidden: state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"
        />
        <ClipboardDocumentCheckIcon
          :class="{hidden: !state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"
        />
        <Tooltip :show="state.copySuccess.value">
          Copied!
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  </div>
  <div class="flex mt-2">
    <template
      v-for="i in 5"
      :key="i"
    >
      <div class="w-1/5 px-1">
        <div
          :class="i-1<passwordScore?(passwordScore<=2?'bg-red-400':(passwordScore<=4?'bg-yellow-400':'bg-green-500')):'bg-gray-200 dark:bg-gray-600'"
          class="h-2 rounded-xl transition-colors"
        />
      </div>
    </template>
  </div>

  <Divider />

  <label class="block text-xs font-semibold mb-2">Password length</label>

  <div class="flex items-center gap-3 max-w-2xl">
    <Slider
      v-model="state.length.value"
      :step="1"
      :min="1"
      :max="30"
      class="w-full"
    />
    <div v-text="state.length.value" />
  </div>

  <div class="grid grid-cols-2 gap-2 max-w-2xl">
    <label for="lowercase">
      <Checkbox
        v-model="state.lowercase.value"
        input-id="lowercase"
        :binary="true"
      />

      <label
        for="lowercase"
        class="ml-2 font-semibold"
      >Lowercase</label>
    </label>

    <label for="uppercase">
      <Checkbox
        v-model="state.uppercase.value"
        input-id="uppercase"
        :binary="true"
      />

      <label
        for="uppercase"
        class="ml-2 font-semibold"
      >Uppercase</label>
    </label>

    <label for="numbers">
      <Checkbox
        v-model="state.numbers.value"
        input-id="numbers"
        :binary="true"
      />

      <label
        for="numbers"
        class="ml-2 font-semibold"
      >Numbers</label>
    </label>

    <label for="symbols">
      <Checkbox
        v-model="state.symbols.value"
        input-id="symbols"
        :binary="true"
      />

      <label
        for="symbols"
        class="ml-2 font-semibold"
      >Symbols</label>
    </label>
  </div>
</template>
