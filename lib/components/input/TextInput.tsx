import { combineClassName } from "@lib/utils";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  outline?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  outline,
  ...props
}) => {
  return (
    <input
      {...props}
      className={combineClassName(
        "ez-text ez-border ez-rounded-md ez-h-10 ez-px-2 ez-text-base ez-w-full",
        "ez-outline-primary focus:ez-outline focus:ez-border-primary",
        [!outline, "ez-bg-surface"],
        props.className
      )}
    />
  )
}