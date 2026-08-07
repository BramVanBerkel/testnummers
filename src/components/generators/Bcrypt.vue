<script setup lang="ts">
import { ref, watch } from 'vue'
import { checkBcrypt, generateBcrypt } from '../../generators/BcryptGenerator.ts'
import { debounce } from '../../helpers/debounce.ts'
import CopyButton from '../CopyButton.vue'
import { useCopy } from '../../composables/useCopy.ts'

const generateInput = ref<string>()
const generateHash = ref<string>()
const checkInput = ref<string>()
const checkHash = ref<string>()
const checkSuccess = ref<boolean>()
const { canCopy, handleCopy } = useCopy(generateHash, 'bcrypt hash')

async function generate (): Promise<void> {
  generateHash.value = await generateBcrypt(generateInput.value)
}

async function check (): Promise<void> {
  checkSuccess.value = await checkBcrypt(checkInput.value, checkHash.value)
}

watch(generateInput, debounce(generate))

watch([checkInput, checkHash], debounce(check))
</script>

<template>
  <p class="section-heading">
    Generate hash
  </p>

  <div class="field">
    <jelly-label
      class="field-label"
      for="generateInput"
    >
      Input
    </jelly-label>
    <jelly-input
      id="generateInput"
      v-model="generateInput"
    />
  </div>

  <div class="field">
    <jelly-label
      class="field-label"
      for="generateHash"
    >
      Hash
    </jelly-label>
    <div class="input-group">
      <jelly-input
        id="generateHash"
        :value.attr="generateHash"
        readonly
      />
      <div class="input-group-actions">
        <CopyButton
          :on-click="handleCopy"
          :disabled="!canCopy"
        />
      </div>
    </div>
  </div>

  <jelly-divider />

  <p class="section-heading">
    Check hash
  </p>

  <div class="field">
    <jelly-label
      class="field-label"
      for="checkInput"
    >
      Input
    </jelly-label>
    <jelly-input
      id="checkInput"
      v-model="checkInput"
    />
  </div>

  <div class="field">
    <jelly-label
      class="field-label"
      for="checkHash"
    >
      Hash
    </jelly-label>
    <jelly-input
      id="checkHash"
      v-model="checkHash"
    />
  </div>

  <jelly-alert
    v-if="checkSuccess === true"
    tone="success"
  >
    Matches
  </jelly-alert>

  <jelly-alert
    v-if="checkSuccess === false"
    tone="danger"
  >
    Doesn't match!
  </jelly-alert>
</template>
