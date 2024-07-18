import { combineClassName } from "@lib/utils"
import { sizesMap, stylesMap } from "./styles"
import { ButtonProps } from "./types"
import { Spinner } from "../Spinner"

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  scheme = 'primary',
  variant = 'solid',
  loading,
  ...props
}) => {
  return (
    <button
      {...props}
      className={combineClassName(
        'ez-rounded-md ez-px-2',
        stylesMap[scheme][variant],
        sizesMap[size]
      )}
    >
      {loading ?
        <Spinner className="ez-size-6" />
        :
        props.children || props.label
      }
    </button>
  )
}