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
        "text border rounded h-10 px-2 text-base w-full disabled:bg-disabled disabled:text-disabled",
        "outline-primary focus:outline focus:border-primary",
        [!outline, "bg-surface"],
        props.className
      )}
    />
  )
}