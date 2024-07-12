import { SchemeType } from "@lib/types";
import { IconName } from "elevz-icon";

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastProps {
  id?: string;
  autoClose?: boolean;
  indicator?: boolean;
  position?: ToastPosition;
  leftIcon?: IconName;
  rightIcon?: IconName;
  /**
   * time in ms
   */
  duration?: number;
  scheme?: SchemeType;
  message?: string;
  onClose?: () => void;
  onCloseClick?: () => void;
  visible?: boolean;
}