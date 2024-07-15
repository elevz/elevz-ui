import { combineClassName } from "@lib/utils";
import { ModalProps } from "./types";
import { createPortal } from "react-dom";

export const Modal: React.FC<ModalProps> = ({
  onBackdropClick,
  backdropProps,
  visible,
  ...props
}) => {
  return visible ? createPortal(
    <div
      {...props}
      className={combineClassName("ez-absolute ez-inset-0 ez-z-10", props.className)}
    >
      <div
        onClick={onBackdropClick}
        {...backdropProps}
        className={combineClassName("ez-absolute ez-inset-0 ez-bg-black/40 ez-backdrop-blur-sm ez--z-10", backdropProps?.className)}
      />

      {props.children}
    </div>,
    document.body
  ) : null;
}