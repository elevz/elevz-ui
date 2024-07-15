import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";

export const sizesMap: Record<SizeType, string> = {
  sm: 'ez-h-8',
  md: 'ez-h-10',
  lg: 'ez-h-12'
}

export const stylesMap: Record<SchemeType, Record<VariantType, string>> = {
  primary: {
    solid: 'ez-border ez-border-primary ez-text-primary-surface ez-bg-primary hover:ez-bg-primary-dark active:ez-bg-primary-darker',
    outline: 'ez-border ez-text-primary ez-border-primary hover:ez-bg-primary-hover active:ez-bg-primary-lighter',
    ghost: 'ez-text-primary hover:ez-bg-primary-hover active:ez-bg-primary-lighter',
  },
  secondary: {
    solid: 'ez-border ez-border-secondary ez-text-secondary-surface ez-bg-secondary hover:ez-bg-secondary-dark active:ez-bg-secondary-darker',
    outline: 'ez-border ez-text-secondary ez-border-secondary hover:ez-bg-secondary-hover active:ez-bg-secondary-lighter',
    ghost: 'ez-text-secondary hover:ez-bg-secondary-hover active:ez-bg-secondary-lighter',
  },
  success: {
    solid: 'ez-border ez-border-success ez-text-success-surface ez-bg-success hover:ez-bg-success-dark active:ez-bg-success-darker',
    outline: 'ez-border ez-text-success ez-border-success hover:ez-bg-success-hover active:ez-bg-success-lighter',
    ghost: 'ez-text-success hover:ez-bg-success-hover active:ez-bg-success-lighter',
  },
  danger: {
    solid: 'ez-border ez-border-danger ez-text-danger-surface ez-bg-danger hover:ez-bg-danger-dark active:ez-bg-danger-darker',
    outline: 'ez-border ez-text-danger ez-border-danger hover:ez-bg-danger-hover active:ez-bg-danger-lighter',
    ghost: 'ez-text-danger hover:ez-bg-danger-hover active:ez-bg-danger-lighter',
  },
  info: {
    solid: 'ez-border ez-border-info ez-text-info-surface ez-bg-info hover:ez-bg-info-dark active:ez-bg-info-darker',
    outline: 'ez-border ez-text-info ez-border-info hover:ez-bg-info-hover active:ez-bg-info-lighter',
    ghost: 'ez-text-info hover:ez-bg-info-hover active:ez-bg-info-lighter',
  },
  warning: {
    solid: 'ez-border ez-border-warning ez-text-warning-surface ez-bg-warning hover:ez-bg-warning-dark active:ez-bg-warning-darker',
    outline: 'ez-border ez-text-warning ez-border-warning hover:ez-bg-warning-hover active:ez-bg-warning-lighter',
    ghost: 'ez-text-warning hover:ez-bg-warning-hover active:ez-bg-warning-lighter',
  },
}