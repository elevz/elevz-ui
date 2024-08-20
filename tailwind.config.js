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
          light: 'var(--ez-primary-light)',
          dark: 'var(--ez-primary-dark)',
          darker: 'var(--ez-primary-darker)',
          hover: 'var(--ez-primary-hover)',
          surface: 'var(--ez-primary-surface)',
        },
        secondary: {
          DEFAULT: 'var(--ez-secondary)',
          light: 'var(--ez-secondary-light)',
          dark: 'var(--ez-secondary-dark)',
          darker: 'var(--ez-secondary-darker)',
          hover: 'var(--ez-secondary-hover)',
          surface: 'var(--ez-secondary-surface)',
        },
        success: {
          DEFAULT: 'var(--ez-success)',
          light: 'var(--ez-success-light)',
          dark: 'var(--ez-success-dark)',
          darker: 'var(--ez-success-darker)',
          hover: 'var(--ez-success-hover)',
          surface: 'var(--ez-success-surface)',
        },
        info: {
          DEFAULT: 'var(--ez-info)',
          light: 'var(--ez-info-light)',
          dark: 'var(--ez-info-dark)',
          darker: 'var(--ez-info-darker)',
          hover: 'var(--ez-info-hover)',
          surface: 'var(--ez-info-surface)',
        },
        danger: {
          DEFAULT: 'var(--ez-danger)',
          light: 'var(--ez-danger-light)',
          dark: 'var(--ez-danger-dark)',
          darker: 'var(--ez-danger-darker)',
          hover: 'var(--ez-danger-hover)',
          surface: 'var(--ez-danger-surface)',
        },
        warning: {
          DEFAULT: 'var(--ez-warning)',
          light: 'var(--ez-warning-light)',
          dark: 'var(--ez-warning-dark)',
          darker: 'var(--ez-warning-darker)',
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
