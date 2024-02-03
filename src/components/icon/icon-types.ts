import { SVGProps } from "react";
import icons from "./lib";

export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | number;

export type IconName = keyof typeof icons;