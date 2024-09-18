import { createContext, PropsWithChildren } from "react";
import { Toast, ToastPosition, ToastProps } from "@lib/components";
import { combineClassName, generateId } from "@lib/utils";
import { createPortal } from "react-dom";
import { getPosition } from "@lib/components/feedback/toast/styles";
import { useCreateReducer } from "@lib/hooks";

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
  const [state, dispatch] = useCreateReducer<Record<ToastPosition, ToastFnProps[]>>({
    'bottom-center': [],
    'bottom-left': [],
    'bottom-right': [],
    'middle-center': [],
    'middle-left': [],
    'middle-right': [],
    'top-center': [],
    'top-left': [],
    'top-right': []
  });

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

    const arr = state[position];

    arr.push(item);

    dispatch(position, arr);
  }

  function removeToast(position: ToastPosition, id: string) {
    const list = state[position];

    const index = list.findIndex((elm: ToastFnProps) => elm.id === id);
    if (index !== -1) {
      list.splice(index, 1);
    }

    dispatch(position, list);
  }

  function show(props: ToastParams) {
    addToast(props);
  }

  function success(message: string, props?: ToastParams) {
    show({
      ...props,
      scheme: 'success',
      message,
    })
  }

  function danger(message: string, props?: ToastParams) {
    show({
      ...props,
      scheme: 'danger',
      message,
    })
  }

  return (
    <ToastContext.Provider value={{ show: Object.assign(show, { success, danger }) }}>
      {props.children}
      {createPortal(
        <>
          {Object.entries(state).map(([position, toasts], i) =>
            toasts.length > 0 ? <div
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
            </div> : null
          )}
        </>,
        document.body)
      }
    </ToastContext.Provider>
  )
}