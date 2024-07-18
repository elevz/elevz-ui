import { combineClassName } from "@lib/utils";
import Icon, { IconName, IconProps } from "elevz-icon";
import React, { ReactElement } from "react";

export interface IconFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactElement;
  rightIcon?: IconName;
  rightIconProps?: Omit<IconProps, 'name'>;
  rightIconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;
  leftIcon?: IconName;
  leftIconProps?: Omit<IconProps, 'name'>;
  leftIconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export const IconField: React.FC<IconFieldProps> = ({
  leftIcon,
  leftIconContainerProps,
  leftIconProps,
  rightIcon,
  rightIconContainerProps,
  rightIconProps,
  ...props
}) => {
  return (
    <div
      {...props}
      className={combineClassName("ez-relative", props.className)}
    >
      {Boolean(leftIcon) &&
        <span
          {...leftIconContainerProps}
          className={combineClassName("ez-z-10 ez-text ez-absolute ez-top-1/2 ez-translate-y-[-50%] ez-left-2", leftIconProps?.className)}
        >
          <Icon
            name={leftIcon!}
            size={20}
            {...leftIconProps}
          />
        </span>
      }

      {React.Children.map(props.children, (child: any) => {
        const elm = React.cloneElement(child, {
          className: combineClassName(
            child.props.className,
            [Boolean(leftIcon), 'ez-pl-9'],
            [Boolean(rightIcon), 'ez-pr-9']
          )
        });
        return elm;
      })}

      {Boolean(rightIcon) &&
        <span
          {...rightIconContainerProps}
          className={combineClassName("ez-z-10 ez-text ez-absolute ez-top-1/2 ez-translate-y-[-50%] ez-right-2", rightIconProps?.className)}
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
}