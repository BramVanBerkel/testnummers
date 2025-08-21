<script setup lang="ts">
import { ClipboardDocumentListIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'
import Tooltip from './Tooltip.vue'

defineProps<{
  copySuccess: boolean
  onClick: () => void
}>()
</script>

<template>
  <InputGroupAddon
    class="cursor-pointer"
    @click="onClick()"
  >
    <ClipboardDocumentListIcon
      :class="{hidden: copySuccess}"
      class="-ml-0.5 w-6 h-6 text-gray-400 transition group-hover:rotate-[-6deg]"
    />
    <ClipboardDocumentCheckIcon
      :class="{hidden: !copySuccess}"
      class="-ml-0.5 w-6 h-6 text-green-600 rotate-[-10deg]"
    />
    <Tooltip :show="copySuccess">
      Copied!
    </Tooltip>
  </InputGroupAddon>
</template>
