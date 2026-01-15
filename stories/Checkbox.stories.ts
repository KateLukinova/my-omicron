import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from '../components/UI/Checkbox.vue'

const meta = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['auto', 'desktop', 'mobile'],
            description: 'Размер чекбокса'
        },
        disabled: {
            control: 'boolean',
            description: 'Состояние disabled'
        },
        modelValue: {
            control: 'boolean',
            description: 'Состояние checked'
        },
        label: {
            control: 'text',
            description: 'Текст лейбла'
        }
    },
    args: {
        label: 'Checkbox label',
        modelValue: false,
        disabled: false,
        size: 'auto'
    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовые stories
export const Default: Story = {
    args: {
        label: 'Default checkbox'
    }
};

export const Checked: Story = {
    args: {
        label: 'Checked checkbox',
        modelValue: true
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled checkbox',
        disabled: true
    }
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled checked checkbox',
        disabled: true,
        modelValue: true
    }
};

// Демонстрация всех размеров
export const AllSizes: Story = {
    render: () => ({
        components: { Checkbox },
        template: `
            <div class="space-y-4">
                <div>
                    <h3 class="text-lg font-semibold mb-3">Размеры чекбоксов</h3>
                    <div class="space-y-3 flex items-end">
                        <Checkbox size="auto" label="Auto size (адаптивный)" />
                        <Checkbox size="desktop" label="Desktop size" />
                        <Checkbox size="mobile" label="Mobile size" />
                    </div>
                </div>
            </div>
        `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Демонстрация всех доступных размеров чекбоксов'
            }
        }
    }
};

// Все состояния
export const AllStates: Story = {
    render: () => ({
        components: { Checkbox },
        template: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold mb-3">Базовые состояния</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-3">
                            <Checkbox label="Unchecked" :modelValue="false" />
                            <Checkbox label="Checked" :modelValue="true" />
                        </div>
                        <div class="space-y-3">
                            <Checkbox label="Disabled unchecked" :modelValue="false" disabled />
                            <Checkbox label="Disabled checked" :modelValue="true" disabled />
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-3">Разные размеры</h3>
                    <div class="space-y-3">
                        <Checkbox size="auto" label="Auto (responsive)" :modelValue="true" />
                        <Checkbox size="desktop" label="Desktop size" :modelValue="true" />
                        <Checkbox size="mobile" label="Mobile size" :modelValue="true" />
                    </div>
                </div>
            </div>
        `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Полная демонстрация всех состояний и размеров чекбоксов'
            }
        }
    }
};

// Группы чекбоксов
export const CheckboxGroups: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const preferences = ref({
                notifications: true,
                newsletter: false,
                updates: true,
                marketing: false
            })

            const permissions = ref({
                read: true,
                write: false,
                delete: false,
                admin: false
            })

            return { preferences, permissions }
        },
        template: `
            <div class="space-y-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Настройки уведомлений</h3>
                    <div class="space-y-3 pl-4 border-l-2 border-blue-200">
                        <Checkbox 
                            v-model="preferences.notifications"
                            label="Системные уведомления" 
                        />
                        <Checkbox 
                            v-model="preferences.newsletter"
                            label="Рассылка новостей" 
                        />
                        <Checkbox 
                            v-model="preferences.updates"
                            label="Уведомления об обновлениях" 
                        />
                        <Checkbox 
                            v-model="preferences.marketing"
                            label="Маркетинговые уведомления" 
                        />
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Права доступа</h3>
                    <div class="space-y-3 pl-4 border-l-2 border-green-200">
                        <Checkbox 
                            v-model="permissions.read"
                            label="Чтение файлов" 
                        />
                        <Checkbox 
                            v-model="permissions.write"
                            label="Запись файлов" 
                        />
                        <Checkbox 
                            v-model="permissions.delete"
                            label="Удаление файлов" 
                        />
                        <Checkbox 
                            v-model="permissions.admin"
                            label="Права администратора" 
                        />
                    </div>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-md">
                    <h4 class="font-semibold mb-2">Текущие значения:</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <strong>Уведомления:</strong>
                            <pre class="mt-1 text-xs">{{ JSON.stringify(preferences, null, 2) }}</pre>
                        </div>
                        <div>
                            <strong>Права:</strong>
                            <pre class="mt-1 text-xs">{{ JSON.stringify(permissions, null, 2) }}</pre>
                        </div>
                    </div>
                </div>
            </div>
        `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Демонстрация использования чекбоксов в группах с реактивными данными'
            }
        }
    }
};
