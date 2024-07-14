/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--ez-primary, #14b8a6)',
          light: 'var(--ez-primary-light, #5eead4)',
          lighter: 'var(--ez-primary-lighter, #ccfbf1)',
          dark: 'var(--ez-primary-dark, #0d9488)',
          darker: 'var(--ez-primary-darker, #0f766e)',
          hover: 'var(--ez-primary-hover, #f0fdfa)',
          surface: 'var(--ez-primary-surface, #FFFFFF)',
        },
        secondary: {
          DEFAULT: 'var(--ez-secondary, #8b5cf6)',
          light: 'var(--ez-secondary-light)',
          lighter: 'var(--ez-secondary-lighter)',
          dark: 'var(--ez-secondary-dark)',
          darker: 'var(--ez-secondary-darker)',
          hover: 'var(--ez-secondary-hover)',
          surface: 'var(--ez-secondary-surface, #FFFFFF)',
        },
        success: {
          DEFAULT: 'var(--ez-success, #22c55e)',
          light: 'var(--ez-success-light, #c4b5fd)',
          lighter: 'var(--ez-success-lighter, #ede9fe)',
          dark: 'var(--ez-success-dark, #7c3aed)',
          darker: 'var(--ez-success-darker, #6d28d9)',
          hover: 'var(--ez-success-hover, #f5f3ff)',
          surface: 'var(--ez-success-surface, #FFFFFF)',
        },
        info: {
          DEFAULT: 'var(--ez-info, #0ea5e9)',
          light: 'var(--ez-info-light, #7dd3fc)',
          lighter: 'var(--ez-info-lighter, #e0f2fe)',
          dark: 'var(--ez-info-dark, #0284c7)',
          darker: 'var(--ez-info-darker, #0369a1)',
          hover: 'var(--ez-info-hover, #f0f9ff)',
          surface: 'var(--ez-info-surface, #FFFFFF)',
        },
        danger: {
          DEFAULT: 'var(--ez-danger, #ef4444)',
          light: 'var(--ez-danger-light, #fca5a5)',
          lighter: 'var(--ez-danger-lighter, #fee2e2)',
          dark: 'var(--ez-danger-dark, #dc2626)',
          darker: 'var(--ez-danger-darker, #b91c1c)',
          hover: 'var(--ez-danger-hover, #fef2f2)',
          surface: 'var(--ez-danger-surface, #FFFFFF)',
        },
        warning: {
          DEFAULT: 'var(--ez-warning, #eab308)',
          light: 'var(--ez-warning-light, #fde047)',
          lighter: 'var(--ez-warning-lighter, #fef9c3)',
          dark: 'var(--ez-warning-dark, #ca8a04)',
          darker: 'var(--ez-warning-darker, #a16207)',
          hover: 'var(--ez-warning-hover, #fefce8)',
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
