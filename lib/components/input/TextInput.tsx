import { combineClassName } from "@lib/utils";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const TextInput: React.FC<TextInputProps> = ({
  ...props
}) => {
  return (
    <input
      {...props}
      className={combineClassName(
        "ez-bg-surface ez-text-text ez-border ez-border-border ez-rounded-md ez-h-10 ez-px-2 ez-text-base ez-w-full",
        "ez-outline-primary focus:ez-border-primary",
        props.className
      )}
    />
  )
}