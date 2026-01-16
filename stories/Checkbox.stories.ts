import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from '../components/UI/Checkbox.vue'

const meta = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['auto', 'desktop', 'mobile']
        },
        disabled: {
            control: 'boolean'
        },
        modelValue: {
            control: 'boolean'
        },
        label: {
            control: 'text'
        },
        onChange: {
            action: 'changed',
            table: {
                category: 'Events'
            }
        }
    },
    args: {
        label: 'Checkbox label',
        modelValue: false,
        disabled: false,
        size: 'auto'
    }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>


export const MultipleCheckboxes: Story = {
    args: {
        label: 'Checkbox item'
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const items = ref([
                { id: 1, label: 'Option 1', checked: false },
                { id: 2, label: 'Option 2', checked: true },
                { id: 3, label: 'Option 3', checked: false, disabled: true }
            ])

            const handleChange = (id: number, newValue: boolean) => {
                const item = items.value.find(item => item.id === id)
                if (item) {
                    item.checked = newValue
                    args.onChange({ id, label: item.label, checked: newValue })
                }
            }

            return { args, items, handleChange }
        },
        template: `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <p style="margin: 0 0 16px 0; color: #666;">Выберите опции:</p>
            <Checkbox
                v-for="item in items"
                :key="item.id"
                :model-value="item.checked"
                @update:model-value="(val) => handleChange(item.id, val)"
                :label="item.label"
                :disabled="item.disabled"
                :size="args.size"
            />
          </div>`
    })
}
