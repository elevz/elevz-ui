import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";
import { combineClassName } from "@lib/utils";

export const sizesMap: Record<SizeType, string> = {
  sm: 'h-8 text-sm',
  md: 'h-10',
  lg: 'h-12'
}

const solid: Record<SchemeType, string> = {
  primary: 'text-primary-surface bg-primary',
  secondary: 'text-secondary-surface bg-secondary',
  success: 'text-success-surface bg-success',
  danger: 'text-danger-surface bg-danger',
  info: 'text-info-surface bg-info',
  warning: 'text-warning-surface bg-warning',
}

const outline: Record<SchemeType, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  danger: 'text-danger',
  info: 'text-info',
  warning: 'text-warning',
}

const ghost: Record<SchemeType, string> = {
  primary: 'text-primary hover:bg-primary-hover',
  secondary: 'text-secondary hover:bg-secondary-hover',
  success: 'text-success hover:bg-success-hover',
  danger: 'text-danger hover:bg-danger-hover',
  info: 'text-info hover:bg-info-hover',
  warning: 'text-warning hover:bg-warning-hover',
}

const link: Record<SchemeType, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  danger: 'text-danger',
  info: 'text-info',
  warning: 'text-warning',
}

export function getButtonStyles(scheme: SchemeType, variant: VariantType) {
  const base = {
    solid: 'disabled:opacity-60',
    outline: 'border bg-transparent disabled:opacity-60',
    ghost: 'disabled:bg-transparent disabled:opacity-60',
    link: 'h-auto hover:underline'
  }

  const styles: Record<VariantType, Record<SchemeType, string>> = {
    solid,
    outline,
    ghost,
    link
  }

  return combineClassName(base[variant], styles[variant][scheme], 'disabled:cursor-not-allowed');
}