<template>
  <div class="flex flex-col items-start overflow-hidden max-w-[59.3rem]">
    <div v-if="imageSrc" class="w-full">
      <img :src="imageSrc" class="w-full h-full object-cover aspect-[3/2]" :alt="imageAlt">
    </div>
    <div class="py-2.4 w-full">
      <div class="text-lg font-bold text-my-text-primary mb-1.6 leading-tight">{{ title }}</div>
      <div v-if="showButtons" class="flex gap-0.8 mb-3">
        <UIBaseButton
          v-for="(button, index) in buttons"
          :key="index"
          size="xsmall"
          :type="button.type || 'secondary'"
          @click="button.onClick"
        >
          {{ button.text }}
        </UIBaseButton>
      </div>
      <p v-if="description" class="text-sm text-my-text-secondary">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIBaseButton from './BaseButton.vue'

interface CardButton {
  text: string
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

interface Props {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  showButtons?: boolean
  buttons?: CardButton[]
}

withDefaults(defineProps<Props>(), {
  title: 'Title',
  description: '',
  imageSrc: '/images/card.png',
  imageAlt: 'card',
  showButtons: true,
  buttons: () => [
    { text: 'Content', type: 'secondary' },
    { text: 'Content', type: 'secondary' }
  ]
})
</script>
