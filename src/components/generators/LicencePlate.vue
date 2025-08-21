<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import { generateLicencePlate } from '../../generators/LicencePlateGenerator.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'

const state = {
  licencePlate: ref<string>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

function generate (setSuccess: boolean = true): void {
  state.licencePlate.value = generateLicencePlate()

  if (setSuccess) {
    state.generateSuccess.value = true

    setTimeout(() => {
      state.generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })
</script>

<template>
  <InputGroup>
    <InputText
      :value="state.licencePlate.value"
      readonly
      @focus="select"
    />
    <GenerateButton
      :generate-success="state.generateSuccess.value"
      :on-click="generate"
    />
    <CopyButton
      :copy-success="state.copySuccess.value"
      :on-click="() => (state.licencePlate) ? copy(state.licencePlate.value, state.copySuccess) : null"
    />
  </InputGroup>
</template>
