// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createRequire } from "node:module";
import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);



const config: StorybookConfig = {
    stories: [
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: ['@storybook/addon-docs'],

    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },

    async viteFinal(config) {
        const { mergeConfig } = await import('vite')

        return mergeConfig(config, {
            plugins: [vue()],
            resolve: {
                alias: {
                    '@': require('path').resolve(__dirname, '../')
                }
            },
            define: {
                'process.env': {}
            },
            css: {
                postcss: {
                    plugins: [
                        require('tailwindcss')('./tailwind.config.js'),
                        require('autoprefixer'),
                    ],
                },
            },
        })
    }
}

export default config
