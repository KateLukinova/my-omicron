import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '../components/UI/Card.vue'

const meta = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Заголовок карточки'
        },
        description: {
            control: 'text',
            description: 'Описание карточки'
        },
        imageSrc: {
            control: 'text',
            description: 'URL изображения'
        },
        imageAlt: {
            control: 'text',
            description: 'Alt текст для изображения'
        },
        showButtons: {
            control: 'boolean',
            description: 'Показывать ли кнопки'
        },
        buttons: {
            control: 'object',
            description: 'Массив кнопок с конфигурацией'
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Универсальная карточка с настраиваемым содержимым, изображением и кнопками действий'
            }
        }
    }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Базовая карточка
export const Default: Story = {
    args: {
        title: 'Заголовок карточки',
        description: 'Описание карточки с дополнительной информацией о содержимом',
        imageSrc: '/images/card.png',
        imageAlt: 'Изображение карточки'
    }
}

// Карточка без изображения
export const WithoutImage: Story = {
    args: {
        title: 'Карточка без изображения',
        description: 'Эта карточка демонстрирует вариант отображения без изображения',
        imageSrc: '',
        showButtons: true
    }
}

// Карточка без кнопок
export const WithoutButtons: Story = {
    args: {
        title: 'Карточка без кнопок',
        description: 'Минималистичная карточка только с текстовым содержимым',
        imageSrc: '/images/card.png',
        showButtons: false
    }
}

// Карточка с кастомными кнопками
export const CustomButtons: Story = {
    args: {
        title: 'Карточка с кастомными кнопками',
        description: 'Демонстрация различных типов и текстов кнопок',
        imageSrc: '/images/card.png',
        buttons: [
            { text: 'Подробнее', type: 'primary', onClick: () => alert('Подробнее clicked!') },
            { text: 'Сохранить', type: 'secondary', onClick: () => alert('Сохранить clicked!') },
            { text: 'Поделиться', type: 'secondary', onClick: () => alert('Поделиться clicked!') }
        ]
    }
}

// Минималистичная карточка
export const Minimal: Story = {
    args: {
        title: 'Минимум информации',
        imageSrc: '',
        showButtons: false
    }
}

// Демонстрация нескольких карточек в сетке
export const CardGrid: Story = {
    render: () => ({
        components: { Card },
        template: `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            <Card
              title="Первая карточка"
              description="Описание первой карточки с информацией"
              :imageSrc="'/images/card.png'"
              :buttons="[
                { text: 'Подробнее', type: 'primary', onClick: () => alert('Просмотр деталей') }
              ]"
            />
            <Card
              title="Вторая карточка"
              description="Описание второй карточки без изображения"
              imageSrc=""
              :buttons="[
                { text: 'Открыть', type: 'secondary', onClick: () => alert('Карточка открыта') }
              ]"
            />
            <Card
              title="Третья карточка"
              description="Карточка с кастомными кнопками"
              :imageSrc="'/images/card.png'"
              :buttons="[
                { text: 'Действие 1', type: 'primary', onClick: () => alert('Действие 1 выполнено') },
                { text: 'Действие 2', type: 'secondary', onClick: () => alert('Действие 2 выполнено') }
              ]"
            />
            <Card
              title="Четвертая карточка"
              description="Минималистичная карточка без кнопок"
              :imageSrc="'/images/card.png'"
              :showButtons="false"
            />
          </div>
        `
    }),
    parameters: {
        docs: {
            description: {
                story: 'Демонстрация использования карточек в адаптивной сетке с различными конфигурациями и рабочими кнопками'
            }
        }
    }
}
