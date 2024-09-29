/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        disabled: 'var(--background, #f3f4f6)',
        background: {
          DEFAULT: 'var(--background, #f9fafb)',
        },
        surface: {
          DEFAULT: 'var(--surface, #ffffff)',
        },
        hover: {
          DEFAULT: 'var(--hover, #f3f4f6)',
        },
        primary: {
          DEFAULT: 'var(--ez-primary)',
          hover: 'var(--ez-primary-hover)',
          surface: 'var(--ez-primary-surface)',
        },
        secondary: {
          DEFAULT: 'var(--ez-secondary)',
          hover: 'var(--ez-secondary-hover)',
          surface: 'var(--ez-secondary-surface)',
        },
        success: {
          DEFAULT: 'var(--ez-success)',
          hover: 'var(--ez-success-hover)',
          surface: 'var(--ez-success-surface)',
        },
        info: {
          DEFAULT: 'var(--ez-info)',
          hover: 'var(--ez-info-hover)',
          surface: 'var(--ez-info-surface)',
        },
        danger: {
          DEFAULT: 'var(--ez-danger)',
          hover: 'var(--ez-danger-hover)',
          surface: 'var(--ez-danger-surface)',
        },
        warning: {
          DEFAULT: 'var(--ez-warning)',
          hover: 'var(--ez-warning-hover)',
          surface: 'var(--ez-warning-surface)',
        }
      },
      keyframes: {
        empty: {
          '0%': { width: '100%' },
          '100%': { width: '0%' }
        },
      },
      animation: {
        empty: 'empty 1s linear forwards'
      },
      textColor: {
        'disabled': 'var(--text-disabled, #9ca3af)'
      }
    },
  },
  plugins: [],
}
