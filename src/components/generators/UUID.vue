<script setup lang="ts">
import { ref, watch } from 'vue'
import { generateUUID, UUIDVersions } from '../../generators/UUIDGenerator.ts'
import { select } from '../../helpers/select.ts'
import CopyButton from '../CopyButton.vue'
import GenerateButton from '../GenerateButton.vue'
import { useCopy } from '../../composables/useCopy.ts'
import { useGenerate } from '../../composables/useGenerate.ts'

const UUID = ref<string>()
const UUIDVersion = ref<string>(UUIDVersions[3].code)
const { handleCopy } = useCopy(UUID, 'UUID')
const { generateSuccess, generate } = useGenerate(() => {
  UUID.value = generateUUID(UUIDVersion.value)
})

watch(UUIDVersion, () => { void generate(false) })

function onVersionChange (event: Event): void {
  UUIDVersion.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="field-row">
    <jelly-select
      class="inline-select"
      style="--select-min-width: 9.5rem"
      :value.attr="UUIDVersion"
      label="UUID version"
      @change="onVersionChange"
    >
      <jelly-option
        v-for="version in UUIDVersions"
        :key="version.code"
        :value.attr="version.code"
      >
        {{ version.name }}
      </jelly-option>
    </jelly-select>
    <div class="input-group">
      <jelly-input
        :value.attr="UUID"
        readonly
        label="UUID"
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
