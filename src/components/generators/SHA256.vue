<script setup lang="ts">
import { ref, watch } from 'vue'
import { generateSHA256 } from '../../generators/SHA256Generator.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const value = ref<string>()
const hash = ref<string>()
const { copySuccess, handleCopy } = useCopy(hash)
const { generate } = useGenerate(async () => {
  hash.value = await generateSHA256(value.value)
})

watch(value, () => { void generate() })
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
        <label for="sha256-hash">Hash</label>
      </FloatLabel>
      <CopyButton
        :copy-success="copySuccess"
        :on-click="handleCopy"
      />
    </InputGroup>
  </div>
</template>
