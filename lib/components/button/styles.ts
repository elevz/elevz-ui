import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";
import { combineClassName } from "@lib/utils";

export const sizesMap: Record<SizeType, string> = {
  sm: 'h-8 text-sm',
  md: 'h-10',
  lg: 'h-12'
}

const solid: Record<SchemeType, string> = {
  primary: 'text-primary-surface bg-primary fill-primary',
  secondary: 'text-secondary-surface bg-secondary fill-secondary',
  success: 'text-success-surface bg-success fill-success',
  danger: 'text-danger-surface bg-danger fill-danger',
  info: 'text-info-surface bg-info fill-info',
  warning: 'text-warning-surface bg-warning fill-warning',
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

export function getSpinnerStyle(scheme: SchemeType, variant: VariantType): string {
  if (variant === 'solid') {
    return {
      primary: 'border-primary-surface border-r-primary',
      secondary: 'border-secondary-surface border-r-secondary',
      success: 'border-success-surface border-r-success',
      danger: 'border-danger-surface border-r-danger',
      info: 'border-info-surface border-r-info',
      warning: 'border-warning-surface border-r-warning',
    }[scheme];
  }

  return {
    primary: 'border-primary border-r-primary-surface',
    secondary: 'border-secondary border-r-secondary-surface',
    success: 'border-success border-r-success-surface',
    danger: 'border-danger border-r-danger-surface',
    info: 'border-info border-r-info-surface',
    warning: 'border-warning border-r-warning-surface',
  }[scheme];
}