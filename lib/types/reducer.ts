export interface Action<T> {
  type: keyof T | 'reset' | 'update',
  payload?: any;
}

export type Dispatch<T> = (key: keyof T | 'reset' | 'update', payload?: any) => void;