import React, { ReactNode } from "react";
import { ToastProvider } from "./ToastContext";

export default (props: { children?: ReactNode }) => (
  <ToastProvider>
    {props.children}
  </ToastProvider>
)