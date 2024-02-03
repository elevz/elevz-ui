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
   * flex-grow
   */
  grow?: CSSProperties['flexGrow'];
  /**
   * 
   */
  justify?: CSSProperties['justifyContent'];
  /**
   * flex-shrink
   */
  shrink?: CSSProperties['flexShrink'];
  /**
   * flex-wrap
   */
  wrap?: CSSProperties['flexWrap'];
}