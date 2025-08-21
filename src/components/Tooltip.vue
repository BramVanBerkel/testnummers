<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <span
    :class="{'opacity-100': show, 'opacity-0': !show}"
    class="absolute -mt-20 pointer-events-none transition-opacity duration-300"
  >
    <span
      class="rounded-md bg-gray-900 px-3 py-1 text-xs font-semibold leading-4 tracking-wide text-white drop-shadow-md filter"
    >
      <svg
        aria-hidden="true"
        width="16"
        height="6"
        viewBox="0 0 16 6"
        class="absolute left-1/2 top-full -ml-2 -mt-px text-gray-900"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
          fill="currentColor"
        />
      </svg>
      <slot />
    </span>
  </span>
</template>

<style scoped>

</style>
