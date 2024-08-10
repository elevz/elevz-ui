import { PropsWithChildren } from "react"

export const Layout = (props: PropsWithChildren) => {
  return (
    <div className="ez-flex ez-flex-row ez-bg-background ez-h-dvh ez-w-full">
      {props.children}
    </div>
  )
}