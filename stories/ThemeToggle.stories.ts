import type { Meta, StoryObj } from '@storybook/vue3'
import ThemeToggle from '../components/UI/ThemeToggle.vue'

const meta = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Переключатель темы с плавной анимацией. Используется для переключения между светлой и темной темой приложения.'
            }
        }
    }
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

// Базовый переключатель темы
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Базовый переключатель темы. Кликните по нему, чтобы увидеть анимацию переключения между светлой и темной темой.'
            }
        }
    }
}

// Демонстрация в контексте интерфейса
export const InContext: Story = {
    render: () => ({
        components: { ThemeToggle },
        template: `
          <div class="max-w-md mx-auto p-6 border border-gray-200 rounded-lg bg-white">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Настройки темы</h3>
                <p class="text-sm text-gray-600">Переключение между светлой и темной темой</p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        `
    }),
    parameters: {
        docs: {
            description: {
                story: 'Демонстрация использования переключателя темы в контексте реального интерфейса'
            }
        }
    }
}
