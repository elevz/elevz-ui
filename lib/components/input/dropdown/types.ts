import { IconFieldProps } from "../../IconField";
import { LabelProps } from "../../text";
import { ContainerProps } from "../Container";

export interface DropdownProps<T> extends Pick<LabelProps, 'optional' | 'optionalText'> {
  className?: string;
  containerProps?: ContainerProps;
  iconFieldProps?: IconFieldProps;
  label?: string;
  labelProps?: LabelProps;
  placeholder?: string;
  onSelect?: (option: T) => void;
  optionLabelKey?: keyof T;
  required?: boolean;
  options?: T[];
  optionProps?: Pick<React.LiHTMLAttributes<HTMLLIElement>, 'className' | 'style'>;
  value?: string;
  searchable?: boolean;
}