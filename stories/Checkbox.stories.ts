import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from '../components/UI/Checkbox.vue'

const meta = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['auto', 'desktop', 'mobile'] },
        disabled: { control: 'boolean' },
        modelValue: { control: 'boolean' },
        label: { control: 'text' },
        onChange: { action: 'changed' }
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

export const Default: Story = {
    args: {
        label: 'Default checkbox'
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const checkboxValue = ref(args.modelValue)
            return { checkboxValue, ...args }
        },
        template: `<Checkbox v-model="checkboxValue" :label="label" :disabled="disabled" :size="size" />`
    })
}

// Демонстрация Actions
export const WithActions: Story = {
    args: {
        label: 'Click me!',
        modelValue: false
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const checkboxValue = ref(args.modelValue)
            const handleChange = (value: boolean) => {
                checkboxValue.value = value
            }
            return { checkboxValue, handleChange, ...args }
        },
        template: `<Checkbox v-model="checkboxValue" :label="label" :disabled="disabled" :size="size" @update:modelValue="handleChange" />`
    })
}
