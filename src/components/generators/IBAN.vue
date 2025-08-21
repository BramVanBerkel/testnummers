<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { banks, generateIBAN } from '../../generators/IBANGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'

const IBAN = ref<string>()
const copySuccess = ref<boolean>(false)
const generateSuccess = ref<boolean>(false)
const bankCode = ref<string>(banks[1].code)

function generate (setSuccess: boolean = true): void {
  IBAN.value = generateIBAN(bankCode.value)

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })

watch(bankCode, () => { generate(false) })

async function handleCopy (): Promise<void> {
  await copy(IBAN.value, copySuccess)
}
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
