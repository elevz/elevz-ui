import { combineClassName } from "@lib/utils";
import Icon, { IconName, IconProps } from "elevz-icon";
import { ReactNode } from "react";

export interface IconFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  rightIcon?: IconName;
  rightIconProps?: IconProps;
  rightIconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;
  leftIcon?: IconName;
  leftIconProps?: IconProps;
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
      className={combineClassName(
        "relative",
        [Boolean(leftIcon), "[&>input]:pl-9"],
        [Boolean(rightIcon), "[&>input]:pr-9"],
        props.className
      )}
    >
      {Boolean(leftIcon) &&
        <span
          {...leftIconContainerProps}
          className={combineClassName("text-neutral-800 absolute top-1/2 translate-y-[-50%] left-2", leftIconProps?.className)}
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
          className={combineClassName("text-neutral-800 absolute top-1/2 translate-y-[-50%] right-2", rightIconProps?.className)}
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