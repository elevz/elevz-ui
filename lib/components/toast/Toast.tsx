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
  shadow = true,
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
      <div
        className={combineClassName(
          "ez-relative ez-flex ez-items-center ez-rounded-md ez-px-2 ez-gap-2 ez-w-60 ez-h-11 ez-shadow-lg ez-overflow-hidden",
          config.container,
          [shadow, config.shadow]
        )}
      >
        {(config.icon || leftIcon) &&
          <Icon
            name={(config.icon || leftIcon)!}
            className={config.text}
            size={20}
          />
        }

        <p className={combineClassName('ez-text-sm', config.text)}>
          {message}
        </p>

        {rightIcon &&
          <Icon
            name={rightIcon}
            className={config.text}
            size={20}
          />
        }

        {(props.autoClose && props.indicator) &&
          <div
            className="ez-absolute ez-w-full ez-h-0.5 ez-bg-white ez-left-0 ez-bottom-0 ez-animate-empty"
            style={{ animationDuration: `${duration}ms` }}
          />
        }

        {props.onCloseClick &&
          <span
            className="ez-absolute ez-top-1 ez-right-1"
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
    </div>
  )

  return (visible ?
    props.position ? createPortal(Component, document.body) : Component
    :
    null
  )
}