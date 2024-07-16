import { combineClassName } from "@lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { };

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      {...props}
      className={combineClassName("ez-flex ez-flex-col ez-gap-1 ez-min-w-48 ez-mb-1", props.className)}
    />
  )
}