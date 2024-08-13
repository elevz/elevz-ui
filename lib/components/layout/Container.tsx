import { combineClassName } from "@lib/utils"
import React from "react"

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div {...props} className={combineClassName("ez-bg-background ez-flex ez-flex-col ez-p-5 ez-gap-5 ez-h-dvh ez-w-full", props.className)}>
      {props.children}
    </div>
  )
}