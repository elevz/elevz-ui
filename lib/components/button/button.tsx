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
  ...props
}) => {
  let leftIcon = props.leftIcon;
  let rightIcon = props.rightIcon;

  if (loading) {
    leftIcon = undefined;
    rightIcon = undefined;
  }

  return (
    <IconField
      component="button"
      {...props}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      className={combineClassName(
        'ez-rounded ez-px-2 ez-gap-2',
        getButtonStyles(scheme, variant),
        sizesMap[size],
        props.className
      )}
      onClick={loading ? undefined : props.onClick}
    >
      {
        loading ?
          <Spinner className="ez-size-6" />
          :
          props.children || props.label
      }
    </IconField >
  )
}