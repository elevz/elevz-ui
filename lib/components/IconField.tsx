import { combineClassName } from "@lib/utils";
import Icon, { IconName, IconProps } from "elevz-icon";
import React, { forwardRef } from "react";

export interface IconFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  rightIcon?: IconName;
  rightIconProps?: Omit<IconProps, 'name'>;
  rightIconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;
  leftIcon?: IconName;
  leftIconProps?: Omit<IconProps, 'name'>;
  leftIconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export const IconField = forwardRef<HTMLDivElement, IconFieldProps>(({
  leftIcon,
  leftIconContainerProps,
  leftIconProps,
  rightIcon,
  rightIconContainerProps,
  rightIconProps,
  ...props
}, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={combineClassName("ez-flex ez-items-center ez-relative ez-px-2 ez-gap-2", props.className)}
    >
      {Boolean(leftIcon) &&
        <span
          {...leftIconContainerProps}
          className={combineClassName("ez-text-neutral-800 ez-size-5", leftIconProps?.className)}
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
          className={combineClassName("ez-text-neutral-800 ez-size-5", rightIconProps?.className)}
        >
          <Icon
            name={rightIcon!}
            size={20}
            {...rightIconProps}
          />
        </span>
      }
    </div>
  )
});