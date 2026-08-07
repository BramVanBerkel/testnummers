<script lang="ts" setup>
import { ref } from 'vue'
import { generateBSN } from '../../generators/BSNGenerator.ts'
import { select } from '../../helpers/select.ts'
import GenerateButton from '../GenerateButton.vue'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const BSN = ref<string>()
const { handleCopy } = useCopy(BSN, 'BSN')
const { generateSuccess, generate } = useGenerate(() => {
  BSN.value = generateBSN()
})
</script>

<template>
  <div class="input-group">
    <jelly-input
      :value.attr="BSN"
      readonly
      label="BSN"
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
