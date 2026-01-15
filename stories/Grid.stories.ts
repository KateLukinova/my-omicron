import type { Meta, StoryObj } from '@storybook/vue3';
import Grid from '../components/UI/Grid.vue';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    tags: ['autodocs'],
    argTypes: {
        columns: {
            control: { type: 'select' },
            options: [2, 3, 4],
            description: 'Количество колонок на разных брейкпоинтах'
        },
        gap: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: 'Размер отступов между элементами'
        },
        className: {
            control: 'text',
            description: 'Дополнительные CSS классы'
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Адаптивная сетка с анимацией появления элементов'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Grid>;

// Базовый пример с карточками
const Template: Story = {
    render: (args) => ({
        components: { Grid },
        setup() {
            return { args };
        },
        template: `
          <Grid :columns="args.columns" :gap="args.gap" :className="args.className">
            <div v-for="i in 8" :key="i"
                 class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 class="text-lg font-semibold mb-2">Карточка {{ i }}</h3>
              <p class="text-gray-600">Содержимое карточки с примерным текстом</p>
            </div>
          </Grid>
        `
    })
};

// Примеры с разным количеством колонок
export const TwoColumns: Story = {
    ...Template,
    args: {
        columns: 2,
        gap: 'md'
    },
    parameters: {
        docs: {
            description: {
                story: 'Сетка с 2 колонками на desktop, 1 на mobile'
            }
        }
    }
};

export const ThreeColumns: Story = {
    ...Template,
    args: {
        columns: 3,
        gap: 'md'
    },
    parameters: {
        docs: {
            description: {
                story: 'Сетка с 3 колонками на desktop, 2 на tablet, 1 на mobile'
            }
        }
    }
};

export const FourColumns: Story = {
    ...Template,
    args: {
        columns: 4,
        gap: 'md'
    },
    parameters: {
        docs: {
            description: {
                story: 'Сетка с 4 колонками на desktop, 2 на mobile'
            }
        }
    }
};

// Примеры с разными отступами
export const SmallGap: Story = {
    ...Template,
    args: {
        columns: 3,
        gap: 'sm'
    },
    parameters: {
        docs: {
            description: {
                story: 'Сетка с маленькими отступами'
            }
        }
    }
};

export const LargeGap: Story = {
    ...Template,
    args: {
        columns: 3,
        gap: 'lg'
    },
    parameters: {
        docs: {
            description: {
                story: 'Сетка с большими отступами'
            }
        }
    }
};

export const ExtraLargeGap: Story = {
    ...Template,
    args: {
        columns: 3,
        gap: 'xl'
    },
    parameters: {
        docs: {
            description: {
                story: 'Сетка с очень большими отступами'
            }
        }
    }
};

// Пример с кастомным контентом
export const WithCustomContent: Story = {
    render: (args) => ({
        components: { Grid },
        setup() {
            return { args };
        },
        template: `
          <Grid :columns="args.columns" :gap="args.gap" :className="args.className">
            <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div class="w-12 h-12 bg-blue-500 rounded-full mb-3"></div>
              <h4 class="font-medium text-blue-900">Синий элемент</h4>
            </div>
            <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="w-12 h-12 bg-green-500 rounded-full mb-3"></div>
              <h4 class="font-medium text-green-900">Зеленый элемент</h4>
            </div>
            <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div class="w-12 h-12 bg-purple-500 rounded-full mb-3"></div>
              <h4 class="font-medium text-purple-900">Фиолетовый элемент</h4>
            </div>
            <div class="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div class="w-12 h-12 bg-orange-500 rounded-full mb-3"></div>
              <h4 class="font-medium text-orange-900">Оранжевый элемент</h4>
            </div>
          </Grid>
        `
    }),
    args: {
        columns: 2,
        gap: 'lg'
    }
};

// Пример с разным количеством элементов
export const WithDifferentItemCounts: Story = {
    render: (args) => ({
        components: { Grid },
        setup() {
            const items = Array.from({ length: 6 }, (_, i) => i + 1);
            return { args, items };
        },
        template: `
          <Grid :columns="args.columns" :gap="args.gap" :className="args.className">
            <div v-for="i in items" :key="i"
                 class="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
              Элемент {{ i }}
            </div>
          </Grid>
        `
    }),
    args: {
        columns: 3,
        gap: 'md'
    }
};

// Пример с дополнительными классами
export const WithCustomClassName: Story = {
    render: (args) => ({
        components: { Grid },
        setup() {
            return { args };
        },
        template: `
      <Grid :columns="args.columns" :gap="args.gap" :className="args.className">
        <div v-for="i in 6" :key="i" 
             class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold mb-2">Карточка {{ i }}</h3>
          <p class="text-gray-600">Содержимое карточки с дополнительными классами</p>
        </div>
      </Grid>
    `
    }),
    args: {
        columns: 3,
        gap: 'md',
        className: 'max-w-4xl mx-auto bg-gray-50 p-6 rounded-xl'
    },
    parameters: {
        docs: {
            description: {
                story: 'Сетка с дополнительными кастомными классами'
            }
        }
    }
};

// Playground с контролами
export const Playground: Story = {
    render: (args) => ({
        components: { Grid },
        setup() {
            return { args };
        },
        template: `
      <Grid :columns="args.columns" :gap="args.gap" :className="args.className">
        <div v-for="i in 8" :key="i" 
             class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold mb-2">Карточка {{ i }}</h3>
          <p class="text-gray-600">Содержимое карточки для демонстрации</p>
        </div>
      </Grid>
    `
    }),
    args: {
        columns: 3,
        gap: 'md',
        className: ''
    }
};
