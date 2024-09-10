import { Container, ContainerProps } from "../Container";
import { IconField, IconFieldProps } from "./IconField";
import { TextInput, TextInputProps } from "./TextInput";
import { Label, LabelProps, HelperText, HelperTextProps } from "../../text";

export interface InputProps extends TextInputProps, Pick<IconFieldProps, 'leftIcon' | 'rightIcon'>, Pick<LabelProps, 'optional' | 'optionalText'> {
  containerProps?: ContainerProps;
  helperText?: string;
  helperTextProps?: HelperTextProps;
  label?: string;
  labelProps?: LabelProps;
  iconFieldProps?: IconFieldProps;
}

export const Input: React.FC<InputProps> = ({
  containerProps,
  label,
  labelProps,
  leftIcon,
  rightIcon,
  helperText,
  helperTextProps,
  iconFieldProps,
  optional,
  optionalText,
  ...props
}) => {
  return (
    <Container {...containerProps}>
      <Label
        htmlFor={props.id}
        required={props.required}
        optional={optional}
        optionalText={optionalText}
        value={label}
        {...labelProps}
      />

      <IconField
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...iconFieldProps}
      >
        <TextInput
          {...props}
        />
      </IconField>

      <HelperText
        value={helperText}
        {...helperTextProps}
      />
    </Container>
  )
}