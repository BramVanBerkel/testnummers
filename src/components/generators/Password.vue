<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { generatePassword } from '../../generators/PasswordGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'

type PasswordScore = 0 | 1 | 2 | 3 | 4 | 5

const password = ref<string>()
const length = ref<number>(16)
const lowercase = ref<boolean>(true)
const uppercase = ref<boolean>(true)
const numbers = ref<boolean>(true)
const symbols = ref<boolean>(true)
const copySuccess = ref<boolean>(false)
const generateSuccess = ref<boolean>(false)
const passwordScore = ref<PasswordScore>(0)

function generate (setSuccess: boolean = true): void {
  password.value = generatePassword(length.value, lowercase.value, uppercase.value, numbers.value, symbols.value)

  if (password.value?.length === 0) {
    passwordScore.value = 0
  } else if (length.value < 4) {
    passwordScore.value = 1
  } else if (length.value <= 7) {
    passwordScore.value = 2
  } else if (length.value <= 11) {
    passwordScore.value = 3
  } else if (length.value <= 15) {
    passwordScore.value = 4
  } else {
    passwordScore.value = 5
  }

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })

watch([length, lowercase, uppercase, numbers, symbols], () => { generate(false) })
async function handleCopy (): Promise<void> {
  await copy(password.value, copySuccess)
}
</script>

<template>
  <div>
    <InputGroup>
      <InputText
        :value="password"
        readonly
        @focus="select"
      />
      <GenerateButton
        :generate-success="generateSuccess"
        :on-click="generate"
      />
      <CopyButton
        :copy-success="copySuccess"
        :on-click="handleCopy"
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
      v-model="length"
      :step="1"
      :min="1"
      :max="30"
      class="w-full"
    />
    <div v-text="length" />
  </div>

  <div class="grid grid-cols-2 gap-2 max-w-2xl">
    <label for="lowercase">
      <Checkbox
        v-model="lowercase"
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
        v-model="uppercase"
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
        v-model="numbers"
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
        v-model="symbols"
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
