<script lang="ts" setup>
import BSN from './components/generators/BSN.vue'
import IBAN from './components/generators/IBAN.vue'
import UUID from './components/generators/UUID.vue'
import Password from './components/generators/Password.vue'
import Footer from './components/Footer.vue'
import Bcrypt from './components/generators/Bcrypt.vue'
import Timestamp from './components/generators/Timestamp.vue'
import SHA256 from './components/generators/SHA256.vue'
import { ref, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import LicencePlate from './components/generators/LicencePlate.vue'

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
        </div>
      </div>
    </nav>
  </div>

  <main class="-mt-32 pt-10 columns-2">
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          BSN
        </template>
        <template #content>
          <BSN />
        </template>
      </Card>
    </div>
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          IBAN
        </template>
        <template #content>
          <IBAN />
        </template>
      </Card>
    </div>
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          UUID
        </template>
        <template #content>
          <UUID />
        </template>
      </Card>
    </div>
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          Password
        </template>
        <template #content>
          <Password />
        </template>
      </Card>
    </div>
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          Bcrypt
        </template>
        <template #content>
          <Bcrypt />
        </template>
      </Card>
    </div>
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          Timestamp
        </template>
        <template #content>
          <Timestamp />
        </template>
      </Card>
    </div>
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          SHA256
        </template>
        <template #content>
          <SHA256 />
        </template>
      </Card>
    </div>
    <div class="break-inside-avoid px-4 pb-12 lg:px-8">
      <Card>
        <template #title>
          Licence Plate
        </template>
        <template #content>
          <LicencePlate />
        </template>
      </Card>
    </div>
    <!--    <CardBkp name="IBAN">-->
    <!--      <IBAN />-->
    <!--    </CardBkp>-->
    <!--    <CardBkp name="UUID">-->
    <!--      <UUID />-->
    <!--    </CardBkp>-->
    <!--    <CardBkp name="Password">-->
    <!--      <Password />-->
    <!--    </CardBkp>-->
    <!--    <CardBkp name="Bcrypt">-->
    <!--      <Bcrypt />-->
    <!--    </CardBkp>-->
    <!--    <CardBkp name="Timestamp">-->
    <!--      <Timestamp />-->
    <!--    </CardBkp>-->
    <!--    <CardBkp name="SHA256">-->
    <!--      <SHA256 />-->
    <!--    </CardBkp>-->
    <!--    <CardBkp name="Licence Plate">-->
    <!--      <LicencePlate />-->
    <!--    </CardBkp>-->
  </main>
  <Footer />
</template>
