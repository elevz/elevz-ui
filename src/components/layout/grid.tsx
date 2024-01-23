import styled, { CSSProperties } from "styled-components";
import { attributeCSS } from "../../utils";
import base from "./base";

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

export const Grid = styled(base) <GridProps>`
  display: grid;
  ${(props) => `
    ${attributeCSS('grid', props.grid)}
    ${attributeCSS('grid-area', props.gridArea)}
    ${attributeCSS('grid-auto-columns', props.gridAutoColumns)}
    ${attributeCSS('grid-auto-flow', props.gridAutoFlow)}
    ${attributeCSS('grid-auto-rows', props.gridAutoRows)}
    ${attributeCSS('grid-column', props.gridColumn)}
    ${attributeCSS('grid-column-end', props.gridColumnEnd)}
    ${attributeCSS('grid-column-start', props.gridColumnStart)}
    ${attributeCSS('grid-row', props.gridRow)}
    ${attributeCSS('grid-row-end', props.gridRowEnd)}
    ${attributeCSS('grid-row-start', props.gridRowStart)}
    ${attributeCSS('grid-template', props.gridTemplate)}
    ${attributeCSS('grid-template-areas', props.gridTemplateAreas)}
    ${attributeCSS('grid-template-columns', props.gridTemplateColumns)}
    ${attributeCSS('grid-template-rows', props.gridTemplateRows)}
  `}
`;