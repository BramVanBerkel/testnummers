<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { generateUUID, UUIDVersions } from '../../generators/UUIDGenerator.ts'
import { select } from '../../helpers/select.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'
import GenerateButton from '../GenerateButton.vue'
import { useCopy } from '../../composables/useCopy.ts'

const UUID = ref<string>()
const UUIDVersion = ref<string>(UUIDVersions[3].code)
const generateSuccess = ref<boolean>(false)
const { copySuccess, handleCopy } = useCopy(UUID)

function generate (setSuccess: boolean = true): void {
  UUID.value = generateUUID(UUIDVersion.value)

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

onMounted(() => { generate(false) })

watch(UUIDVersion, () => { generate(false) })
</script>

<template>
  <div class="flex gap-2">
    <Select
      v-model="UUIDVersion"
      :options="UUIDVersions"
      option-label="name"
      option-value="code"
    />
    <InputGroup>
      <InputText
        :value="UUID"
        readonly
        @focus="select"
      />
      <GenerateButton
        :generate-success="generateSuccess"
        :on-click="generate"
      />
      <CopyButton
        :copy-success="copySuccess"
        :on-click="handleCopy"
      />
    </InputGroup>
  </div>
</template>
