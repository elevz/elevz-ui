import { combineClassName } from "@lib/utils";
import Icon, { IconName, IconProps } from "elevz-icon";
import React, { forwardRef } from "react";

export interface IconFieldProps {
  /**
   * justify-content
   */
  justify?: 'start' | 'center' | 'end';
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
  justify = 'center',
  ...props
}, ref) => {
  const justifyContent = {
    'start': 'justify-start',
    'center': 'justify-center',
    'end': 'justify-end'
  }

  return (
    <Component
      {...props}
      ref={ref}
      className={combineClassName(
        "flex items-center",
        justifyContent[justify],
        [absolute, 'relative'],
        [absolute && leftIcon, "!pl-9"],
        [absolute && leftIcon, "!pr-9"],
        props.className,
      )}
    >
      {Boolean(leftIcon) &&
        <span
          {...leftIconContainerProps}
          className={combineClassName("size-5", [absolute, 'absolute left-2'], leftIconProps?.className)}
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
          className={combineClassName("size-5", [absolute, 'absolute right-2'], rightIconProps?.className)}
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