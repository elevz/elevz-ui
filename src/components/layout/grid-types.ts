import { CSSProperties } from "react";

export interface GridProps {
  /**
   * grid
   */
  grid?: CSSProperties['grid'];
  /**
   * grid-area
   */
  area?: CSSProperties['gridArea'];
  /**
   * grid-auto-columns
   */
  autoColumns?: CSSProperties['gridAutoColumns'];
  /**
   * grid-auto-flow
   */
  autoFlow?: CSSProperties['gridAutoFlow'];
  /**
   * grid-auto-rows
   */
  autoRows?: CSSProperties['gridAutoRows'];
  /**
   * grid-column
   */
  column?: CSSProperties['gridColumn'];
  /**
   * grid-column-end
   */
  columnEnd?: CSSProperties['gridColumnEnd'];
  /**
   * grid-column-start
   */
  columnStart?: CSSProperties['gridColumnStart'];
  /**
   * grid-row
   */
  row?: CSSProperties['gridRow'];
  /**
   * grid-row-end
   */
  rowEnd?: CSSProperties['gridRowEnd'];
  /**
   * grid-row-start
   */
  rowStart?: CSSProperties['gridRowStart'];
  /**
   * grid-template
   */
  template?: CSSProperties['gridTemplate'];
  /**
   * grid-template-areas
   */
  templateAreas?: CSSProperties['gridTemplateAreas'];
  /**
   * grid-template-columns
   */
  templateColumns?: CSSProperties['gridTemplateColumns'];
  /**
   * grid-template-rows
   */
  templateRows?: CSSProperties['gridTemplateRows'];
}