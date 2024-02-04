import { PropsObject } from "../types";
import { GridProps } from "./grid-types";

export const gridProps: PropsObject<GridProps> = {
  grid: {
    attribute: 'grid'
  },
  area: {
    attribute: 'area'
  },
  autoColumns: {
    attribute: 'auto-columns'
  },
  autoFlow: {
    attribute: 'auto-flow'
  },
  autoRows: {
    attribute: 'auto-rows'
  },
  column: {
    attribute: 'column'
  },
  columnEnd: {
    attribute: 'column-end'
  },
  columnStart: {
    attribute: 'column-start'
  },
  row: {
    attribute: 'row'
  },
  rowEnd: {
    attribute: 'row-end'
  },
  rowStart: {
    attribute: 'row-start'
  },
  template: {
    attribute: 'template'
  },
  templateAreas: {
    attribute: 'template-areas'
  },
  templateColumns: {
    attribute: 'template-columns'
  },
  templateRows: {
    attribute: 'template-rows'
  },
}