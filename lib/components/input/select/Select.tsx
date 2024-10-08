import { SelectProps } from "./types";
import { Container } from "../Container";
import { Label } from "@lib/components/text";
import { IconField } from "@lib/components/IconField";
import { combineClassName } from "@lib/utils";

export function Select<T>({
  containerProps,
  label,
  labelProps,
  optional,
  optionalText,
  options,
  labelKey,
  valueKey,
  placeholder,
  ...props
}: SelectProps<T>) {
  return (
    <Container {...containerProps}>
      <Label
        required={props.required}
        optional={optional}
        optionalText={optionalText}
        value={label}
        {...labelProps}
      />
      <IconField
        component="select"
        value={props.value || 'placeholder'}
        {...props as any}
        className={combineClassName(
          "border text bg-surface rounded h-10 px-2 outline-primary-500 w-full cursor-pointer focus:outline-primary",
          props.className
        )}
      >
        {placeholder &&
          <option value={"placeholder"} disabled>
            {placeholder}
          </option>
        }
        {options && options.map((item, i) =>
          <Option
            key={i}
            item={item}
            labelKey={labelKey}
            valueKey={valueKey}
          />
        )}
      </IconField>
    </Container>
  )
}

const Option = <T,>(props: {
  item: T;
  labelKey?: keyof T;
  valueKey?: keyof T;
}) => {
  if (!props.item) {
    return null;
  }

  const labelKey = props.labelKey || 'label';
  const valueKey = props.valueKey || 'value';

  const label = typeof props.item === 'object' ? props.item[labelKey as keyof typeof props.item] : String(props.item);
  const value = typeof props.item === 'object' ? props.item[valueKey as keyof typeof props.item] : String(props.item);

  return (
    <option value={value as string}>
      {label as string}
    </option>
  )
}