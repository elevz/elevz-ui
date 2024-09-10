import { ContainerProps } from "../Container";
import { LabelProps } from "../../text";

export interface SelectProps<T> extends Partial<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>, Pick<LabelProps, 'optional' | 'optionalText'> {
  containerProps?: ContainerProps;
  label?: string;
  labelProps?: LabelProps;
  labelKey?: keyof T;
  valueKey?: keyof T;
  options?: T[];
  placeholder?: string;
}