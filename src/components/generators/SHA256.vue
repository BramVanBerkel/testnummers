<script setup lang="ts">
import { ref, watch } from 'vue'
import { generateSHA256 } from '../../generators/SHA256Generator.ts'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const value = ref<string>()
const hash = ref<string>()
const { handleCopy } = useCopy(hash, 'hash')
const { generate } = useGenerate(async () => {
  hash.value = await generateSHA256(value.value)
})

watch(value, () => { void generate() })
</script>

<template>
  <div class="field">
    <jelly-label
      class="field-label"
      for="sha256-input"
    >
      Input
    </jelly-label>
    <jelly-input
      id="sha256-input"
      v-model="value"
    />
  </div>

  <div class="field">
    <jelly-label
      class="field-label"
      for="sha256-hash"
    >
      Hash
    </jelly-label>
    <div class="input-group">
      <jelly-input
        id="sha256-hash"
        :value.attr="hash"
        readonly
      />
      <div class="input-group-actions">
        <CopyButton :on-click="handleCopy" />
      </div>
    </div>
  </div>
</template>
