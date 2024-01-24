import { CSSProperties } from "react";

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