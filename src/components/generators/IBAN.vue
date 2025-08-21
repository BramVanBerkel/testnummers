<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { banks, generateIBAN } from '../../generators/IBANGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'

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

watch(state.bankCode, () => { generate(false) })
</script>

<template>
  <div class="flex gap-2">
    <Select
      v-model="state.bankCode.value"
      :options="banks"
      option-label="name"
      option-value="code"
    />

    <InputGroup>
      <InputText
        :value="state.IBAN.value"
        readonly
        @focus="select"
      />
      <GenerateButton
        :generate-success="state.generateSuccess.value"
        :on-click="generate"
      />
      <CopyButton
        :copy-success="state.copySuccess.value"
        :on-click="() => (state.IBAN) ? copy(state.IBAN.value, state.copySuccess) : null"
      />
    </InputGroup>
  </div>
</template>
