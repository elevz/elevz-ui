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
    container: 'ez-bg-primary ez-text-primary',
    shadow: 'ez-shadow-md ez-shadow-primary-light',
    text: 'ez-text-primary-surface',
  },
  secondary: {
    container: 'ez-bg-secondary ez-text-secondary',
    shadow: 'ez-shadow-md ez-shadow-secondary-light',
    text: 'ez-text-secondary-surface',
  },
  success: {
    container: 'ez-bg-success ez-text-success',
    shadow: 'ez-shadow-md ez-shadow-success-light',
    text: 'ez-text-success-surface',
    icon: 'check',
  },
  danger: {
    container: 'ez-bg-danger ez-text-danger',
    shadow: 'ez-shadow-md ez-shadow-danger-light',
    text: 'ez-text-danger-surface',
    icon: 'alert-triangle',
  },
  info: {
    container: 'ez-bg-info ez-text-info',
    shadow: 'ez-shadow-md ez-shadow-info-light',
    text: 'ez-text-info-surface',
    icon: 'info-circle',
  },
  warning: {
    container: 'ez-bg-warning ez-text-warning',
    shadow: 'ez-shadow-md ez-shadow-warning-light',
    text: 'ez-text-warning-surface',
    icon: 'alert-circle',
  },
}

export const positions = {
  left: 'ez-left-4',
  right: 'ez-right-4',
  center: 'ez-translate-x-[-50%] ez-left-1/2',
  top: 'ez-top-4',
  middle: 'ez-translate-y-[-50%] ez-top-1/2',
  bottom: 'ez-bottom-4'
}

export function getPosition(position: ToastPosition) {
  if(!position){
    return '';
  }

  const str = position.split('-');

  return 'ez-fixed ez-z-10 ' + positions[str[0] as keyof typeof positions] + ' ' + positions[str[1] as keyof typeof positions]
}