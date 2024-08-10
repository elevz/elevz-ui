import { combineClassName } from "@lib/utils";
import { PropsWithChildren, useEffect, useState } from "react";
import { NavLink, NavLinkProps } from "./NavLink";

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