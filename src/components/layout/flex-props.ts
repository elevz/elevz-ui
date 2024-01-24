import { PropsObject } from "../types";
import { FlexProps } from "./flex-types";

export const flexProps: PropsObject<FlexProps> = {
  align: {
    attribute: 'align-items',
  },
  flex: {
    attribute: 'flex',
  },
  basis: {
    attribute: 'flex-basis',
  },
  direction: {
    attribute: 'flex-direction',
  },
  flow: {
    attribute: 'flex-flow',
  },
  gap: {
    attribute: 'gap',
    type: 'px'
  },
  grow: {
    attribute: 'flex-grow',
  },
  shrink: {
    attribute: 'flex-shrink',
  },
  wrap: {
    attribute: 'flex-wrap',
  },
}