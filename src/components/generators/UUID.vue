<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { generateUUID } from '../../generators/UUIDGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import Tooltip from '../Tooltip.vue'
import { ArrowPathIcon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import InputText from 'primevue/inputtext'

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
    <InputGroupAddon
      @click="generate()"
    >
      <ArrowPathIcon
        :class="{'rotate-45': state.generateSuccess.value, 'text-green-600': state.generateSuccess.value}"
        class="-ml-0.5 w-6 h-6 text-gray-400 transition-transform duration-300"
      />
    </InputGroupAddon>
    <InputGroupAddon
      @click="(state.UUID) ? copy(state.UUID.value, state.copySuccess) : null"
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
</template>
