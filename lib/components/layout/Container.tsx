import { combineClassName } from "@lib/utils"
import React from "react"

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div {...props} className={combineClassName("bg-background flex flex-col p-5 h-dvh w-full", props.className)}>
      {props.children}
    </div>
  )
}