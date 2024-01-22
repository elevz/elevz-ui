import React, { SVGProps } from "react";
import { IconName, IconSize } from "./icon-types";
import icons from "./lib"

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
}

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 25,
  lg: 30
}

export default function Icon(props: IconProps) {
  const Component: React.FC<SVGProps<SVGSVGElement>> = icons[props.name];

  const size = typeof props.size === 'string' ?
    sizeMap[props.size] : typeof props.size === 'number' ? props.size : null;

  return (
    <Component
      {...props}
      height={size || props.height || 25}
      width={size || props.width || 25}
    />
  );
}