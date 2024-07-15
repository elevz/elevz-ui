import { PropsWithChildren } from "react"
import { ToastProvider } from "@lib/context";

export const ElevzProvider = (props: PropsWithChildren) => {
  return (
    <ToastProvider>
      {props.children}
    </ToastProvider>
  );
}