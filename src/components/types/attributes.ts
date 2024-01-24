type ObjectType = {
  attribute: string;
  prop?: string;
  type?: string;
  value?: string;
}

export type PropsObject<T> = Record<keyof T, ObjectType>;