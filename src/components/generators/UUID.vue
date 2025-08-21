<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { generateUUID } from '../../generators/UUIDGenerator.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'
import GenerateButton from '../GenerateButton.vue'
import { useCopy } from '../../composables/useCopy.ts'

const UUID = ref<string>()
const generateSuccess = ref<boolean>(false)
const { copySuccess, handleCopy } = useCopy(UUID)

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
