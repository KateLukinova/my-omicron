// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import UIBaseButton from '../components/UI/BaseButton.vue'

const meta = {
    title: 'Components/UIBaseButton',
    component: UIBaseButton,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary'],
        },
        size: {
            control: { type: 'select' },
            options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof UIBaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        type: 'primary',
        size: 'medium',
    },
    render: (args) => ({
        components: { UIBaseButton },
        setup() {
            return { args }
        },
        template: `
            <UIBaseButton v-bind="args">
                Primary Button
            </UIBaseButton>
        `,
    }),
}

export const Secondary: Story = {
    args: {
        type: 'secondary',
        size: 'medium',
    },
    render: (args) => ({
        components: { UIBaseButton },
        setup() {
            return { args }
        },
        template: `
            <UIBaseButton v-bind="args">
                Secondary Button
            </UIBaseButton>
        `,
    }),
}

export const Disabled: Story = {
    args: {
        type: 'primary',
        size: 'medium',
        disabled: true,
    },
    render: (args) => ({
        components: { UIBaseButton },
        setup() {
            return { args }
        },
        template: `
            <UIBaseButton v-bind="args">
                Disabled Button
            </UIBaseButton>
        `,
    }),
}

export const WithIcon: Story = {
    args: {
        type: 'primary',
        size: 'medium',
    },
    render: (args) => ({
        components: { UIBaseButton },
        setup() {
            return { args }
        },
        template: `
          <UIBaseButton v-bind="args">
            <template #icon>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
              </svg>
            </template>
            Button with Icon
          </UIBaseButton>
        `,
    }),
}

export const AllSizes: Story = {
    render: () => ({
        components: { UIBaseButton },
        template: `
          <div class="space-y-4">
            <div class="flex flex-wrap gap-4 items-center">
              <UIBaseButton type="primary" size="xlarge">XLarge Button</UIBaseButton>
              <UIBaseButton type="primary" size="large">Large Button</UIBaseButton>
              <UIBaseButton type="primary" size="medium">Medium Button</UIBaseButton>
              <UIBaseButton type="primary" size="small">Small Button</UIBaseButton>
              <UIBaseButton type="primary" size="xsmall">XSmall Button</UIBaseButton>
            </div>
            <div class="flex flex-wrap gap-4 items-center">
              <UIBaseButton type="secondary" size="xlarge">XLarge Button</UIBaseButton>
              <UIBaseButton type="secondary" size="large">Large Button</UIBaseButton>
              <UIBaseButton type="secondary" size="medium">Medium Button</UIBaseButton>
              <UIBaseButton type="secondary" size="small">Small Button</UIBaseButton>
              <UIBaseButton type="secondary" size="xsmall">XSmall Button</UIBaseButton>
            </div>
          </div>
        `,
    }),
}

// Дополнительные stories для демонстрации всех состояний
export const AllStates: Story = {
    render: () => ({
        components: { UIBaseButton },
        template: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold mb-3">Primary Buttons</h3>
                    <div class="flex flex-wrap gap-3 items-center">
                        <UIBaseButton type="primary" size="medium">Normal</UIBaseButton>
                        <UIBaseButton type="primary" size="medium" disabled>Disabled</UIBaseButton>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-3">Secondary Buttons</h3>
                    <div class="flex flex-wrap gap-3 items-center">
                        <UIBaseButton type="secondary" size="medium">Normal</UIBaseButton>
                        <UIBaseButton type="secondary" size="medium" disabled>Disabled</UIBaseButton>
                    </div>
                </div>
            </div>
        `,
    }),
}

// Демонстрация Glitch-анимации
export const GlitchAnimation: Story = {
    render: () => ({
        components: { UIBaseButton },
        template: `
            <div class="space-y-6">
                <div class="max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">🎭 Glitch Animation</h3>
                    <p class="text-gray-600 mb-6">
                        Наведите курсор на кнопки, чтобы увидеть уникальную glitch-анимацию. 
                        Текст кнопки последовательно "собирается" из случайных символов!
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-semibold mb-3">Primary кнопки</h4>
                            <div class="space-y-3">
                                <UIBaseButton type="primary" size="large">HOVER ME!</UIBaseButton>
                                <UIBaseButton type="primary" size="medium">Glitch Effect</UIBaseButton>
                                <UIBaseButton type="primary" size="small">Animation</UIBaseButton>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold mb-3">Secondary кнопки</h4>
                            <div class="space-y-3">
                                <UIBaseButton type="secondary" size="large">TRY GLITCH</UIBaseButton>
                                <UIBaseButton type="secondary" size="medium">Cool Animation</UIBaseButton>
                                <UIBaseButton type="secondary" size="small">Magic Text</UIBaseButton>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 p-4 bg-blue-50 rounded-md">
                        <p class="text-sm text-blue-800">
                            💡 <strong>Как это работает:</strong><br>
                            • При наведении запускается последовательная анимация<br>
                            • Каждый символ "собирается" из случайных букв и цифр<br>
                            • Анимация завершается восстановлением оригинального текста<br>
                            • Пробелы в тексте остаются неизменными
                        </p>
                    </div>
                </div>
            </div>
        `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Демонстрация уникальной glitch-анимации при наведении. Текст кнопки "собирается" из случайных символов, создавая эффектный визуальный эффект.'
            }
        }
    }
}
