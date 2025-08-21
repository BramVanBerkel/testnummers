<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { copy } from '../../helpers/copy.ts'
import { generateSHA256 } from '../../generators/SHA256Generator.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'

const state = {
  value: ref<string>(),
  hash: ref<string>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

async function generate (setSuccess: boolean = true): Promise<void> {
  state.hash.value = await generateSHA256(state.value.value)

  if (setSuccess) {
    state.generateSuccess.value = true

    setTimeout(() => {
      state.generateSuccess.value = false
    }, 300)
  }
}

onMounted(async () => {
  await generate(false)
})

watch(state.value, async () => {
  await generate()
})
</script>

<template>
  <div class="pb-4">
    <FloatLabel variant="on">
      <InputText
        id="sha256-input"
        v-model="state.value.value"
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
          v-model="state.hash.value"
          readonly
          class="w-full first:rounded-t-none"
        />
        <label for="sha256-input">Hash</label>
      </FloatLabel>
      <CopyButton
        :copy-success="state.copySuccess.value"
        :on-click="() => (state.hash) ? copy(state.hash.value, state.copySuccess) : null"
      />
    </InputGroup>
  </div>
</template>
