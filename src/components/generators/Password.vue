<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { generatePasswordAndScore, type PasswordScore } from '../../generators/PasswordGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'

const password = ref<string>()
const length = ref<number>(12)
const lowercase = ref<boolean>(true)
const uppercase = ref<boolean>(true)
const numbers = ref<boolean>(true)
const symbols = ref<boolean>(true)
const generateSuccess = ref<boolean>(false)
const passwordScore = ref<PasswordScore>()
const { copySuccess, handleCopy } = useCopy(password)

function generate (setSuccess: boolean = true): void {
  const { password: generatedPassword, score } = generatePasswordAndScore(length.value, lowercase.value, uppercase.value, numbers.value, symbols.value)

  password.value = generatedPassword
  passwordScore.value = score

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })

watch([length, lowercase, uppercase, numbers, symbols], () => { generate(false) })
</script>

<template>
  <div class="pb-4">
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

  <Message :severity="passwordScore?.severity">
    Estimated time to bruteforce: {{ passwordScore?.estimatedCrackTime }}
  </Message>
  <Divider />

  <label class="block text-xs font-semibold mb-2">Password length</label>

  <div class="flex items-center gap-3 max-w-2xl">
    <Slider
      v-model="length"
      :step="1"
      :min="4"
      :max="18"
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
