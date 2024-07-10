import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";

export const sizesMap: Record<SizeType, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12'
}

export const stylesMap: Record<SchemeType, Record<VariantType, string>> = {
  primary: {
    solid: 'border text-primary-surface bg-primary hover:bg-primary-dark active:bg-primary-darkest',
    outline: 'border text-primary border-primary hover:bg-primary-lightest active:bg-primary-light',
    ghost: 'text-primary hover:bg-primary-lightest active:bg-primary-light',
  },
  secondary: {
    solid: 'border text-secondary-surface bg-secondary hover:bg-secondary-dark active:bg-secondary-darkest',
    outline: 'border text-secondary border-secondary hover:bg-secondary-lightest active:bg-secondary-light',
    ghost: 'text-secondary hover:bg-secondary-lightest active:bg-secondary-light',
  },
  success: {
    solid: 'border text-success-surface bg-success hover:bg-success-dark active:bg-success-darkest',
    outline: 'border text-success border-success hover:bg-success-lightest active:bg-success-light',
    ghost: 'text-success hover:bg-success-lightest active:bg-success-light',
  },
  danger: {
    solid: 'border text-danger-surface bg-danger hover:bg-danger-dark active:bg-danger-darkest',
    outline: 'border text-danger border-danger hover:bg-danger-lightest active:bg-danger-light',
    ghost: 'text-danger hover:bg-danger-lightest active:bg-danger-light',
  },
  info: {
    solid: 'border text-info-surface bg-info hover:bg-info-dark active:bg-info-darkest',
    outline: 'border text-info border-info hover:bg-info-lightest active:bg-info-light',
    ghost: 'text-info hover:bg-info-lightest active:bg-info-light',
  },
  warning: {
    solid: 'border text-warning-surface bg-warning hover:bg-warning-dark active:bg-warning-darkest',
    outline: 'border text-warning border-warning hover:bg-warning-lightest active:bg-warning-light',
    ghost: 'text-warning hover:bg-warning-lightest active:bg-warning-light',
  }
}