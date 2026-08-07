<script setup lang="ts">
import { ref } from 'vue'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'
import { generateDriversLicenceNumber } from '../../generators/DriversLicenceNumberGenerator.ts'

const driversLicenceNumber = ref<string>()
const { handleCopy } = useCopy(driversLicenceNumber, 'drivers licence number')
const { generateSuccess, generate } = useGenerate(() => {
  driversLicenceNumber.value = generateDriversLicenceNumber()
})
</script>

<template>
  <div class="input-group">
    <jelly-input
      :value.attr="driversLicenceNumber"
      readonly
      label="Drivers licence number"
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
</template>
