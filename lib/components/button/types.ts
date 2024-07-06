import { SchemeType } from "@lib/types/styles";

export type SizeType = 'sm' | 'md' | 'lg';

export type VariantType = 'solid' | 'outline' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: SizeType;
  scheme?: SchemeType;
  variant?: VariantType;
}