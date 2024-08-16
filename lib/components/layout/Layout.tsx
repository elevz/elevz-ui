import { PropsWithChildren } from "react"

export const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-row bg-background h-dvh w-full">
      {props.children}
    </div>
  )
}