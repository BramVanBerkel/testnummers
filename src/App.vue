<script lang="ts" setup>
import BSN from './components/generators/BSN.vue'
import IBAN from './components/generators/IBAN.vue'
import UUID from './components/generators/UUID.vue'
import Password from './components/generators/Password.vue'
import Footer from './components/Footer.vue'
import Bcrypt from './components/generators/Bcrypt.vue'
import Card from './components/Card.vue'
import Timestamp from './components/generators/Timestamp.vue'
import SHA256 from './components/generators/SHA256.vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import ToggleButton from 'primevue/togglebutton'
import { ref, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const checked = ref(isDark.value)
const toggleDark = useToggle(isDark)

watch(checked, toggleDark)
</script>

<template>
  <div class="bg-cyan-800 pb-32 z-50">
    <nav>
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 px-2 lg:ml-6">
            <span class="text-zinc-200 text-2xl title-font antialiased">Testnummers.dev</span>
          </div>
          <div class="card flex justify-center">
            <ToggleButton
              v-model="checked"
              on-label="Dark"
              off-label="Light"
            >
              <template #icon="{value}">
                <MoonIcon
                  v-if="value"
                  class="h-6 w-6"
                />
                <SunIcon
                  v-if="!value"
                  class="h-6 w-6"
                />
              </template>
            </ToggleButton>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <main class="-mt-32 pt-10 columns-1 lg:columns-2">
    <Card name="BSN">
      <BSN />
    </Card>
    <Card name="IBAN">
      <IBAN />
    </Card>
    <Card name="UUID">
      <UUID />
    </Card>
    <Card name="Password">
      <Password />
    </Card>
    <Card name="Bcrypt">
      <Bcrypt />
    </Card>
    <Card name="Timestamp">
      <Timestamp />
    </Card>
    <Card name="SHA256">
      <SHA256 />
    </Card>
  </main>
  <Footer />
</template>
