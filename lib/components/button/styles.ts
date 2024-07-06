import { SchemeType } from "@lib/types";
import { SizeType, VariantType } from "./types";

export const sizesMap: Record<SizeType, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12'
}

export const stylesMap: Record<SchemeType, Record<VariantType, string>> = {
  primary: {
    solid: 'border text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
    outline: 'border text-primary-500 border-primary-500 hover:bg-primary-50 active:bg-primary-100',
    ghost: 'text-primary-500 hover:bg-primary-50 active:bg-primary-100',
  },
  secondary: {
    solid: 'border text-white bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700',
    outline: 'border text-secondary-500 border-secondary-500 hover:bg-secondary-50 active:bg-secondary-100',
    ghost: 'text-secondary-500 hover:bg-secondary-50 active:bg-secondary-100',
  },
  success: {
    solid: 'border text-white bg-success-500 hover:bg-success-600 active:bg-success-700',
    outline: 'border text-success-500 border-success-500 hover:bg-success-50 active:bg-success-100',
    ghost: 'text-success-500 hover:bg-success-50 active:bg-success-100',
  },
  danger: {
    solid: 'border text-white bg-danger-500 hover:bg-danger-600 active:bg-danger-700',
    outline: 'border text-danger-500 border-danger-500 hover:bg-danger-50 active:bg-danger-100',
    ghost: 'text-danger-500 hover:bg-danger-50 active:bg-danger-100',
  },
  info: {
    solid: 'border text-white bg-info-500 hover:bg-info-600 active:bg-info-700',
    outline: 'border text-info-500 border-info-500 hover:bg-info-50 active:bg-info-100',
    ghost: 'text-info-500 hover:bg-info-50 active:bg-info-100',
  },
  warning: {
    solid: 'border text-white bg-warning-500 hover:bg-warning-600 active:bg-warning-700',
    outline: 'border text-warning-500 border-warning-500 hover:bg-warning-50 active:bg-warning-100',
    ghost: 'text-warning-500 hover:bg-warning-50 active:bg-warning-100',
  }
}