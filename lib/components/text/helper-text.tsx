import { combineClassName } from "@lib/utils";
import React from "react";

export interface HelperTextProps extends React.HTMLAttributes<HTMLElement> {
  value?: string;
}

export const HelperText: React.FC<HelperTextProps> = ({
  value,
  ...props
}) => {
  return Boolean(value || props.children) ? (
    <small {...props} className={combineClassName("ez-text-alternative ez-text-xs ez-pl-1", props.className)}>
      {value || props.children}
    </small>
  ) : null
}