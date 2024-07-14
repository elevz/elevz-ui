import { PropsWithChildren } from "react"
import { ComponentProvider } from "./ComponentProvider";
import { ToastProvider } from "@lib/context";

export const ElevzProvider = (props: PropsWithChildren) => {
  return (
    <ComponentProvider>
      <ToastProvider>
        {props.children}
      </ToastProvider>
    </ComponentProvider>
  );
}