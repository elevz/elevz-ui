import { combineClassName } from "@lib/utils";
import React from "react";

export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: string;
}

export const HelperText: React.FC<HelperTextProps> = ({
  value,
  ...props
}) => {
  return Boolean(value || props.children) ? (
    <small {...props} className={combineClassName("ez-text-neutral-500 ez-text-xs ez-font-body")}>
      {value || props.children}
    </small>
  ) : null
}