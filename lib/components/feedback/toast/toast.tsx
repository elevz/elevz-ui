import React, { useEffect, useState } from "react";
import Icon from "elevz-icon";
import { combineClassName } from "@lib/utils";
import { getPosition, stylesMap } from "./styles";
import { ToastProps } from "./types";
import { createPortal } from "react-dom";
import { IconField } from "@lib/components/IconField";

export const Toast: React.FC<ToastProps> = ({
  leftIcon,
  rightIcon,
  scheme = 'success',
  duration = 1500,
  message,
  ...props
}) => {
  const config = stylesMap[scheme];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.visible && !visible) {
      setVisible(true);
      if (props.autoClose) {
        setTimeout(() => {
          setVisible(false);
          props.onClose?.();
        }, (duration + 50));
      }
    }

    if (!props.visible && visible) {
      setVisible(false);
      props.onClose?.();
    }
  }, [props.visible, visible]);

  const Component = (
    <div
      id={props.id}
      className={combineClassName([props.position, getPosition(props.position!)])}
    >
      <IconField
        className={combineClassName(
          "rounded p-2 gap-2 w-80 min-h-12 overflow-hidden shadow-lg",
          config.container,
          [props.onClick, 'cursor-pointer']
        )}
        leftIcon={config.icon || leftIcon}
        leftIconProps={{
          className: config.text,
          size: 24
        }}
        rightIcon={rightIcon}
        rightIconProps={{
          className: config.text,
          size: 24
        }}
        onClick={props.onClick}
      >
        <p className={combineClassName('text-left line-clamp-2 w-full', config.text)}>
          {message}
        </p>

        {props.onCloseClick &&
          <span
            className="absolute top-1 right-1"
            onClick={props.onCloseClick}
          >
            <Icon
              name="xmark"
              size={16}
              className={config.text}
            />
          </span>
        }

        {(props.autoClose && props.indicator) &&
          <div
            className="absolute w-full h-0.5 bg-white left-0 bottom-0 animate-empty"
            style={{ animationDuration: `${duration}ms` }}
          />
        }
      </IconField>
    </div >
  )

  return ((visible && props.position) ?
    createPortal(Component, document.body) :
    Component
  )
}