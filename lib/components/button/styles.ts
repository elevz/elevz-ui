import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";
import { combineClassName } from "@lib/utils";

export const sizesMap: Record<SizeType, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12'
}

const solid: Record<SchemeType, string> = {
  primary: 'text-primary-surface bg-primary hover:bg-primary-dark active:bg-primary-darker disabled:bg-primary-darker',
  secondary: 'text-secondary-surface bg-secondary hover:bg-secondary-dark active:bg-secondary-darker disabled:bg-secondary-darker',
  success: 'text-success-surface bg-success hover:bg-success-dark active:bg-success-darker disabled:bg-success-darker',
  danger: 'text-danger-surface bg-danger hover:bg-danger-dark active:bg-danger-darker disabled:bg-danger-darker',
  info: 'text-info-surface bg-info hover:bg-info-dark active:bg-info-darker disabled:bg-info-darker',
  warning: 'text-warning-surface bg-warning hover:bg-warning-dark active:bg-warning-darker disabled:bg-warning-darker',
}

const outline: Record<SchemeType, string> = {
  primary: 'text-primary border-primary hover:bg-primary-hover active:bg-primary-light',
  secondary: 'text-secondary border-secondary hover:bg-secondary-hover active:bg-secondary-light',
  success: 'text-success border-success hover:bg-success-hover active:bg-success-light',
  danger: 'text-danger border-danger hover:bg-danger-hover active:bg-danger-light',
  info: 'text-info border-info hover:bg-info-hover active:bg-info-light',
  warning: 'text-warning border-warning hover:bg-warning-hover active:bg-warning-light',
}

const ghost: Record<SchemeType, string> = {
  primary: 'text-primary hover:bg-primary-hover active:bg-primary-light',
  secondary: 'text-secondary hover:bg-secondary-hover active:bg-secondary-light',
  success: 'text-success hover:bg-success-hover active:bg-success-light',
  danger: 'text-danger hover:bg-danger-hover active:bg-danger-light',
  info: 'text-info hover:bg-info-hover active:bg-info-light',
  warning: 'text-warning hover:bg-warning-hover active:bg-warning-light',
}

export function getButtonStyles(scheme: SchemeType, variant: VariantType) {
  const base = {
    solid: 'disabled:opacity-60',
    outline: 'border bg-transparent disabled:opacity-60 disabled:bg-transparent',
    ghost: 'disabled:bg-transparent disabled:opacity-60 disabled:bg-transparent'
  }

  const styles: Record<VariantType, Record<SchemeType, string>> = {
    solid,
    outline,
    ghost
  }

  return combineClassName(base[variant], styles[variant][scheme], 'disabled:cursor-not-allowed');
}