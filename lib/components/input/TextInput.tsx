import { combineClassName } from "@lib/utils";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const TextInput: React.FC<TextInputProps> = ({
  ...props
}) => {
  return (
    <input
      {...props}
      className={combineClassName(
        "border border-neutral-300 text-neutral-800 rounded-md h-10 px-2 outline-primary-500 text-base",
        props.className
      )}
    />
  )
}