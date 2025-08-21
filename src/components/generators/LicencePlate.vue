<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import { generateLicencePlate } from '../../generators/LicencePlateGenerator.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'

const licencePlate = ref<string>()
const copySuccess = ref<boolean>(false)
const generateSuccess = ref<boolean>(false)

function generate (setSuccess: boolean = true): void {
  licencePlate.value = generateLicencePlate()

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })
async function handleCopy (): Promise<void> {
  await copy(licencePlate.value, copySuccess)
}
</script>

<template>
  <InputGroup>
    <InputText
      :value="licencePlate"
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
</template>
