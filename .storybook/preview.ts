import type { Preview } from '@storybook/vue3-vite'
import '../assets/css/tailwind.css'
import '../assets/scss/index.scss'
import '../assets/scss/common/_variables.scss'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: 'var(--bg-primary)',
                },
                {
                    name: 'dark',
                    value: 'var(--bg-primary)',
                },
            ],
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Light', icon: 'sun' },
                    { value: 'dark', title: 'Dark', icon: 'moon' },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (story, context) => {
            const theme = context.globals.theme || 'light'

            return {
                components: { story },
                setup() {
                    return { theme }
                },
                template: `
                    <div :data-theme="theme" style="min-height: 10vh; padding: 1rem; background-color: var(--bg-primary); color: var(--text-primary);">
                        <story />
                    </div>
                `,
            }
        },
    ],
}

export default preview
