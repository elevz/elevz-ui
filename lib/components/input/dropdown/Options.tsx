import { combineClassName } from "@lib/utils";
import React, { useState } from "react";
import { createPortal } from "react-dom";

interface OptionsProps<T = any> {
  style?: React.CSSProperties;
  options?: T[];
  labelKey?: any;
  onClick?: (value: any, item: T, index: number) => void;
  visible?: boolean;
}

export const Options = React.forwardRef<HTMLDivElement, OptionsProps>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState<number>();
  
  return props.visible ? createPortal(
    <div
      ref={ref}
      className="absolute bg-surface border rounded overflow-auto shadow-lg max-h-80 z-10"
      style={props.style}
    >
      <ul className="flex flex-col">
        {props.options?.map((item, i) => {
          const label = getItemLabel(item, props.labelKey);
          return (
            <li
              key={i}
              className={combineClassName("text hover:bg-hover cursor-pointer px-2 py-1 text-base", [currentIndex === i, "bg-primary-hover hover:bg-primary-hover"])}
              onClick={() => {
                setCurrentIndex(i)
                props.onClick?.(label, item, i)
              }}
            >
              {label}
            </li>
          )
        })}
      </ul>
    </div>, document.body
  ) : null
})


function getItemLabel(item: string | number | Record<string, any>, label: string = 'label'): string {
  if (typeof item === 'string') {
    return item;
  }

  if (typeof item === 'number') {
    return String(item);
  }

  return String(item[label]);
}