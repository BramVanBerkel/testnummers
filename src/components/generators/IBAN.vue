<script setup lang="ts">
import { ref, watch } from 'vue'
import { banks, generateIBAN } from '../../generators/IBANGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const IBAN = ref<string>()
const bankCode = ref<string>(banks[1].code)
const { copySuccess, handleCopy } = useCopy(IBAN)
const { generateSuccess, generate } = useGenerate(() => {
  IBAN.value = generateIBAN(bankCode.value)
})

watch(bankCode, () => { void generate(false) })
</script>

<template>
  <div class="flex gap-2">
    <Select
      v-model="bankCode"
      :options="banks"
      option-label="name"
      option-value="code"
    />

    <InputGroup>
      <InputText
        :value="IBAN"
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
</template>
