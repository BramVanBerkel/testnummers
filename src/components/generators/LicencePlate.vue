<script lang="ts" setup>
import { ref } from 'vue'
import { generateLicencePlate } from '../../generators/LicencePlateGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const licencePlate = ref<string>()
const { handleCopy } = useCopy(licencePlate)
const { generateSuccess, generate } = useGenerate(() => {
  licencePlate.value = generateLicencePlate()
})
</script>

<template>
  <div class="input-group">
    <jelly-input
      :value.attr="licencePlate"
      readonly
      label="Licence plate"
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
