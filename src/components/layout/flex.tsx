import styled, { CSSProperties } from "styled-components";
import { attributeCSS } from "../../utils";
import base from "./base";

export interface FlexProps {
  /**
   * align-items
   */
  align?: CSSProperties['alignItems'];
  /**
   * flex
   */
  flex?: CSSProperties['flex'];
  /**
   * flex-basis
   */
  basis?: CSSProperties['flexBasis'];
  /**
   * flex-direction
   */
  direction?: CSSProperties['flexDirection'];
  /**
   * flex-flow
   */
  flow?: CSSProperties['flexFlow'];
  /**
   * gap
   */
  gap?: CSSProperties['gap'];
  /**
   * flex-grow
   */
  grow?: CSSProperties['flexGrow'];
  /**
   * flex-shrink
   */
  shrink?: CSSProperties['flexShrink'];
  /**
   * flex-wrap
   */
  wrap?: CSSProperties['flexWrap'];
}

export const Flex = styled(base) <FlexProps>`
  display: flex;
  ${(props) => `
    ${attributeCSS('align-items', props.align)}
    ${attributeCSS('flex', props.flex)}
    ${attributeCSS('flex-basis', props.basis)}
    ${attributeCSS('flex-direction', props.direction)}
    ${attributeCSS('flex-flow', props.flow)}
    ${attributeCSS('flex-grow', props.grow)}
    ${attributeCSS('flex-shrink', props.shrink)}
    ${attributeCSS('flex-wrap', props.wrap)}
    ${attributeCSS('gap', props.gap, 'px')}
  `}
`;