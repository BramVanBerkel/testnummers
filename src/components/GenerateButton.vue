<script setup lang="ts">
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

defineProps<{
  generateSuccess: boolean
  onClick: () => void
}>()
</script>

<template>
  <jelly-icon-button
    label="Generate a new value"
    size="small"
    @click="onClick()"
  >
    <ArrowPathIcon
      class="btn-icon"
      :class="{ spun: generateSuccess }"
    />
  </jelly-icon-button>
</template>
