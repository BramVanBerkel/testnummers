<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { copy } from '../../helpers/copy.ts'
import { generateSHA256 } from '../../generators/SHA256Generator.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'

const value = ref<string>()
const hash = ref<string>()
const copySuccess = ref<boolean>(false)
const generateSuccess = ref<boolean>(false)

async function generate (setSuccess: boolean = true): Promise<void> {
  hash.value = await generateSHA256(value.value)

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

onMounted(async () => {
  await generate(false)
})

watch(value, async () => {
  await generate()
})

async function handleCopy (): Promise<void> {
  await copy(hash.value, copySuccess)
}
</script>

<template>
  <div class="pb-4">
    <FloatLabel variant="on">
      <InputText
        id="sha256-input"
        v-model="value"
        class="w-full rounded-b-none"
      />
      <label for="sha256-input">Input</label>
    </FloatLabel>
  </div>

  <div>
    <InputGroup>
      <FloatLabel variant="on">
        <InputText
          id="sha256-hash"
          v-model="hash"
          readonly
          class="w-full first:rounded-t-none"
        />
        <label for="sha256-input">Hash</label>
      </FloatLabel>
      <CopyButton
        :copy-success="copySuccess"
        :on-click="handleCopy"
      />
    </InputGroup>
  </div>
</template>
