import { CSSProperties } from "react";

export interface GridProps {
  /**
   * grid
   */
  grid?: CSSProperties['grid'];
  /**
   * grid-area
   */
  gridArea?: CSSProperties['gridArea'];
  /**
   * grid-auto-columns
   */
  gridAutoColumns?: CSSProperties['gridAutoColumns'];
  /**
   * grid-auto-flow
   */
  gridAutoFlow?: CSSProperties['gridAutoFlow'];
  /**
   * grid-auto-rows
   */
  gridAutoRows?: CSSProperties['gridAutoRows'];
  /**
   * grid-column
   */
  gridColumn?: CSSProperties['gridColumn'];
  /**
   * grid-column-end
   */
  gridColumnEnd?: CSSProperties['gridColumnEnd'];
  /**
   * grid-column-start
   */
  gridColumnStart?: CSSProperties['gridColumnStart'];
  /**
   * grid-row
   */
  gridRow?: CSSProperties['gridRow'];
  /**
   * grid-row-end
   */
  gridRowEnd?: CSSProperties['gridRowEnd'];
  /**
   * grid-row-start
   */
  gridRowStart?: CSSProperties['gridRowStart'];
  /**
   * grid-template
   */
  gridTemplate?: CSSProperties['gridTemplate'];
  /**
   * grid-template-areas
   */
  gridTemplateAreas?: CSSProperties['gridTemplateAreas'];
  /**
   * grid-template-columns
   */
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
  /**
   * grid-template-rows
   */
  gridTemplateRows?: CSSProperties['gridTemplateRows'];
}