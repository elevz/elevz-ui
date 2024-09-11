import { createContext, PropsWithChildren, useState } from "react";
import { Toast, ToastPosition, ToastProps } from "@lib/components";
import { combineClassName, generateId } from "@lib/utils";
import { createPortal } from "react-dom";
import { getPosition } from "@lib/components/feedback/toast/styles";

interface ToastFnProps extends Omit<ToastProps, 'autoClose'> { }

type ToastParams = Omit<ToastFnProps, 'id' | 'visible'>;

type ToastSchemeProps = (message: string, props?: Omit<ToastParams, 'message' | 'scheme'>) => void;

export interface ToastContextProps {
  show: {
    (props: ToastParams): void;
    success: ToastSchemeProps;
    danger: ToastSchemeProps;
  }
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = (props: PropsWithChildren) => {
  const [toastList, setToastList] = useState<Record<ToastPosition, ToastFnProps[]>>();

  function addToast({ position = 'top-center', ...props }: ToastParams) {
    let id = generateId();

    const item: ToastProps = {
      scheme: 'success',
      ...props,
      id,
      autoClose: true,
      onClose: () => removeToast(position, id),
      visible: true
    }

    setToastList((prev: any) => {
      const list = { ...(prev || {}) };

      if (typeof list[position] !== 'object') {
        list[position] = [];
      }

      if (list[position].find((elm: ToastFnProps) => elm.id === id)) {
        return list;
      }

      list[position].push(item);

      return list;
    })
  }

  const show = Object.assign(addToast, {
    success: (message: string, props?: ToastParams) => {
      addToast({
        ...props,
        scheme: 'success',
        message,
      })
    },
    danger: (message: string, props?: ToastParams) => {
      addToast({
        ...props,
        scheme: 'danger',
        message,
      })
    }
  })

  function removeToast(position: ToastPosition, id: string) {
    setToastList((prev: any) => {
      const list = { ...prev };

      if (typeof list[position] !== 'object') {
        return list;
      }

      const index = list[position].findIndex((elm: ToastFnProps) => elm.id === id);
      if (index !== -1) {
        list[position].splice(index, 1);
      }

      if (list[position].length === 0) {
        delete list[position];
      }

      return list;
    });
  }

  return (
    <ToastContext.Provider value={{ show }}>
      {props.children}
      {createPortal(
        <>
          {toastList && Object.entries(toastList).map(([position, toasts], i) =>
            <div
              key={i}
              className={combineClassName(
                getPosition(position as ToastPosition),
                'flex gap-2 z-50',
                position.includes('top') ? 'flex-col-reverse' : 'flex-col'
              )}
            >
              {toasts.map((props) =>
                <Toast key={props.id} {...props} />
              )}
            </div>
          )}
        </>,
        document.body)
      }
    </ToastContext.Provider>
  )
}