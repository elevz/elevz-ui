import React, { useEffect, useState } from "react";
import Icon from "elevz-icon";
import { combineClassName } from "@lib/utils";
import { getPosition, stylesMap } from "./styles";
import { ToastProps } from "./types";
import { createPortal } from "react-dom";

export const Toast: React.FC<ToastProps> = ({
  leftIcon,
  rightIcon,
  scheme = 'success',
  duration = 2500,
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
      className={combineClassName(
        "flex items-center rounded-md px-2 gap-2 w-60 h-11 shadow-lg overflow-hidden",
        config.container,
        [props.position, getPosition(props.position!)]
      )}
    >
      {(config.icon || leftIcon) &&
        <Icon
          name={(config.icon || leftIcon)!}
          className={config.text}
          size={20}
        />
      }

      <p className={combineClassName('text-sm', config.text)}>
        {message}
      </p>

      {rightIcon &&
        <Icon
          name={rightIcon}
          className={config.text}
          size={20}
        />
      }

      {(props.autoClose && props.indicator ) &&
        <div
          className="absolute w-full h-0.5 bg-white left-0 bottom-0 animate-empty"
          style={{ animationDuration: `${duration}ms` }}
        />
      }

      {props.onCloseClick &&
        <span
          className="absolute top-1 right-1"
          onClick={props.onCloseClick}
        >
          <Icon
            name="circle-xmark"
            size={16}
            className={config.text}
          />
        </span>
      }
    </div>
  )

  return (visible ?
    props.position ? createPortal(Component, document.body) : Component
    :
    null
  )
}