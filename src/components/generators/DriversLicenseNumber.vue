<script setup lang="ts">
import { ref } from 'vue'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'
import { generateDriversLicenceNumber } from '../../generators/DriversLicenceNumberGenerator.ts'

const driversLicenceNumber = ref<string>()
const { copySuccess, handleCopy } = useCopy(driversLicenceNumber)
const { generateSuccess, generate } = useGenerate(() => {
  driversLicenceNumber.value = generateDriversLicenceNumber()
})
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
