import type { Meta, StoryObj } from '@storybook/vue3'
import UIBaseButton from '../components/UI/BaseButton.vue'
import Card from '../components/UI/Card.vue'
import Checkbox from '../components/UI/Checkbox.vue'
import Grid from '../components/UI/Grid.vue'
import ThemeToggle from '../components/UI/ThemeToggle.vue'

const meta = {
    title: 'Welcome/Overview',
    parameters: {
        docs: {
            description: {
                component: 'Добро пожаловать в Storybook демонстрацию UI компонентов! Здесь представлены все основные возможности библиотеки компонентов.'
            }
        },
        layout: 'fullscreen'
    }
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ComponentShowcase: Story = {
    render: () => ({
        components: { UIBaseButton, Card, Checkbox, Grid, ThemeToggle },
        setup() {
            const checkboxValues = ref({
                feature1: true,
                feature2: false,
                feature3: true
            })

            return { checkboxValues }
        },
        template: `
            <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <div class="max-w-7xl mx-auto">
                    <!-- Header -->
                    <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">
                            🎨 UI Components Storybook
                        </h1>
                        <p class="text-xl text-gray-600 mb-6">
                            Демонстрация возможностей современной библиотеки Vue.js компонентов
                        </p>
                        <div class="flex justify-center items-center gap-4 mb-8">
                            <span class="text-sm text-gray-500">Переключить тему:</span>
                            <ThemeToggle />
                        </div>
                    </div>

                    <!-- Key Features -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div class="bg-white rounded-xl p-6 shadow-lg">
                            <div class="text-3xl mb-4">🎭</div>
                            <h3 class="text-xl font-semibold mb-2">Уникальные Анимации</h3>
                            <p class="text-gray-600 mb-4">
                                Glitch-эффекты, плавные переходы и интерактивные состояния
                            </p>
                            <UIBaseButton type="primary" size="medium">HOVER ME!</UIBaseButton>
                        </div>
                        
                        <div class="bg-white rounded-xl p-6 shadow-lg">
                            <div class="text-3xl mb-4">📱</div>
                            <h3 class="text-xl font-semibold mb-2">Адаптивный Дизайн</h3>
                            <p class="text-gray-600 mb-4">
                                Компоненты автоматически адаптируются под разные устройства
                            </p>
                            <div class="flex gap-2">
                                <UIBaseButton type="secondary" size="small">Mobile</UIBaseButton>
                                <UIBaseButton type="secondary" size="medium">Desktop</UIBaseButton>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-xl p-6 shadow-lg">
                            <div class="text-3xl mb-4">🎨</div>
                            <h3 class="text-xl font-semibold mb-2">Темизация</h3>
                            <p class="text-gray-600 mb-4">
                                Поддержка светлой и темной тем с плавным переключением
                            </p>
                            <ThemeToggle />
                        </div>
                    </div>

                    <!-- Components Demo -->
                    <div class="space-y-12">
                        <!-- Buttons Section -->
                        <section class="bg-white rounded-xl p-8 shadow-lg">
                            <h2 class="text-2xl font-bold mb-6">🔘 Кнопки</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 class="text-lg font-semibold mb-4">Размеры и типы</h3>
                                    <div class="space-y-3">
                                        <div class="flex gap-3 items-center">
                                            <UIBaseButton type="primary" size="large">Large Primary</UIBaseButton>
                                            <UIBaseButton type="secondary" size="large">Large Secondary</UIBaseButton>
                                        </div>
                                        <div class="flex gap-3 items-center">
                                            <UIBaseButton type="primary" size="medium">Medium</UIBaseButton>
                                            <UIBaseButton type="secondary" size="medium">Medium</UIBaseButton>
                                        </div>
                                        <div class="flex gap-3 items-center">
                                            <UIBaseButton type="primary" size="small">Small</UIBaseButton>
                                            <UIBaseButton type="secondary" size="small">Small</UIBaseButton>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="text-lg font-semibold mb-4">Glitch Animation</h3>
                                    <p class="text-sm text-gray-600 mb-4">
                                        Наведите курсор на кнопки, чтобы увидеть уникальную анимацию
                                    </p>
                                    <div class="space-y-3">
                                        <UIBaseButton type="primary" size="medium">MAGIC EFFECT!</UIBaseButton>
                                        <UIBaseButton type="secondary" size="medium">TRY HOVER</UIBaseButton>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Cards Section -->
                        <section class="bg-white rounded-xl p-8 shadow-lg">
                            <h2 class="text-2xl font-bold mb-6">🎴 Карточки</h2>
                            <Grid columns="3" gap="lg">
                                <Card 
                                    title="Продукт 1"
                                    description="Описание первого продукта с подробной информацией"
                                    :buttons="[
                                        { text: 'Купить', type: 'primary' },
                                        { text: 'В корзину', type: 'secondary' }
                                    ]"
                                />
                                <Card 
                                    title="Продукт 2"
                                    description="Второй продукт без изображения"
                                    imageSrc=""
                                    :buttons="[
                                        { text: 'Подробнее', type: 'secondary' }
                                    ]"
                                />
                                <Card 
                                    title="Продукт 3"
                                    description="Третий продукт с минимальным интерфейсом"
                                    :showButtons="false"
                                />
                            </Grid>
                        </section>

                        <!-- Forms Section -->
                        <section class="bg-white rounded-xl p-8 shadow-lg">
                            <h2 class="text-2xl font-bold mb-6">📋 Формы</h2>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 class="text-lg font-semibold mb-4">Настройки профиля</h3>
                                    <div class="space-y-4">
                                        <Checkbox 
                                            v-model="checkboxValues.feature1"
                                            label="Получать уведомления на email" 
                                        />
                                        <Checkbox 
                                            v-model="checkboxValues.feature2"
                                            label="Показывать профиль публично" 
                                        />
                                        <Checkbox 
                                            v-model="checkboxValues.feature3"
                                            label="Разрешить индексацию поисковикам" 
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="text-lg font-semibold mb-4">Состояние форм</h3>
                                    <div class="p-4 bg-gray-50 rounded-lg">
                                        <pre class="text-sm">{{ JSON.stringify(checkboxValues, null, 2) }}</pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Grid Section -->
                        <section class="bg-white rounded-xl p-8 shadow-lg">
                            <h2 class="text-2xl font-bold mb-6">⚡ Адаптивная Сетка</h2>
                            <p class="text-gray-600 mb-6">
                                Сетка автоматически адаптируется: 4 колонки на desktop, 2 на tablet, 1 на mobile
                            </p>
                            <Grid columns="4" gap="md">
                                <div v-for="i in 8" :key="i" 
                                     class="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-center">
                                    <div class="text-2xl mb-2">📦</div>
                                    <div class="font-semibold">Элемент {{ i }}</div>
                                </div>
                            </Grid>
                        </section>
                    </div>

                    <!-- Footer -->
                    <div class="text-center mt-16 pt-8 border-t border-gray-200">
                        <p class="text-gray-600 mb-4">
                            🚀 Изучите отдельные компоненты в навигации слева
                        </p>
                        <div class="flex justify-center gap-4">
                            <UIBaseButton type="primary" size="large">Get Started</UIBaseButton>
                            <UIBaseButton type="secondary" size="large">Documentation</UIBaseButton>
                        </div>
                    </div>
                </div>
            </div>
        `
    }),
    parameters: {
        docs: {
            description: {
                story: 'Полная демонстрация всех компонентов библиотеки в едином интерфейсе. Показывает основные возможности и варианты использования каждого компонента.'
            }
        }
    }
}
