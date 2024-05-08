<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { copy } from '../../helpers/copy.ts'
import { generateSHA256 } from '../../generators/SHA256Generator.ts'
import InputText from 'primevue/inputtext'
import { ClipboardDocumentCheckIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import Tooltip from '../Tooltip.vue'

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

watch(state.value, async () => { await generate() })
</script>

<template>
  <div class="-space-y-px">
    <InputText
      v-model="state.value.value"
      class="w-full rounded-b-none"
      placeholder="input"
    />
    <InputGroup>
      <InputText
        :value="state.hash.value"
        readonly
        class="w-full first:rounded-t-none"
        placeholder="hash"
      />
      <InputGroupAddon
        class="last:rounded-t-none"
        @click="(state.generateSuccess) ? copy(state.hash.value, state.copySuccess) : null"
      >
        <ClipboardDocumentListIcon
          :class="{hidden: state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"
        />
        <ClipboardDocumentCheckIcon
          :class="{hidden: !state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"
        />
        <Tooltip :show="state.copySuccess.value">
          Copied!
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
