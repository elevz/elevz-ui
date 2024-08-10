import React, { PropsWithChildren, useEffect, useState } from "react"
import { IconField, IconFieldProps } from "../IconField";
import { combineClassName } from "@lib/utils";

export const Sidebar = (props: PropsWithChildren) => {
  return (
    <div className="ez-flex ez-flex-col ez-bg-surface ez-min-w-64 ez-h-full ez-p-4 ez-gap-1">
      {props.children}
    </div>
  )
}

interface NavLinkProps extends IconFieldProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
  label?: string;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  active,
  label,
  ...props
}) => {
  return (
    <IconField
      {...props}
      justify="start"
      className={combineClassName(
        "ez-p-3 ez-gap-3 hover:ez-bg-hover ez-rounded ez-cursor-pointer",
        [active, "ez-bg-hover"],
        props.className
      )}
    >
      <span className="ez-w-full">
        {label}
      </span>
    </IconField>
  )
}

interface NavGroupProps extends NavLinkProps {
  groupClassName?: string;
  visible?: boolean;
}

export const NavGroup: React.FC<PropsWithChildren<NavGroupProps>> = ({
  active,
  visible,
  label,
  children,
  ...props
}) => {
  const [_visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof visible === 'boolean' && visible !== visible) {
      setVisible(visible)
    }
  }, [visible])

  return (
    <>
      <NavLink
        rightIcon={_visible ? "chevron-up" : "chevron-down"}
        {...props}
        justify="start"
        className={combineClassName(
          "ez-p-3 ez-gap-3 ez-rounded ez-cursor-pointer",
          [active, "ez-bg-hover"],
          props.className
        )}
        onClick={() => { setVisible(!_visible) }}
        label={label}
      />

      {_visible && children}
    </>
  )
}