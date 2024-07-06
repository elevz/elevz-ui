import { combineClassName } from "@lib/utils"
import { sizesMap, stylesMap } from "./styles"
import { ButtonProps } from "./types"

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  scheme = 'primary',
  variant = 'solid',
  ...props
}) => {
  return (
    <button
      {...props}
      className={combineClassName(
        'rounded-md px-2',
        stylesMap[scheme][variant],
        sizesMap[size]
      )}
    >
      {props.children || props.label}
    </button>
  )
}