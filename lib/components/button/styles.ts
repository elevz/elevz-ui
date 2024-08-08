import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";

export const sizesMap: Record<SizeType, string> = {
  sm: 'ez-h-8',
  md: 'ez-h-10',
  lg: 'ez-h-12'
}

export const stylesMap: Record<SchemeType, Record<VariantType, string>> = {
  primary: {
    solid: 'ez-text-primary-surface ez-bg-primary hover:ez-bg-primary-dark active:ez-bg-primary-darker disabled:ez-bg-primary-darker disabled:ez-opacity-60',
    outline: 'ez-bg-transparent ez-border ez-text-primary ez-border-primary hover:ez-bg-primary-hover active:ez-bg-primary-light disabled:ez-bg-transparent disabled:ez-opacity-60',
    ghost: 'ez-text-primary hover:ez-bg-primary-hover active:ez-bg-primary-light disabled:ez-bg-transparent disabled:ez-opacity-60',
  },
  secondary: {
    solid: 'ez-text-secondary-surface ez-bg-secondary hover:ez-bg-secondary-dark active:ez-bg-secondary-darker disabled:ez-bg-secondary-darker disabled:ez-opacity-60',
    outline: 'ez-bg-transparent ez-border ez-text-secondary ez-border-secondary hover:ez-bg-secondary-hover active:ez-bg-secondary-light disabled:ez-bg-transparent disabled:ez-opacity-60',
    ghost: 'ez-text-secondary hover:ez-bg-secondary-hover active:ez-bg-secondary-light disabled:ez-bg-transparent disabled:ez-opacity-60',
  },
  success: {
    solid: 'ez-text-success-surface ez-bg-success hover:ez-bg-success-dark active:ez-bg-success-darker disabled:ez-bg-success-darker disabled:ez-opacity-60',
    outline: 'ez-bg-transparent ez-border ez-text-success ez-border-success hover:ez-bg-success-hover active:ez-bg-success-light disabled:ez-bg-transparent disabled:ez-opacity-60',
    ghost: 'ez-text-success hover:ez-bg-success-hover active:ez-bg-success-light disabled:ez-bg-transparent disabled:ez-opacity-60',
  },
  danger: {
    solid: 'ez-text-danger-surface ez-bg-danger hover:ez-bg-danger-dark active:ez-bg-danger-darker disabled:ez-bg-danger-darker disabled:ez-opacity-60',
    outline: 'ez-bg-transparent ez-border ez-text-danger ez-border-danger hover:ez-bg-danger-hover active:ez-bg-danger-light disabled:ez-bg-transparent disabled:ez-opacity-60',
    ghost: 'ez-text-danger hover:ez-bg-danger-hover active:ez-bg-danger-light disabled:ez-bg-transparent disabled:ez-opacity-60',
  },
  info: {
    solid: 'ez-text-info-surface ez-bg-info hover:ez-bg-info-dark active:ez-bg-info-darker disabled:ez-bg-info-darker disabled:ez-opacity-60',
    outline: 'ez-bg-transparent ez-border ez-text-info ez-border-info hover:ez-bg-info-hover active:ez-bg-info-light disabled:ez-bg-transparent disabled:ez-opacity-60',
    ghost: 'ez-text-info hover:ez-bg-info-hover active:ez-bg-info-light disabled:ez-transparent disabled:ez-opacity-60',
  },
  warning: {
    solid: 'ez-text-warning-surface ez-bg-warning hover:ez-bg-warning-dark active:ez-bg-warning-darker disabled:ez-bg-warning-darker disabled:ez-opacity-60',
    outline: 'ez-bg-transparent ez-border ez-text-warning ez-border-warning hover:ez-bg-warning-hover active:ez-bg-warning-light disabled:ez-bg-transparent disabled:ez-opacity-60',
    ghost: 'ez-text-warning hover:ez-bg-warning-hover active:ez-bg-warning-light disabled:ez-bg-transparent disabled:ez-opacity-60',
  },
}