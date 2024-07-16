import { combineClassName } from "@lib/utils";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const TextInput: React.FC<TextInputProps> = ({
  ...props
}) => {
  return (
    <input
      {...props}
      className={combineClassName(
        "ez-border ez-border-neutral-300 ez-outline-primary focus:ez-border-primary ez-rounded-md ez-h-10 ez-px-2 ez-text-base ez-w-full",
        "dark:ez-bg-slate-800 dark:ez-text-white dark:focus:ez-border-primary dark:ez-outline-primary",
        props.className
      )}
    />
  )
}