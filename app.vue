<script setup lang="ts">
import { initFlowbite } from 'flowbite';

defineOptions({
  name: 'AppRoot'
})

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="app-root">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
