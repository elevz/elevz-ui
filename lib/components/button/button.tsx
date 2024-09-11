import { combineClassName } from "@lib/utils"
import { getButtonStyles, sizesMap } from "./styles"
import { ButtonProps } from "./types"
import { Spinner } from "../feedback/spinner"
import { IconField } from "../IconField"

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  scheme = 'primary',
  variant = 'solid',
  loading,
  //schemes
  primary,
  secondary,
  success,
  danger,
  info,
  warning,
  //variant
  solid,
  outline,
  ghost,
  ...props
}) => {
  let leftIcon = props.leftIcon;
  let rightIcon = props.rightIcon;

  if (loading) {
    leftIcon = undefined;
    rightIcon = undefined;
  }

  function getScheme(): any {
    if (primary) return 'primary';
    else if (secondary) return 'secondary';
    else if (success) return 'success';
    else if (danger) return 'danger';
    else if (info) return 'info';
    else if (warning) return 'warning';
    return scheme;
  }

  function getVariant(): any {
    if (solid) return 'solid';
    else if (outline) return 'outline';
    else if (ghost) return 'ghost';
    return variant;
  }

  return (
    <IconField
      component="button"
      {...props}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      className={combineClassName(
        'rounded px-2 gap-2',
        getButtonStyles(getScheme(), getVariant()),
        sizesMap[size],
        props.className
      )}
      onClick={loading ? undefined : props.onClick}
    >
      {
        loading ?
          <Spinner className="h-2/4" />
          :
          props.children || props.label
      }
    </IconField>
  )
}