// TextButton.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import TextButton from '../components/UI/TextButton.vue'

const meta = {
    title: 'Components/TextButton',
    component: TextButton,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary'],
        },
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof TextButton>

export default meta
type Story = StoryObj<typeof meta>

// Primary Buttons
export const Primary: Story = {
    args: {
        type: 'primary',
        size: 'medium',
    },
    render: (args) => ({
        components: { TextButton },
        setup() {
            return { args }
        },
        template: `
            <TextButton v-bind="args">
                Primary Button
            </TextButton>
        `,
    }),
}

// Secondary Buttons
export const Secondary: Story = {
    args: {
        type: 'secondary',
        size: 'medium',
    },
    render: (args) => ({
        components: { TextButton },
        setup() {
            return { args }
        },
        template: `
            <TextButton v-bind="args">
                Secondary Button
            </TextButton>
        `,
    }),
}
