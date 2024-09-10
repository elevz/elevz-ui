import { combineClassName } from "@lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
  optionalText?: string;
  value?: string;
}

export const Label: React.FC<LabelProps> = ({
  required,
  optional,
  optionalText,
  value,
  ...props
}) => {
  return Boolean(value || props.children) ? (
    <label
      {...props}
      className={combineClassName(
        "flex gap-1 text-sm text pl-1",
        props.className
      )}
    >
      {value || props.children}

      {Boolean(optional) &&
        <span className="text-alternative">
          ({optionalText || 'opcional'})
        </span>
      }

      {Boolean(required) &&
        <span className="text-danger">*</span>
      }
    </label>
  ) : null
}