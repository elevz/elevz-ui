import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";
import { combineClassName } from "@lib/utils";

export const sizesMap: Record<SizeType, string> = {
  sm: 'ez-h-8',
  md: 'ez-h-10',
  lg: 'ez-h-12'
}

const solid: Record<SchemeType, string> = {
  primary: 'ez-text-primary-surface ez-bg-primary hover:ez-bg-primary-dark active:ez-bg-primary-darker disabled:ez-bg-primary-darker',
  secondary: 'ez-text-secondary-surface ez-bg-secondary hover:ez-bg-secondary-dark active:ez-bg-secondary-darker disabled:ez-bg-secondary-darker',
  success: 'ez-text-success-surface ez-bg-success hover:ez-bg-success-dark active:ez-bg-success-darker disabled:ez-bg-success-darker',
  danger: 'ez-text-danger-surface ez-bg-danger hover:ez-bg-danger-dark active:ez-bg-danger-darker disabled:ez-bg-danger-darker',
  info: 'ez-text-info-surface ez-bg-info hover:ez-bg-info-dark active:ez-bg-info-darker disabled:ez-bg-info-darker',
  warning: 'ez-text-warning-surface ez-bg-warning hover:ez-bg-warning-dark active:ez-bg-warning-darker disabled:ez-bg-warning-darker',
}

const outline: Record<SchemeType, string> = {
  primary: 'ez-text-primary ez-border-primary hover:ez-bg-primary-hover active:ez-bg-primary-light',
  secondary: 'ez-text-secondary ez-border-secondary hover:ez-bg-secondary-hover active:ez-bg-secondary-light',
  success: 'ez-text-success ez-border-success hover:ez-bg-success-hover active:ez-bg-success-light',
  danger: 'ez-text-danger ez-border-danger hover:ez-bg-danger-hover active:ez-bg-danger-light',
  info: 'ez-text-info ez-border-info hover:ez-bg-info-hover active:ez-bg-info-light',
  warning: 'ez-text-warning ez-border-warning hover:ez-bg-warning-hover active:ez-bg-warning-light',
}

const ghost: Record<SchemeType, string> = {
  primary: 'ez-text-primary hover:ez-bg-primary-hover active:ez-bg-primary-light',
  secondary: 'ez-text-secondary hover:ez-bg-secondary-hover active:ez-bg-secondary-light',
  success: 'ez-text-success hover:ez-bg-success-hover active:ez-bg-success-light',
  danger: 'ez-text-danger hover:ez-bg-danger-hover active:ez-bg-danger-light',
  info: 'ez-text-info hover:ez-bg-info-hover active:ez-bg-info-light',
  warning: 'ez-text-warning hover:ez-bg-warning-hover active:ez-bg-warning-light',
}

export function getButtonStyles(scheme: SchemeType, variant: VariantType) {
  const base = {
    solid: 'disabled:ez-opacity-60',
    outline: 'ez-border ez-bg-transparent disabled:ez-opacity-60 disabled:ez-bg-transparent',
    ghost: 'disabled:ez-bg-transparent disabled:ez-opacity-60 disabled:ez-bg-transparent'
  }

  const styles: Record<VariantType, Record<SchemeType, string>> = {
    solid,
    outline,
    ghost
  }

  return combineClassName(base[variant], styles[variant][scheme], 'disabled:ez-cursor-not-allowed');
}