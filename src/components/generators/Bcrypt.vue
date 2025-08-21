<script setup lang="ts">
import { ref, watch } from 'vue'
import { checkBcrypt, generateBcrypt } from '../../generators/BcryptGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { debounce } from '../../helpers/debounce.ts'
import InputText from 'primevue/inputtext'
import CopyButton from '../CopyButton.vue'

const generateInput = ref<string>()
const generateHash = ref<string>()
const checkInput = ref<string>()
const checkHash = ref<string>()
const checkSuccess = ref<boolean>()
const copySuccess = ref<boolean>(false)
const generateSuccess = ref<boolean>(false)

function generate (setSuccess: boolean = true): void {
  generateHash.value = generateBcrypt(generateInput.value)

  if (setSuccess) {
    generateSuccess.value = true

    setTimeout(() => {
      generateSuccess.value = false
    }, 300)
  }
}

function check (): void {
  checkSuccess.value = checkBcrypt(checkInput.value, checkHash.value)
}

watch(generateInput, debounce(generate))

watch([checkInput, checkHash], debounce(check))
async function handleCopy (): Promise<void> {
  await copy(generateHash.value, copySuccess)
}
</script>

<template>
  <p class="pb-4 text-lg">
    Generate hash
  </p>

  <div class="pb-4">
    <FloatLabel variant="on">
      <InputText
        id="generateInput"
        v-model="generateInput"
        class="w-full"
      />
      <label for="generateInput">Input</label>
    </FloatLabel>
  </div>

  <div>
    <InputGroup>
      <FloatLabel variant="on">
        <InputText
          id="generateHash"
          v-model="generateHash"
          readonly
          class="w-full first:rounded-t-none"
        />
        <label for="generateHash">Hash</label>
      </FloatLabel>
      <CopyButton
        :copy-success="copySuccess"
        :on-click="handleCopy"
      />
    </InputGroup>
  </div>

  <Divider />

  <p class="mb-4 text-lg">
    Check hash
  </p>

  <div class="mb-4">
    <FloatLabel variant="on">
      <InputText
        id="checkInput"
        v-model="checkInput"
        class="w-full rounded-b-none"
        :class="[
          checkSuccess === true ? ['bg-green-50', 'ring-green-500', 'text-green-900'] : [],
          checkSuccess === false ? ['bg-red-50', 'ring-red-500', 'text-red-900'] : [],
          ['rounded-b-none']
        ]"
      />
      <label for="checkInput">Input</label>
    </FloatLabel>
  </div>

  <div>
    <FloatLabel variant="on">
      <InputText
        id="checkHash"
        v-model="checkHash"
        :class="[
          checkSuccess === true ? ['bg-green-50', 'ring-green-500', 'text-green-900'] : [],
          checkSuccess === false ? ['bg-red-50', 'ring-red-500', 'text-red-900'] : [],
          ['rounded-t-none']
        ]"
        class="w-full rounded-t-none"
      />
      <label for="checkHash">Hash</label>
    </FloatLabel>
  </div>

  <Message
    v-if="checkSuccess === true"
    :severity="'success'"
    class="mt-4"
  >
    Matches
  </Message>

  <Message
    v-if="checkSuccess === false"
    :severity="'error'"
    class="mt-4"
  >
    Doesn't match!
  </Message>
</template>
