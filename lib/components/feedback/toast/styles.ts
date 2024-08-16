import { SchemeType } from "@lib/types";
import { IconName } from "elevz-icon";
import { ToastPosition } from "./types";

export const stylesMap: Record<SchemeType, {
  container: string;
  shadow: string;
  text: string;
  icon?: IconName;
}> = {
  primary: {
    container: 'bg-primary text-primary',
    shadow: 'shadow-md shadow-primary-light',
    text: 'text-primary-surface',
  },
  secondary: {
    container: 'bg-secondary text-secondary',
    shadow: 'shadow-md shadow-secondary-light',
    text: 'text-secondary-surface',
  },
  success: {
    container: 'bg-success text-success',
    shadow: 'shadow-md shadow-success-light',
    text: 'text-success-surface',
    icon: 'check',
  },
  danger: {
    container: 'bg-danger text-danger',
    shadow: 'shadow-md shadow-danger-light',
    text: 'text-danger-surface',
    icon: 'alert-triangle',
  },
  info: {
    container: 'bg-info text-info',
    shadow: 'shadow-md shadow-info-light',
    text: 'text-info-surface',
    icon: 'info-circle',
  },
  warning: {
    container: 'bg-warning text-warning',
    shadow: 'shadow-md shadow-warning-light',
    text: 'text-warning-surface',
    icon: 'alert-circle',
  },
}

export const positions = {
  left: 'left-4',
  right: 'right-4',
  center: 'translate-x-[-50%] left-1/2',
  top: 'top-4',
  middle: 'translate-y-[-50%] top-1/2',
  bottom: 'bottom-4'
}

export function getPosition(position: ToastPosition) {
  if(!position){
    return '';
  }

  const str = position.split('-');

  return 'fixed z-10 ' + positions[str[0] as keyof typeof positions] + ' ' + positions[str[1] as keyof typeof positions]
}