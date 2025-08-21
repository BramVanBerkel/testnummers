<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import { generateLicencePlate } from '../../generators/LicencePlateGenerator.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'

const licencePlate = ref<string>()
const generateSuccess = ref<boolean>(false)
const { copySuccess, handleCopy } = useCopy(licencePlate)

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
