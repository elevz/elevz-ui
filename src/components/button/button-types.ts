import { CompoundColor } from "../../theme";

export type SizeType =
  | 'xs'
  | 'sm'
  | 'md';

export type SizePropsType = {
  fontSize: string;
  height: string;
  padding: string;
  minWidth: string;
}

export type VariantType =
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'highlight';

export interface CustomProps {
  scheme?: CompoundColor;
  size?: SizeType;
  variant?: VariantType;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps;