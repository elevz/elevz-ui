import { Action, Dispatch } from "@lib/types";
import { useReducer } from "react";

export function useCreateReducer<T extends Record<string, any>>(initialState?: Partial<T>): [T, Dispatch<T>] {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: any, action: Action<T>) {
    if (action.type === 'reset') {
      return initialState;
    }

    if (action.type === 'update') {
      return {
        ...state,
        ...action.payload
      };
    }

    return ({
      ...state,
      [action.type]: action.payload
    })
  }

  function actionDispatch(type: keyof T | 'reset' | 'update', payload?: any) {
    dispatch({ type, payload });
  }

  return [state, actionDispatch];
}