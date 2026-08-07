<script setup lang="ts">
import { ref, watch } from 'vue'
import { banks, generateIBAN } from '../../generators/IBANGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const IBAN = ref<string>()
const bankCode = ref<string>(banks[1].code)
const { handleCopy } = useCopy(IBAN)
const { generateSuccess, generate } = useGenerate(() => {
  IBAN.value = generateIBAN(bankCode.value)
})

watch(bankCode, () => { void generate(false) })

function onBankChange (event: Event): void {
  bankCode.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="field-row">
    <jelly-select
      class="inline-select"
      :value.attr="bankCode"
      label="Bank"
      @change="onBankChange"
    >
      <jelly-option
        v-for="bank in banks"
        :key="bank.code"
        :value.attr="bank.code"
      >
        {{ bank.name }}
      </jelly-option>
    </jelly-select>
    <div class="input-group">
      <jelly-input
        :value.attr="IBAN"
        readonly
        label="IBAN"
        @focus="select"
      />
      <div class="input-group-actions">
        <GenerateButton
          :generate-success="generateSuccess"
          :on-click="generate"
        />
        <CopyButton :on-click="handleCopy" />
      </div>
    </div>
  </div>
</template>
