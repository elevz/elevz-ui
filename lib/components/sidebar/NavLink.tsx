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
        "p-3 gap-3 rounded cursor-pointer",
        [active, "bg-hover", "hover:bg-hover"],
        props.className
      )}
    >
      <span className="w-full">
        {label}
      </span>
    </IconField>
  )
}