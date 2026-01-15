/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './.storybook/**/*.{js,ts,vue}',
    './stories/**/*.stories.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        green: {
          50: '#f3fff4',
          100: '#ceffd3',
          200: '#afffb7',
          300: '#7fff8c',
          400: '#4df75e',
          500: '#1dcf46',
          600: '#0ea135',
          700: '#05883b',
          800: '#047142',
          900: '#085836',
          950: '#083d26',
        },
        // Grey Colors
        grey: {
          100: '#ececec',
          200: '#c9c9c8',
          300: '#a9a9a9',
          400: '#8e8f8d',
          500: '#787878',
          600: '#676767',
          700: '#494949',
          800: '#363636',
          900: '#262625',
          950: '#141513',
        },
        // Red Colors
        red: {
          700: '#de4c45',
        },

        // Theme-aware colors using CSS Custom Properties
        // Text Colors
        'my-text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-brand': 'var(--text-brand)',
        'text-invert': 'var(--text-invert)',
        'text-hover': 'var(--text-hover)',
        'text-pressed': 'var(--text-pressed)',
        'text-contrast': 'var(--text-contrast)',

        // Background Colors
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'surface-invert': 'var(--surface-invert)',
        'bg-brand': 'var(--bg-brand)',

        // Border Colors
        'border-primary': 'var(--border-primary)',
        'border-secondary': 'var(--border-secondary)',
        'border-contrast': 'var(--border-contrast)',
        'border-invert': 'var(--border-invert)',

        //Buttons color
        'button-primary-bg-default': '#4DF75E',
        'button-primary-bg-hover': 'var(--button-primary-bg-hover)',
        'button-primary-bg-pressed': 'var(--button-primary-bg-pressed)',
        'button-primary-bg-disabled': 'var(--button-primary-bg-disabled)',
        'button-primary-text-disabled': 'var(--button-primary-text-disabled)',
        'button-secondary-bg-hover': 'var(--button-secondary-bg-hover)',
        'button-secondary-bg-pressed': 'var(--button-secondary-bg-pressed)',
        'button-secondary-bg-disabled': 'var(--button-secondary-bg-disabled)',
        'button-secondary-text-disabled': 'var(--button-secondary-text-disabled)',
      },
      spacing: {
        '0.4': '0.4rem',
        '0.8': '0.8rem',
        '1': '1rem',
        '1.2': '1.2rem',
        '1.6': '1.6rem',
        '2': '2rem',
        '2.4': '2.4rem',
        '4': '4rem',
        '4.8': '4.8rem',
        '5.6': '5.6rem',
        '6.4': '6.4rem',
        '7.2': '7.2rem',
        '8': '8rem',
      },
      borderRadius: {
        'sm': '0.4rem',
        'md': '0.8rem',
        'lg': '1.6rem',
        'xl': '3.2rem',
        '2xl': '12.8rem',
        '3xl': '36rem',
        // Semantic radius
        'minimal': '0.4rem',
        'rounded': '0.8rem',
        'full': '5.6rem',
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'lg': '2rem',
        'xl': '2.4rem',
        '2xl': '3.2rem',
        '3xl': '5.6rem',
        '4xl': '11rem',
      },
      screens: {
        'mobile': '375px',
        'tablet': '960px',
        'desktop-xs': '1366px',
        'desktop': '1680px',
      }
    },
  },
  plugins: [],
}
