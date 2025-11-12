<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { generateDriversLicenceNumber } from '../../generators/DriversLicenceNumberGenerator.ts'

const driversLicenceNumber = ref<string>()
const generateSuccess = ref<boolean>(false)
const { copySuccess, handleCopy } = useCopy(driversLicenceNumber)

function generate (setSuccess: boolean = true): void {
  driversLicenceNumber.value = generateDriversLicenceNumber()

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
      :value="driversLicenceNumber"
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
