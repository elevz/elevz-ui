import { CSSProperties, useEffect, useRef, useState } from "react";
import { Label, LabelProps } from "../text"
import { Container, ContainerProps } from "../input/Container";
import { IconField, IconFieldProps } from "../IconField";
import { createPortal } from "react-dom";
import { combineClassName } from "@lib/utils";

type OptionType = string | number | Record<string, any>;

export interface DropdownProps<T> extends Pick<LabelProps, 'optional' | 'optionalText'> {
  className?: string;
  containerProps?: ContainerProps;
  iconFieldProps?: IconFieldProps;
  label?: string;
  labelProps?: LabelProps;
  placeholder?: string;
  onSelect?: (option: T) => void;
  optionLabelKey?: keyof T;
  required?: boolean;
  options?: T[];
  optionProps?: Pick<React.LiHTMLAttributes<HTMLLIElement>, 'className' | 'style'>;
  value?: string;
}

export function Dropdown<T extends OptionType>({
  containerProps,
  iconFieldProps,
  placeholder,
  optional,
  optionalText,
  label,
  labelProps,
  onSelect,
  options,
  optionLabelKey,
  optionProps,
  ...props
}: DropdownProps<T>) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<string>();

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<CSSProperties>();

  useEffect(() => {
    if (value !== props.value) {
      setValue(props.value);
    }
  }, [props.value])

  useEffect(() => {
    if (visible) {
      const fieldElement = fieldRef.current;
      const listElement = listRef.current;

      if (fieldElement && listElement) {
        const boundingField = fieldElement.getBoundingClientRect();
        const boundingList = listElement.getBoundingClientRect();

        if ((window.innerHeight - boundingField.y) < boundingList.height) {
          return setPosition({
            bottom: (window.innerHeight - boundingField.y) + 4,
            left: boundingField.left,
            width: boundingField.width
          })
        }

        setPosition({
          top: boundingField.bottom + 4,
          left: boundingField.left,
          width: boundingField.width
        })

      }
    }
  }, [visible])


  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClose);
      document.addEventListener("keydown", handleClose);
    } else {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, [visible]);

  function handleClose(event: any) {
    if (
      listRef.current && !listRef.current.contains(event.target) &&
      fieldRef.current && !fieldRef.current.contains(event.target)
    ) {
      return setVisible(false);
    }

    if (event.key === "Escape") {
      return setVisible(false);
    }
  };

  return (
    <>
      <Container  {...containerProps}>
        <Label
          required={props.required}
          optional={optional}
          optionalText={optionalText}
          value={label}
          {...labelProps}
        />
        <IconField
          rightIcon="chevron-down"
          {...iconFieldProps}
          className={combineClassName(
            "border bg-surface rounded h-10 px-2 outline-primary-500 w-full cursor-pointer",
            [visible, "border-primary outline-primary outline outline-1"],
            props.className
          )}
          ref={fieldRef}
          onClick={() => !!options ? setVisible(!visible) : null}
        >
          <span className="w-full text">
            {value || <span className="text-disabled">{placeholder}</span>}
          </span>
        </IconField>
      </Container>

      {visible &&
        createPortal(
          <div
            ref={listRef}
            className="absolute bg-surface border rounded overflow-auto shadow-md max-h-80"
            style={position}
          >
            <ul className="flex flex-col">
              {options?.map((item, i) => {
                const label = getItemLabel(item, optionLabelKey);
                return (
                  <li
                    {...optionProps}
                    key={i}
                    className={combineClassName("text hover:bg-hover cursor-pointer px-2 py-1 text-base", optionProps?.className)}
                    onClick={() => {
                      setValue(label);
                      onSelect?.(item)
                      setVisible(false);
                    }}
                  >
                    {label}
                  </li>
                )
              })}
            </ul>
          </div>, document.body
        )
      }
    </>
  )
}


function getItemLabel(item: OptionType, label: any = 'label'): string {
  if (typeof item === 'string') {
    return item;
  }
  if (typeof item === 'number') {
    return String(item);
  }

  return String(item[label]);
}