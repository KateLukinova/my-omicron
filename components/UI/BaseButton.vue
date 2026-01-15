<template>
  <button
      style="border-radius: 8px;"
      :class="buttonClasses"
      :disabled="disabled"
      @click="$emit('click', $event)"
      type="button"
      @mouseenter="startSequentialGlitch"
      @mouseleave="handleMouseLeave"
  >
    <slot name="icon" />
    <span class="button-text">
      <span v-if="!isGlitching"><slot /></span>
      <span v-else class="glitching-text">
        <span
            v-for="(char, index) in displayChars"
            :key="index"
            :class="[
            'char',
            index < currentIndex ? 'assembled' : 'glitching',
            index === currentIndex ? 'current-char' : ''
          ]"
        >
          {{ char }}
        </span>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  type?: 'primary' | 'secondary'
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Refs для анимации
const isGlitching = ref(false)
const originalText = ref('')
const originalArray = ref<string[]>([])
const displayChars = ref<string[]>([])
const glitchInterval = ref<NodeJS.Timeout | null>(null)
const assembleInterval = ref<NodeJS.Timeout | null>(null)
const currentIndex = ref(0)
const isMouseOver = ref(false)
const animationCompleted = ref(false)

const buttonClasses = computed(() => {
  const sizeClasses = {
    xlarge: 'px-2 py-1.6 text-sm min-w-[17.2rem] min-h-[5.6rem]',
    large: 'px-1.6 py-1.2 text-sm min-w-[16.4rem] min-h-[4.8rem]',
    medium: 'px-1.6 py-1.2 text-xs',
    small: 'px-1.2 py-1 text-xs',
    xsmall: 'p-0.8 text-xs max-h-[3.6rem]',
  }

  const typeClasses = {
    primary: [
      'bg-button-primary-bg-default',
      'text-grey-950',
      'hover:bg-button-primary-bg-hover',
      'focus:bg-button-primary-bg-pressed',
      'disabled:bg-button-primary-bg-disabled disabled:text-button-primary-text-disabled',
      'disabled:pointer-events-none'
    ],
    secondary: [
      'bg-transparent',
      'border-current',
      'border-[0.1rem]',
      'text-my-text-primary',
      'hover:bg-button-secondary-bg-hover',
      'focus:bg-button-secondary-bg-pressed',
      'disabled:bg-button-secondary-bg-disabled disabled:text-button-secondary-text-disabled disabled:pointer-events-none'
    ]
  }

  return [
    'flex justify-center items-center gap-0.8',
    'rounded-full leading-tight',
    'transition-all duration-200 ease-in-out',
    'cursor-pointer',
    'font-mono',
    ...typeClasses[props.type],
    sizeClasses[props.size],
  ].join(' ')
})

const lettersAndNumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const getRandomChar = () => {
  return lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)]
}

const startSequentialGlitch = (event: MouseEvent) => {
  if (props.disabled) return

  // Сбрасываем состояние если анимация уже завершена
  if (animationCompleted.value) {
    resetGlitch()
  }

  if (isGlitching.value) return

  const button = event.target as HTMLElement
  const textElement = button.querySelector('.button-text')
  const textContent = textElement?.textContent || ''

  // Сохраняем оригинальный текст с пробелами
  originalText.value = textContent
  originalArray.value = textContent.split('')

  if (!originalText.value) return

  isGlitching.value = true
  isMouseOver.value = true
  animationCompleted.value = false
  currentIndex.value = 0

  // Создаем массив рандомных символов (сохраняем пробелы)
  displayChars.value = originalArray.value.map(char =>
      char === ' ' ? ' ' : getRandomChar()
  )

  // Запускаем анимацию смены рандомных символов (все символы постоянно меняются)
  glitchInterval.value = setInterval(() => {
    displayChars.value = displayChars.value.map((char, index) => {
      // Пробелы не меняем, уже собранные символы не меняем
      if (char === ' ' || index < currentIndex.value) {
        return char
      }
      return getRandomChar()
    })
  }, 50)

  setTimeout(() => {
    if (glitchInterval.value) {
      clearInterval(glitchInterval.value)
      glitchInterval.value = null
    }
    startAssembling()
  }, 200)
}

const startAssembling = () => {
  currentIndex.value = 0

  assembleInterval.value = setInterval(() => {
    if (currentIndex.value >= originalArray.value.length) {
      // Анимация завершена
      completeAnimation()
      return
    }

    // Устанавливаем правильный символ для текущей позиции
    displayChars.value[currentIndex.value] = originalArray.value[currentIndex.value]
    currentIndex.value++

  }, 15) // Интервал между символами
}

const completeAnimation = () => {
  stopGlitch()
  // Устанавливаем полный оригинальный текст
  displayChars.value = [...originalArray.value]
  animationCompleted.value = true

  // Если курсор уже ушел, сразу сбрасываем
  if (!isMouseOver.value) {
    setTimeout(() => {
      resetGlitch()
    }, 100)
  }
}

const stopGlitch = () => {
  if (glitchInterval.value) {
    clearInterval(glitchInterval.value)
    glitchInterval.value = null
  }
  if (assembleInterval.value) {
    clearInterval(assembleInterval.value)
    assembleInterval.value = null
  }
}

const handleMouseLeave = () => {
  isMouseOver.value = false

  // Если анимация уже завершена, сбрасываем сразу
  if (animationCompleted.value) {
    setTimeout(() => {
      resetGlitch()
    }, 100)
  }
  // Если анимация еще идет, она продолжится до конца
}

const resetGlitch = () => {
  stopGlitch()
  isGlitching.value = false
  animationCompleted.value = false
  currentIndex.value = 0
  if (originalArray.value.length > 0) {
    displayChars.value = [...originalArray.value]
  }
}
</script>

<style scoped>
.glitching-text {
  display: inline-flex;
}

.char {
  display: inline-block;
  transition: all 0.2s ease;
}

.glitching {
  animation: char-glitch 0.1s infinite;
  color: inherit;
  opacity: 0.8;
}

.assembled {
  color: inherit;
  animation: none;
  opacity: 1;
}

.current-char {
  color: inherit;
  opacity: 1;
}

@keyframes char-glitch {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.6;
  }
}

.button-text {
  white-space: pre;
}

.char {
  color: inherit !important;
}
</style>
