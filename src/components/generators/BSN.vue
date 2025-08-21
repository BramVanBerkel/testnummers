<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import { onMounted, ref } from 'vue'
import { generateBSN } from '../../generators/BSNGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'

const BSN = ref<string>()
const generateSuccess = ref<boolean>(false)
const { copySuccess, handleCopy } = useCopy(BSN)

function generate (setSuccess: boolean = true): void {
  BSN.value = generateBSN()

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
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
      :value="BSN"
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
