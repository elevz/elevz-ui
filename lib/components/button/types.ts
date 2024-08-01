import { SchemeType } from "@lib/types/styles";
import { IconFieldProps } from "../IconField";

export type SizeType = 'sm' | 'md' | 'lg';

export type VariantType = 'solid' | 'outline' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IconFieldProps {
  label?: string;
  size?: SizeType;
  scheme?: SchemeType;
  loading?: boolean;
  variant?: VariantType;
}