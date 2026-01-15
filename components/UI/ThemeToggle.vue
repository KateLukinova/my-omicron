<template>
  <button
      @click="toggleTheme"
      class="relative w-[4.6rem] h-[2.6rem] rounded-full bg-surface-invert transition-all duration-300 cursor-pointer border-0"
      type="button"
  >
    <span
        class="absolute top-[0.2rem] w-[2.2rem] h-[2.2rem] bg-white rounded-full shadow-sm transition-all duration-300"
        :class="{
        'left-[0.25rem]': !isDark,
        'left-[2rem]': isDark
      }"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '../../composables/useTheme'

const { currentTheme, toggleTheme } = useTheme()

const isDark = computed(() => currentTheme.value === 'dark')
</script>
