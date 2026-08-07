<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { generatePasswordAndScore, type PasswordScore } from '../../generators/PasswordGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const password = ref<string>()
const length = ref<number>(12)
const charset = reactive({ lowercase: true, uppercase: true, numbers: true, symbols: true })
const passwordScore = ref<PasswordScore>()
const { canCopy, handleCopy } = useCopy(password, 'password')
const { generateSuccess, generate } = useGenerate(() => {
  const { password: generatedPassword, score } = generatePasswordAndScore(length.value, charset.lowercase, charset.uppercase, charset.numbers, charset.symbols)
  password.value = generatedPassword
  passwordScore.value = score
})

const charsetLabels: Record<keyof typeof charset, string> = {
  lowercase: 'Lowercase',
  uppercase: 'Uppercase',
  numbers: 'Numbers',
  symbols: 'Symbols'
}

watch([length, charset], () => { void generate(false) })

function onLengthInput (event: Event): void {
  length.value = Number((event.target as HTMLInputElement).value)
}

function onToggle (key: keyof typeof charset, event: Event): void {
  charset[key] = (event.target as HTMLInputElement).checked
}
</script>

<template>
  <div class="input-group field">
    <jelly-input
      :value.attr="password"
      readonly
      label="Password"
      @focus="select"
    />
    <div class="input-group-actions">
      <GenerateButton
        :generate-success="generateSuccess"
        :on-click="generate"
      />
      <CopyButton
        :on-click="handleCopy"
        :disabled="!canCopy"
      />
    </div>
  </div>

  <jelly-alert :tone="passwordScore?.severity">
    Estimated time to bruteforce: {{ passwordScore?.estimatedCrackTime }}
  </jelly-alert>

  <jelly-divider />

  <jelly-label
    class="field-label"
    for="password-length"
  >
    Password length
  </jelly-label>

  <div class="slider-row field">
    <jelly-slider
      id="password-length"
      :value.attr="length"
      min="4"
      max="18"
      step="1"
      @input="onLengthInput"
    />
    <span class="slider-value">{{ length }}</span>
  </div>

  <div class="checkbox-grid">
    <jelly-checkbox
      v-for="(label, key) in charsetLabels"
      :key="key"
      :checked="charset[key]"
      @change="onToggle(key, $event)"
    >
      {{ label }}
    </jelly-checkbox>
  </div>
</template>
