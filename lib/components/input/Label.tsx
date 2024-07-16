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
        "ez-flex ez-gap-1 ez-text-sm ez-font-body ez-text-neutral-800 ez-pl-1",
        "dark:ez-text-white"
      )}
    >
      {value || props.children}

      {Boolean(optional) &&
        <span className="ez-text-neutral-500">
          ({optionalText || 'opcional'})
        </span>
      }

      {Boolean(required) &&
        <span className="ez-text-danger">*</span>
      }
    </label>
  ) : null
}