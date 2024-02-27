<template>
  <footer>
    <div class="mx-auto max-w-7xl px-6 py-6">
      <div class="flex justify-center space-x-6">
        <a
          href="https://github.com/BramVanBerkel/testnummers"
          target="_blank"
        >
          <span class="sr-only">GitHub</span>
          <GithubIcon class="h-6 w-6 text-gray-400 hover:text-gray-500" />
        </a>
      </div>
      <div class="mt-3">
        <p class="text-center text-xs leading-5 text-gray-500">
          Made with ❤️ by <a
            href="https://linkedin.com/in/bram-van-berkel/"
            target="_blank"
          >Bram van Berkel</a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue'
</script>
