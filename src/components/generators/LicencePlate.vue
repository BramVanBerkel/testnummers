<script setup lang="ts">
import { ref } from 'vue'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import { generateLicencePlate } from '../../generators/LicencePlateGenerator.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const licencePlate = ref<string>()
const { copySuccess, handleCopy } = useCopy(licencePlate)
const { generateSuccess, generate } = useGenerate(() => {
  licencePlate.value = generateLicencePlate()
})
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
