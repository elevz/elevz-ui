import { ToastContext } from "@lib/context/ToastContext";
import { useContext } from "react";

export default function useToast(){
  const context = useContext(ToastContext);

  if(!context){
    throw new Error();
  }

  return context.showToast;
}