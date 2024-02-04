import { useContext } from "react";
import { ToastContext, ToastContextProps } from "../context/ToastContext";

type UseToastProps = ToastContextProps['show'] & {
  remove: ToastContextProps['remove'];
  update: ToastContextProps['update']
}

export default function useToast(): UseToastProps {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be inside an ElevzProvider');
  }

  let fn: any = context.show;
  fn.remove = context.remove;
  fn.update = context.update;

  return fn;
}