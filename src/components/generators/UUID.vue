<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { generateUUID } from '../../generators/UUIDGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'
import GenerateButton from '../GenerateButton.vue'

const state = {
  UUID: ref<string>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

function generate (setSuccess: boolean = true): void {
  state.UUID.value = generateUUID()

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
      :value="state.UUID.value"
      readonly
      @focus="select"
    />
    <GenerateButton
      :generate-success="state.generateSuccess.value"
      :on-click="generate"
    />
    <CopyButton
      :copy-success="state.copySuccess.value"
      :on-click="() => (state.UUID) ? copy(state.UUID.value, state.copySuccess) : null"
    />
  </InputGroup>
</template>
