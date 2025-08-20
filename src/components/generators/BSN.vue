<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import { onMounted, ref } from 'vue'
import { copy } from '../../helpers/copy.ts'
import { generateBSN } from '../../generators/BSNGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'

const state = {
  BSN: ref<string>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

function generate (setSuccess: boolean = true): void {
  state.BSN.value = generateBSN()

  if (setSuccess) {
    state.generateSuccess.value = true

    setTimeout(() => {
      state.generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => {
  generate(false)
})
</script>

<template>
  <InputGroup>
    <InputText
      :value="state.BSN.value"
      readonly
      @focus="select"
    />
    <GenerateButton
      :generate-success="state.generateSuccess.value"
      :on-click="generate"
    />
    <CopyButton
      :copy-success="state.copySuccess.value"
      :on-click="() => (state.BSN) ? copy(state.BSN.value, state.copySuccess) : null"
    />
  </InputGroup>
</template>
