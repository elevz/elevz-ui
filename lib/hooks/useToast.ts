import { ToastContext } from "@lib/context";
import { useContext } from "react";

export function useToast(){
  const context = useContext(ToastContext);

  if(!context){
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context.show;
}