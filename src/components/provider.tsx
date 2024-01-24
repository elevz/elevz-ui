import React from "react";
import { ReactNode } from "react";
import { StyleSheetManager } from "styled-components";

export default function ElevzProvider({ children }: { children: ReactNode }) {
  return (
    <StyleSheetManager>
      {children}
    </StyleSheetManager>
  )
}