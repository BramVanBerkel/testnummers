<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { banks, generateIBAN } from '../../generators/IBANGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import { ArrowPathIcon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import InputText from 'primevue/inputtext'
import Tooltip from '../Tooltip.vue'

const state = {
  IBAN: ref<string>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false),
  bankCode: ref<string>(banks[1].code)
}

function generate (setSuccess: boolean = true): void {
  state.IBAN.value = generateIBAN(state.bankCode.value)

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
  <div class="flex gap-2">
    <Dropdown
      v-model="state.bankCode.value"
      :options="banks"
      scroll-height="250px"
      option-label="name"
      option-value="code"
      class="w-50"
    />

    <InputGroup>
      <InputText
        :value="state.IBAN.value"
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
        @click="(state.IBAN) ? copy(state.IBAN.value, state.copySuccess) : null"
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
