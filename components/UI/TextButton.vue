<template>
  <button
      :class="buttonClasses"
      :disabled="disabled"
      @click="$emit('click', $event)"
      type="button"
  >
    <slot name="icon" />
    <span class="button-text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'primary' | 'secondary'
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const sizeClasses = {
    large: 'text-lg',
    medium: 'text-sm',
    small: 'text-xs',
  }

  const typeClasses = {
    primary: [
      'text-button-primary-bg-default',
      'hover:underline',
      'disabled:text-green-900'
    ],
    secondary: [
      'bg-transparent',
      'my-text-primary',
      'hover:hover:underline',
      'disabled:opacity-50 disabled:cursor-not-allowed'
    ]
  }

  return [
    // Базовые стили
    'inline-flex',

    // Тип кнопки
    ...typeClasses[props.type],

    // Размеры
    sizeClasses[props.size],

  ].join(' ')
})
</script>
