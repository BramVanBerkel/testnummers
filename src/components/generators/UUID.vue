<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { generateUUID } from '../../generators/UUIDGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'
import GenerateButton from '../GenerateButton.vue'

const UUID = ref<string>()
const copySuccess = ref<boolean>(false)
const generateSuccess = ref<boolean>(false)

function generate (setSuccess: boolean = true): void {
  UUID.value = generateUUID()

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })

async function handleCopy (): Promise<void> {
  await copy(UUID.value, copySuccess)
}
</script>

<template>
  <InputGroup>
    <InputText
      :value="UUID"
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
