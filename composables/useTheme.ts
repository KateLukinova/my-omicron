import { ref, readonly } from 'vue'

export type Theme = 'light' | 'dark'

const currentTheme = ref<Theme>('light')

export const useTheme = () => {
  // Функция переключения темы
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme

    // Применяем тему к документу
    if (process.client) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }

  // Функция переключения между темами
  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // Инициализация темы
  const initTheme = () => {
    if (process.client) {
      // Получаем сохраненную тему из localStorage
      const savedTheme = localStorage.getItem('theme') as Theme

      // Если тема не сохранена, определяем по системным настройкам
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const theme = savedTheme || (prefersDark ? 'dark' : 'light')

      setTheme(theme)
    }
  }

  return {
    currentTheme: readonly(currentTheme),
    setTheme,
    toggleTheme,
    initTheme
  }
}
