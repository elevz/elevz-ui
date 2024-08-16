import { combineClassName } from "@lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { };

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      {...props}
      className={combineClassName("flex flex-col gap-1 min-w-48", props.className)}
    />
  )
}