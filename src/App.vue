<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent />
    <main class="bg-white w-full max-w-[800px] mx-auto">
      <div class="h-full flex flex-col gap-4 px-4 py-12">
        <RouterView />
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@components/HeaderComponent.vue'
import FooterComponent from '@components/FooterComponent.vue'
</script>

<style scoped></style>
