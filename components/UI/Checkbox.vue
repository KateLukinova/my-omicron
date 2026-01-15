<template>
  <label :class="wrapperClasses">
    <input
        v-model="internalValue"
        type="checkbox"
        :disabled="disabled"
        :class="inputClasses"
        @change="$emit('update:modelValue', internalValue)"
    />
    <span :class="customCheckboxClasses">
      <svg
          v-if="internalValue"
          :class="checkmarkClasses"
          viewBox="0 0 12 10"
          fill="none"
      >
        <path
            d="M1 5L4.5 8.5L11 1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
    </span>
    <span v-if="$slots.default || label" :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: boolean
  label?: string
  disabled?: boolean
  size?: 'desktop' | 'mobile' | 'auto'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  size: 'auto'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const internalValue = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const wrapperClasses = computed(() => {
  return [
    'flex',
    'items-center',
    'gap-0.8',
    'cursor-pointer',
    'select-none',
    props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  ].join(' ')
})

const inputClasses = computed(() => {
  return [
    'absolute',
    'opacity-0',
    'w-0',
    'h-0',
    'pointer-events-none'
  ].join(' ')
})

const customCheckboxClasses = computed(() => {
  const sizeClasses = {
    desktop: 'w-2.4 h-2.4 min-h-2.4',
    mobile: 'w-1.6 h-1.6',
    auto: 'w-1.6 h-1.6 md:w-2.4 md:h-2.4'
  }[props.size]

  return [
    'flex',
    'items-center',
    'justify-center',
    'border-[0.1rem]',
    'border-button-primary-bg-default',
    'flex-shrink-0',
    'transition-all',
    'duration-200',

    internalValue.value
        ? 'bg-button-primary-bg-default'
        : 'bg-transparent',

    'text-grey-950',

    internalValue.value
        ? 'hover:bg-button-primary-bg-hover hover:border-button-primary-bg-hover'
        : 'hover:border-button-primary-bg-hover',

    props.disabled ? [
      'bg-button-primary-bg-disabled',
      'text-button-primary-text-disabled',
      'pointer-events-none',
      internalValue.value ? 'border-button-primary-bg-disabled' : 'border-button-primary-text-disabled'
    ].join(' ') : '',

    sizeClasses
  ].join(' ')
})

const checkmarkClasses = computed(() => {
  const sizeClasses = {
    desktop: 'w-1.2 h-1.2',
    mobile: 'w-0.8 h-0.8',
    auto: 'w-0.8 h-0.8 md:w-1.2 md:h-1.2'
  }[props.size]

  return [
    'text-current',
    sizeClasses
  ].join(' ')
})

const labelClasses = computed(() => {
  return [
    'text-sm',
    'text-my-text-primary',
    'select-none',
    'transition-colors',
    'duration-200',
    props.disabled ? 'text-button-primary-text-disabled' : ''
  ].join(' ')
})
</script>

<style scoped>
input:focus + span {
  outline: none;
}

svg {
  display: block;
}
</style>
