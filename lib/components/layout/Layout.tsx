import { combineClassName } from "@lib/utils"

interface LayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Layout = (props: LayoutProps) => {
  return (
    <div {...props} className={combineClassName("flex flex-row bg-background h-dvh w-full", props.className)}>
      {props.children}
    </div>
  )
}