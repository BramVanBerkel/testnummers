<script setup lang="ts">
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'

defineProps<{
  onClick: () => void
}>()
</script>

<template>
  <jelly-icon-button
    label="Copy"
    size="small"
    @click="onClick()"
  >
    <ClipboardDocumentListIcon class="btn-icon" />
  </jelly-icon-button>
</template>
