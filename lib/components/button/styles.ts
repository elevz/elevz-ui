import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";

export const sizesMap: Record<SizeType, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12'
}

export const stylesMap: Record<SchemeType, Record<VariantType, string>> = {
  primary: {
    solid: 'border border-primary text-primary-surface bg-primary hover:bg-primary-dark active:bg-primary-darker shadow-primary',
    outline: 'border text-primary border-primary hover:bg-primary-hover active:bg-primary-lighter',
    ghost: 'text-primary hover:bg-primary-hover active:bg-primary-lighter',
  },
  secondary: {
    solid: 'border border-secondary  text-secondary-surface bg-secondary hover:bg-secondary-dark active:bg-secondary-darker',
    outline: 'border text-secondary border-secondary hover:bg-secondary-hover active:bg-secondary-lighter',
    ghost: 'text-secondary hover:bg-secondary-hover active:bg-secondary-lighter',
  },
  success: {
    solid: 'border border-success  text-success-surface bg-success hover:bg-success-dark active:bg-success-darker',
    outline: 'border text-success border-success hover:bg-success-hover active:bg-success-lighter',
    ghost: 'text-success hover:bg-success-hover active:bg-success-lighter',
  },
  danger: {
    solid: 'border border-danger text-danger-surface bg-danger hover:bg-danger-dark active:bg-danger-darker',
    outline: 'border text-danger border-danger hover:bg-danger-hover active:bg-danger-lighter',
    ghost: 'text-danger hover:bg-danger-hover active:bg-danger-lighter',
  },
  info: {
    solid: 'border border-info text-info-surface bg-info hover:bg-info-dark active:bg-info-darker',
    outline: 'border text-info border-info hover:bg-info-hover active:bg-info-lighter',
    ghost: 'text-info hover:bg-info-hover active:bg-info-lighter',
  },
  warning: {
    solid: 'border border-warning text-warning-surface bg-warning hover:bg-warning-dark active:bg-warning-darker',
    outline: 'border text-warning border-warning hover:bg-warning-hover active:bg-warning-lighter',
    ghost: 'text-warning hover:bg-warning-hover active:bg-warning-lighter',
  }
}