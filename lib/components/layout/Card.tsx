import { combineClassName } from "@lib/utils"
import React from "react"

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Container: React.FC<CardProps> = (props) => {
  return (
    <div {...props} className={combineClassName("ez-bg-surface ez-p-4 ez-rounded", props.className)}>
      {props.children}
    </div>
  )
}

interface CardBodyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Body: React.FC<CardBodyProps> = (props) => {
  return (
    <div {...props} className={combineClassName("ez-flex ez-flex-col ez-gap-4", props.className)}>
      {props.children}
    </div>
  )
}

export const Card = Object.assign(Container, {
  Body
});