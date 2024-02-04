import React, {
  ReactNode,
  useState
} from "react";
import {
  Toast,
  ToastPortal,
  ToastProps,
  ToastContainer,
  ToastPosition
} from "../components/toast";
import { generateUniqueId } from "../utils";

type Toast = ToastProps & {
  /**
   * toast position
   */
  position: ToastPosition;
  /**
   * time is ms
   * 
   * default 1000ms
   */
  duration?: number;
};

type ToastWithId = Toast & {
  id: string;
}

export interface ToastContextProps {
  show: (params: Toast) => ToastWithId;
  update: (id: string, params: ToastProps) => void;
  remove: (id: string) => void;
}

export const ToastContext = React.createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children?: ReactNode }> = (props) => {
  const [toastList, setToastList] = useState<ToastWithId[]>([]);

  const contextValues: ToastContextProps = {
    show: showToast,
    update: updateToast,
    remove: removeToastById,
  }

  function showToast(props: Toast): ToastWithId {
    const id = generateUniqueId();
    const toast = { ...props, id };

    setToastList((old: any[] = []) => {
      const arr = [...old];
      arr.push(toast);
      return arr;
    });

    if (!props.duration || (typeof props.duration === 'number' && props.duration > 0)) {
      setTimeout(() => {
        removeToast(toast);
      }, props.duration || 1000);
    }
    return toast;
  }

  function updateToast(id: string, props: ToastProps) {
    const index = toastList.findIndex((t) => t.id === id);

    if (index >= 0) {
      setToastList((old: any[]) => {
        const arr = [...old];
        arr[index] = { ...arr[index], ...props };
        return arr;
      })
    }
  }

  function removeToastById(id: string) {
    const toast = toastList.find((t) => t.id === id);

    if (toast) {
      removeToast(toast)
    }
  }

  function removeToast(toast: ToastWithId) {
    setToastList((old: any[]) => {
      const arr = old.filter((t) => t.id !== toast.id);
      return arr;
    })
  }

  function renderToast(list: ToastWithId[]) {
    const pos: Record<ToastPosition, ToastWithId[]> = {
      "top-left": [],
      "top-center": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-center": [],
      "bottom-right": []
    };

    list.forEach((item) => pos[item.position].push(item));

    return Object.keys(pos).map((key) => {
      const items = pos[key as keyof typeof pos];
      if (items.length === 0) {
        return null;
      }
      return (
        <ToastContainer key={key} position={key as any}>
          {items.map((props, i) =>
            <Toast key={i} {...props} />
          )}
        </ToastContainer>
      )

    });
  }

  return (
    <ToastContext.Provider value={contextValues}>
      <ToastPortal>
        {renderToast(toastList)}
      </ToastPortal>
      {props.children}
    </ToastContext.Provider>
  )
}