import { createContext, PropsWithChildren, useState } from "react";
import { Toast, ToastPosition, ToastProps } from "@lib/components";
import { combineClassName, generateId } from "@lib/utils";
import { createPortal } from "react-dom";
import { getPosition } from "@lib/components/feedback/toast/styles";

export interface IToast extends Omit<ToastProps, 'autoClose'> { }

export interface ToastContextProps {
  showToast: (props: IToast) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = (props: PropsWithChildren) => {
  const [toastList, setToastList] = useState<Record<ToastPosition, IToast[]>>();

  const toastValue: ToastContextProps = {
    showToast: addToast
  }

  function addToast({ position = 'top-center', ...props }: IToast) {
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

      if (list[position].find((elm: IToast) => elm.id === id)) {
        return list;
      }

      list[position].push(item);

      return list;
    })
  }

  function removeToast(position: ToastPosition, id: string) {
    setToastList((prev: any) => {
      const list = { ...prev };

      if (typeof list[position] !== 'object') {
        return list;
      }

      const index = list[position].findIndex((elm: IToast) => elm.id === id);
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
    <ToastContext.Provider value={toastValue}>
      {props.children}
      {createPortal(
        <>
          {toastList && Object.entries(toastList).map(([position, toasts], i) =>
            <div
              key={i}
              className={combineClassName(
                getPosition(position as ToastPosition),
                'ez-flex ez-gap-2 ez-z-50',
                position.includes('top') ? 'ez-flex-col-reverse' : 'ez-flex-col'
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