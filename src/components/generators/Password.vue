<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { generatePassword } from '../../generators/PasswordGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'

type PasswordScore = 0 | 1 | 2 | 3 | 4 | 5

const state = {
  password: ref<string>(),
  length: ref<number>(16),
  lowercase: ref<boolean>(true),
  uppercase: ref<boolean>(true),
  numbers: ref<boolean>(true),
  symbols: ref<boolean>(true),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false),
  passwordScore: ref<PasswordScore>(0)
}

function generate (setSuccess: boolean = true): void {
  state.password.value = generatePassword(state.length.value, state.lowercase.value, state.uppercase.value, state.numbers.value, state.symbols.value)

  if (state.password.value?.length === 0) {
    state.passwordScore.value = 0
  } else if (state.length.value < 4) {
    state.passwordScore.value = 1
  } else if (state.length.value <= 7) {
    state.passwordScore.value = 2
  } else if (state.length.value <= 11) {
    state.passwordScore.value = 3
  } else if (state.length.value <= 15) {
    state.passwordScore.value = 4
  } else {
    state.passwordScore.value = 5
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
      <GenerateButton
        :generate-success="state.generateSuccess.value"
        :on-click="generate"
      />
      <CopyButton
        :copy-success="state.copySuccess.value"
        :on-click="() => (state.password) ? copy(state.password.value, state.copySuccess) : null"
      />
    </InputGroup>
  </div>
  <div class="flex mt-2">
    <template
      v-for="i in 5"
      :key="i"
    >
      <div class="w-1/5 px-1">
        <div
          :class="i-1<state.passwordScore.value?(state.passwordScore.value<=2?'bg-red-400':(state.passwordScore.value<=4?'bg-yellow-400':'bg-green-500')):'bg-gray-200 dark:bg-gray-600'"
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
