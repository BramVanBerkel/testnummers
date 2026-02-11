<script lang="ts" setup>
import { type Component } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import Footer from './components/Footer.vue'
import BSN from './components/generators/BSN.vue'
import IBAN from './components/generators/IBAN.vue'
import UUID from './components/generators/UUID.vue'
import Password from './components/generators/Password.vue'
import Bcrypt from './components/generators/Bcrypt.vue'
import Timestamp from './components/generators/Timestamp.vue'
import SHA256 from './components/generators/SHA256.vue'
import LicencePlate from './components/generators/LicencePlate.vue'
import DriversLicenseNumber from './components/generators/DriversLicenseNumber.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const cards: Array<{ title: string, component: Component }> = [
  { title: 'BSN', component: BSN },
  { title: 'IBAN', component: IBAN },
  { title: 'UUID', component: UUID },
  { title: 'Password', component: Password },
  { title: 'Bcrypt', component: Bcrypt },
  { title: 'Timestamp', component: Timestamp },
  { title: 'SHA256', component: SHA256 },
  { title: 'Licence Plate', component: LicencePlate },
  { title: 'Drivers licence number', component: DriversLicenseNumber }
]
</script>

<template>
  <div class="bg-cyan-800 pb-32 z-50">
    <nav>
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 px-2 lg:ml-6">
            <span class="text-zinc-200 text-2xl title-font antialiased">Testnummers.dev</span>
          </div>
          <button
            class="text-zinc-200 hover:text-white p-2"
            @click="toggleDark()"
          >
            <MoonIcon
              v-if="!isDark"
              class="w-6 h-6"
            />
            <SunIcon
              v-else
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </nav>
  </div>

  <main class="-mt-32 pt-10 columns-1 lg:columns-2">
    <div
      v-for="card in cards"
      :key="card.title"
      class="break-inside-avoid px-4 pb-12 lg:px-8"
    >
      <Card>
        <template #title>
          {{ card.title }}
        </template>
        <template #content>
          <component :is="card.component" />
        </template>
      </Card>
    </div>
  </main>
  <Footer />
</template>
