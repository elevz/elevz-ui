import { combineClassName } from "@lib/utils";
import Icon, { IconName, IconProps } from "elevz-icon";
import React, { forwardRef } from "react";

export interface IconFieldProps {
  rightIcon?: IconName;
  rightIconProps?: Omit<IconProps, 'name'>;
  rightIconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;
  leftIcon?: IconName;
  leftIconProps?: Omit<IconProps, 'name'>;
  leftIconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export interface IconFieldElement extends React.HTMLAttributes<HTMLElement>, IconFieldProps {
  component?: React.ElementType;
  absolute?: boolean;
}

export const IconField = forwardRef<HTMLDivElement, IconFieldElement>(({
  absolute,
  component: Component = 'div',
  leftIcon,
  leftIconContainerProps,
  leftIconProps,
  rightIcon,
  rightIconContainerProps,
  rightIconProps,
  ...props
}, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={combineClassName(
        "ez-text ez-flex ez-items-center ez-relative ez-px-2 ez-gap-2 ez-justify-center",
        [absolute, 'relative'],
        [absolute && leftIcon, "ez-pl-9"],
        [absolute && leftIcon, "ez-pr-9"],
        props.className
      )}
    >
      {Boolean(leftIcon) &&
        <span
          {...leftIconContainerProps}
          className={combineClassName("ez-size-5", [absolute, 'ez-absolute ez-left-2'], leftIconProps?.className)}
        >
          <Icon
            name={leftIcon!}
            size={20}
            {...leftIconProps}
          />
        </span>
      }

      {props.children}

      {Boolean(rightIcon) &&
        <span
          {...rightIconContainerProps}
          className={combineClassName("ez-size-5", [absolute, 'ez-absolute ez-right-2'], rightIconProps?.className)}
        >
          <Icon
            name={rightIcon!}
            size={20}
            {...rightIconProps}
          />
        </span>
      }
    </Component>
  )
});