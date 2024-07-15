import { combineClassName } from "@lib/utils";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const TextInput: React.FC<TextInputProps> = ({
  ...props
}) => {
  return (
    <input
      {...props}
      className={combineClassName(
        "ez-border ez-border-neutral-300 ez-text-neutral-800 ez-rounded-md ez-h-10 ez-px-2 ez-outline-primary-500 ez-text-base",
        props.className
      )}
    />
  )
}