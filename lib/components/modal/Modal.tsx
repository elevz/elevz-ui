import { combineClassName } from "@lib/utils";
import { ModalProps } from "./types";
import { createPortal } from "react-dom";

export const Modal: React.FC<ModalProps> = ({
  onBackdropClick,
  backdropProps,
  visible,
  ...props
}) => {
  const portal = document.getElementById('ez-modal') || document.body; 
  
  return visible ? createPortal(
    <div
      {...props}
      className={combineClassName("fixed inset-0 z-10", props.className)}
    >
      <div
        onClick={onBackdropClick}
        {...backdropProps}
        className={combineClassName("absolute inset-0 bg-black/40 backdrop-blur-sm -z-10", backdropProps?.className)}
      />

      {props.children}
    </div>,
    portal
  ) : null;
}