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
  grow: {
    attribute: 'flex-grow',
  },
  justify: {
    attribute: 'justify-content',
  },
  shrink: {
    attribute: 'flex-shrink',
  },
  wrap: {
    attribute: 'flex-wrap',
  },
}