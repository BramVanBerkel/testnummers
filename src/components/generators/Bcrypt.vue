<script setup lang="ts">
import { ref, watch } from 'vue'
import { checkBcrypt, generateBcrypt } from '../../generators/BcryptGenerator.ts'
import { copy } from '../../helpers/copy.ts'
import { debounce } from '../../helpers/debounce.ts'
import { ClipboardDocumentCheckIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import Tooltip from '../Tooltip.vue'
import InputText from 'primevue/inputtext'

const state = {
  generateInput: ref<string>(),
  generateHash: ref<string>(),
  checkInput: ref<string>(),
  checkHash: ref<string>(),
  checkSuccess: ref<boolean>(),
  copySuccess: ref<boolean>(false),
  generateSuccess: ref<boolean>(false)
}

function generate (setSuccess: boolean = true): void {
  state.generateHash.value = generateBcrypt(state.generateInput.value)

  if (setSuccess) {
    state.generateSuccess.value = true

    setTimeout(() => {
      state.generateSuccess.value = false
    }, 300)
  }
}

function check (): void {
  state.checkSuccess.value = checkBcrypt(state.checkInput.value, state.checkHash.value)
}

watch(state.generateInput, debounce(generate))

watch([state.checkInput, state.checkHash], debounce(check))
</script>

<template>
  <p class="pb-4 text-lg">
    Generate hash
  </p>

  <div class="-space-y-px">
    <InputText
      v-model="state.generateInput.value"
      class="w-full rounded-b-none"
      placeholder="input"
    />
    <InputGroup>
      <InputText
        :value="state.generateHash.value"
        readonly
        class="w-full first:rounded-t-none"
        placeholder="hash"
      />
      <InputGroupAddon
        class="last:rounded-t-none"
        @click="(state.generateHash) ? copy(state.generateHash.value, state.copySuccess) : null"
      >
        <ClipboardDocumentListIcon
          :class="{hidden: state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"
        />
        <ClipboardDocumentCheckIcon
          :class="{hidden: !state.copySuccess.value}"
          class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"
        />
        <Tooltip :show="state.copySuccess.value">
          Copied!
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  </div>

  <Divider />

  <p class="mb-4 text-lg">
    Check hash
  </p>

  <div class="-space-y-px">
    <InputText
      v-model="state.checkInput.value"
      class="w-full rounded-b-none"
      :class="[
        state.checkSuccess.value === true ? ['bg-green-50', 'ring-green-500', 'text-green-900'] : [],
        state.checkSuccess.value === false ? ['bg-red-50', 'ring-red-500', 'text-red-900'] : []
      ]"
      placeholder="input"
    />
    <InputText
      v-model="state.checkHash.value"
      :class="[
        state.checkSuccess.value === true ? ['bg-green-50', 'ring-green-500', 'text-green-900'] : [],
        state.checkSuccess.value === false ? ['bg-red-50', 'ring-red-500', 'text-red-900'] : []
      ]"
      class="w-full rounded-t-none"
      placeholder="hash"
    />
  </div>

  <InlineMessage
    v-if="state.checkSuccess.value === true"
    :severity="'success'"
    class="mt-4"
  >
    Matches
  </InlineMessage>

  <InlineMessage
    v-if="state.checkSuccess.value === false"
    :severity="'error'"
    class="mt-4"
  >
    Doesn't match!
  </InlineMessage>
</template>
