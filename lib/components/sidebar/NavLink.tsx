import { combineClassName } from "@lib/utils";
import { IconField, IconFieldProps } from "../IconField";

export interface NavLinkProps extends IconFieldProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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