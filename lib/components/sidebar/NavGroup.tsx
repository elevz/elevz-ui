import { combineClassName } from "@lib/utils";
import { PropsWithChildren, useEffect, useState } from "react";
import { NavButton, NavButtonProps } from "./NavButton";

interface NavGroupProps extends NavButtonProps {
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
      <NavButton
        rightIcon={_visible ? "chevron-up" : "chevron-down"}
        {...props}
        justify="start"
        className={combineClassName(
          "p-3 gap-3 rounded cursor-pointer",
          [active, "bg-hover"],
          props.className
        )}
        onClick={() => { setVisible(!_visible) }}
        label={label}
      />

      {_visible && children}
    </>
  )
}