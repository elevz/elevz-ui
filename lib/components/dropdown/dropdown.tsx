import { CSSProperties, useEffect, useRef, useState } from "react";
import { Label, LabelProps } from "../text"
import { Container } from "../input/Container";
import { IconField } from "../IconField";
import { createPortal } from "react-dom";
import { combineClassName } from "@lib/utils";

type OptionType = string | number | Record<string, any>;

export interface DropdownProps<T> extends Pick<LabelProps, 'optional' | 'optionalText'> {
  label?: string;
  labelProps?: LabelProps;
  onSelect?: (option: T) => void;
  optionLabelKey?: keyof T;
  required?: boolean;
  options?: T[];
}

export function Dropdown<T extends OptionType>({
  optional,
  optionalText,
  label,
  labelProps,
  onSelect,
  options,
  optionLabelKey,
  ...props
}: DropdownProps<T>) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<string>();

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<CSSProperties>()

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
      <Container>
        <Label
          required={props.required}
          optional={optional}
          optionalText={optionalText}
          value={label}
          {...labelProps}
        />
        <IconField
          ref={fieldRef}
          rightIcon="chevron-down"
          className={combineClassName("ez-border ez-bg-surface ez-rounded-md ez-h-10 ez-px-2 ez-outline-primary-500 ez-w-full ez-cursor-pointer", [visible, "ez-border-primary ez-outline-primary ez-outline ez-outline-1"])}
          onClick={() => setVisible(!visible)}
        >
          <span className="ez-w-full ez-text">
            {value}
          </span>
        </IconField>
      </Container>

      {visible &&
        createPortal(
          <div
            ref={listRef}
            className="ez-absolute ez-bg-surface ez-border ez-rounded-md ez-overflow-auto ez-shadow-md ez-max-h-80"
            style={position}
          >
            <ul className="ez-flex ez-flex-col">
              {options?.map((item, i) => {
                const label = getItemLabel(item, optionLabelKey);
                return (
                  <li
                    key={i}
                    className="ez-text hover:ez-bg-hover ez-cursor-pointer ez-px-2 ez-py-1 ez-text-base"
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