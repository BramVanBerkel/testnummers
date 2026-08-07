<script lang="ts" setup>
import { type Component } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useTheme } from './composables/useTheme.ts'
import Footer from './components/Footer.vue'
import BSN from './components/generators/BSN.vue'
import IBAN from './components/generators/IBAN.vue'
import UUID from './components/generators/UUID.vue'
import Password from './components/generators/Password.vue'
import Bcrypt from './components/generators/Bcrypt.vue'
import Timestamp from './components/generators/Timestamp.vue'
import SHA256 from './components/generators/SHA256.vue'
import LicencePlate from './components/generators/LicencePlate.vue'
import DriversLicenceNumber from './components/generators/DriversLicenceNumber.vue'

const { isDark, toggle } = useTheme()

const cards: Array<{ title: string, component: Component }> = [
  { title: 'BSN', component: BSN },
  { title: 'IBAN', component: IBAN },
  { title: 'UUID', component: UUID },
  { title: 'Password', component: Password },
  { title: 'Bcrypt', component: Bcrypt },
  { title: 'Timestamp', component: Timestamp },
  { title: 'SHA256', component: SHA256 },
  { title: 'Licence Plate', component: LicencePlate },
  { title: 'Drivers licence number', component: DriversLicenceNumber }
]
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <span class="nav-title">Testnummers.dev</span>
      <button
        class="theme-toggle"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggle()"
      >
        <MoonIcon v-if="!isDark" />
        <SunIcon v-else />
      </button>
    </div>
  </nav>

  <main class="cards">
    <div
      v-for="card in cards"
      :key="card.title"
      class="card"
    >
      <jelly-card>
        <h2 class="card-title">
          {{ card.title }}
        </h2>
        <component :is="card.component" />
      </jelly-card>
    </div>
  </main>

  <Footer />

  <jelly-toaster />
</template>
