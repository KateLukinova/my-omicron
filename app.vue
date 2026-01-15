<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

const { initTheme } = useTheme()

// Инициализируем тему при монтировании приложения
onMounted(() => {
  initTheme()
})
</script>
