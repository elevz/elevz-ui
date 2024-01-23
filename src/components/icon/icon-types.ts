import { SVGProps } from "react";

export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | number;

export type IconName =
  | 'android'
  | 'apple'
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-down'
  | 'chevron-down-double'
  | 'chevron-down-left'
  | 'chevron-down-right'
  | 'chevron-left'
  | 'chevron-left-double'
  | 'chevron-right'
  | 'chevron-right-double'
  | 'chevron-selector-horizontal'
  | 'chevron-selector-vertical'
  | 'chevron-up'
  | 'chevron-up-double'
  | 'chevron-up-left'
  | 'chevron-up-right'
  | 'copy'
  | 'discord'
  | 'facebook'
  | 'filter'
  | 'filter-close'
  | 'github'
  | 'google'
  | 'home'
  | 'linkedin'
  | 'moon'
  | 'reddit'
  | 'sun'
  | 'trash'
  | 'twitter'
  | 'wallet'
  | 'whatsapp'
  | 'youtube';