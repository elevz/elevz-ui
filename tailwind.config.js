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
          surface: 'var(--ez-primary-surface, #FFFFFF)',
          lightest: 'var(--ez-primary-lightest)',
          light: 'var(--ez-primary-light)',
          dark: 'var(--ez-primary-dark)',
          darkest: 'var(--ez-primary-darkest)',
        },
        secondary: {
          DEFAULT: 'var(--ez-secondary)',
          surface: 'var(--ez-secondary-surface, #FFFFFF)',
          lightest: 'var(--ez-secondary-lightest)',
          light: 'var(--ez-secondary-light)',
          dark: 'var(--ez-secondary-dark)',
          darkest: 'var(--ez-secondary-darkest)',
        },
        success: {
          DEFAULT: 'var(--ez-success)',
          surface: 'var(--ez-success-surface, #FFFFFF)',
          lightest: 'var(--ez-success-lightest)',
          light: 'var(--ez-success-light)',
          dark: 'var(--ez-success-dark)',
          darkest: 'var(--ez-success-darkest)',
        },
        danger: {
          DEFAULT: 'var(--ez-danger)',
          surface: 'var(--ez-danger-surface, #FFFFFF)',
          lightest: 'var(--ez-danger-lightest)',
          light: 'var(--ez-danger-light)',
          dark: 'var(--ez-danger-dark)',
          darkest: 'var(--ez-danger-darkest)',
        },
        info: {
          DEFAULT: 'var(--ez-info)',
          surface: 'var(--ez-info-surface, #FFFFFF)',
          lightest: 'var(--ez-info-lightest)',
          light: 'var(--ez-info-light)',
          dark: 'var(--ez-info-dark)',
          darkest: 'var(--ez-info-darkest)',
        },
        warning: {
          DEFAULT: 'var(--ez-warning)',
          surface: 'var(--ez-warning-surface, #FFFFFF)',
          lightest: 'var(--ez-warning-lightest)',
          light: 'var(--ez-warning-light)',
          dark: 'var(--ez-warning-dark)',
          darkest: 'var(--ez-warning-darkest)',
        }
      }
    },
  },
  plugins: [],
}
