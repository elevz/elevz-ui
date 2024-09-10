import { CSSProperties, useEffect, useRef, useState } from "react";
import { Label } from "../../text"
import { Container } from "../Container";
import { IconField } from "../../IconField";
import { combineClassName } from "@lib/utils";
import { Options } from "./Options";
import { DropdownProps } from "./types";
import { getPosition, handleClose, searchTerm } from "./helpers";

export function Dropdown<T>({
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
  searchable,
  ...props
}: DropdownProps<T>) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [list, setList] = useState<T[] | undefined>(options);
  const [value, setValue] = useState<string>();
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<CSSProperties>();

  handleClose(visible, listRef, fieldRef, setVisible);

  useEffect(() => {
    if (value !== props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    if (visible) {
      setPosition(getPosition(fieldRef, listRef));
    }
  }, [visible]);

  function handleSearch(term: string) {
    setList(() => searchTerm(options || [], term, optionLabelKey));
  }

  return (
    <Container {...containerProps}>
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
          "border text bg-surface rounded h-10 px-2 outline-primary-500 w-full cursor-pointer",
          [visible, "border-primary outline-primary outline outline-1"],
          props.className
        )}
        ref={fieldRef}
        onClick={() => !!options ? setVisible(!visible) : null}
      >
        {searchable ?
          <input
            className="w-full outline-none bg-transparent"
            onChange={({ target }) => {
              setValue(target.value);
              handleSearch(target.value);
            }}
            value={value}
          />
          :
          <span className="w-full text">
            {value || <span className="text-disabled">{placeholder}</span>}
          </span>
        }
      </IconField>

      <Options
        options={list}
        visible={visible}
        ref={listRef}
        style={position}
        labelKey={optionLabelKey}
        onClick={(value, item) => {
          setValue(value);
          setList(options);
          onSelect?.(item)
          setVisible(false);
        }}
      />
    </Container>
  )
}