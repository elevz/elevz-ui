/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--ez-primary)',
          light: 'var(--ez-primary-light)',
          lighter: 'var(--ez-primary-lighter)',
          dark: 'var(--ez-primary-dark)',
          darker: 'var(--ez-primary-darker)',
          hover: 'var(--ez-primary-hover)',
          surface: 'var(--ez-primary-surface, #FFFFFF)',
        },
        secondary: {
          DEFAULT: 'var(--ez-secondary)',
          light: 'var(--ez-secondary-light)',
          lighter: 'var(--ez-secondary-lighter)',
          dark: 'var(--ez-secondary-dark)',
          darker: 'var(--ez-secondary-darker)',
          hover: 'var(--ez-secondary-hover)',
          surface: 'var(--ez-secondary-surface, #FFFFFF)',
        },
        success: {
          DEFAULT: 'var(--ez-success)',
          light: 'var(--ez-success-light)',
          lighter: 'var(--ez-success-lighter)',
          dark: 'var(--ez-success-dark)',
          darker: 'var(--ez-success-darker)',
          hover: 'var(--ez-success-hover)',
          surface: 'var(--ez-success-surface, #FFFFFF)',
        },
        danger: {
          DEFAULT: 'var(--ez-danger)',
          light: 'var(--ez-danger-light)',
          lighter: 'var(--ez-danger-lighter)',
          dark: 'var(--ez-danger-dark)',
          darker: 'var(--ez-danger-darker)',
          hover: 'var(--ez-danger-hover)',
          surface: 'var(--ez-danger-surface, #FFFFFF)',
        },
        info: {
          DEFAULT: 'var(--ez-info)',
          light: 'var(--ez-info-light)',
          lighter: 'var(--ez-info-lighter)',
          dark: 'var(--ez-info-dark)',
          darker: 'var(--ez-info-darker)',
          hover: 'var(--ez-info-hover)',
          surface: 'var(--ez-info-surface, #FFFFFF)',
        },
        warning: {
          DEFAULT: 'var(--ez-warning)',
          light: 'var(--ez-warning-light)',
          lighter: 'var(--ez-warning-lighter)',
          dark: 'var(--ez-warning-dark)',
          darker: 'var(--ez-warning-darker)',
          hover: 'var(--ez-warning-hover)',
          surface: 'var(--ez-warning-surface, #FFFFFF)',
        }
      },
      keyframes: {
        empty: {
          '0%': { width: '100%' },
          '100%': { width: '0%' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        empty: 'empty 1s linear forwards',
      },
    },
  },
  plugins: [],
}
