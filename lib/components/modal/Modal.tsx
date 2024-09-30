import { combineClassName } from "@lib/utils";
import { ModalProps } from "./types";
import { createPortal } from "react-dom";

export const Modal: React.FC<ModalProps> = ({
  onBackdropClick,
  backdropProps,
  visible,
  center,
  ...props
}) => {
  return visible ? createPortal(
    <div
      {...props}
      className={combineClassName("fixed inset-0 z-10", [center, 'flex flex-col items-center justify-center'], props.className)}
    >
      <div
        onClick={onBackdropClick}
        {...backdropProps}
        className={combineClassName("absolute inset-0 bg-black/40 backdrop-blur-sm -z-10", backdropProps?.className)}
      />

      {props.children}
    </div>,
    document.body
  ) : null;
}