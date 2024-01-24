import { PropsObject } from "../types";
import { GridProps } from "./grid-types";

export const gridProps: PropsObject<GridProps> = {
  grid: {
    attribute: 'grid'
  },
  gridArea: {
    attribute: 'grid-area'
  },
  gridAutoColumns: {
    attribute: 'grid-auto-columns'
  },
  gridAutoFlow: {
    attribute: 'grid-auto-flow'
  },
  gridAutoRows: {
    attribute: 'grid-auto-rows'
  },
  gridColumn: {
    attribute: 'grid-column'
  },
  gridColumnEnd: {
    attribute: 'grid-column-end'
  },
  gridColumnStart: {
    attribute: 'grid-column-start'
  },
  gridRow: {
    attribute: 'grid-row'
  },
  gridRowEnd: {
    attribute: 'grid-row-end'
  },
  gridRowStart: {
    attribute: 'grid-row-start'
  },
  gridTemplate: {
    attribute: 'grid-template'
  },
  gridTemplateAreas: {
    attribute: 'grid-template-areas'
  },
  gridTemplateColumns: {
    attribute: 'grid-template-columns'
  },
  gridTemplateRows: {
    attribute: 'grid-template-rows'
  },
}