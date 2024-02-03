import { CSSProperties } from "react";

export interface BaseProps extends
  AlignProps,
  BorderProps,
  FlexProps,
  GridProps,
  JustifyProps,
  MarginProps,
  PaddinProps,
  SizeProps { }

interface AlignProps {
  /**
   * alignContent
   */
  alignContent?: CSSProperties['alignContent'];
  /**
   * alignItems
   */
  alignItems?: CSSProperties['alignItems'];
  /**
   * alignSelf
   */
  alignSelf?: CSSProperties['alignSelf'];
  /**
   * alignTracks
   */
  alignTracks?: CSSProperties['alignTracks'];
}

interface BorderProps {
  /**
   * border
   */
  border?: CSSProperties['border'];
  /**
   * border-block
   */
  borderBlock?: CSSProperties['borderBlock'];
  /**
   * border-block-color
   */
  borderBlockColor?: CSSProperties['borderBlockColor'];
  /**
   * border-block-style
   */
  borderBlockStyle?: CSSProperties['borderBlockStyle'];
  /**
   * border-block-width
   */
  borderBlockWidth?: CSSProperties['borderBlockWidth'];
  /**
   * border-bottom
   */
  borderBottom?: CSSProperties['borderBottom'];
  /**
   * border-bottom-color
   */
  borderBottomColor?: CSSProperties['borderBottomColor'];
  /**
   * border-bottom-style
   */
  borderBottomStyle?: CSSProperties['borderBottomStyle'];
  /**
   * border-bottom-width
   */
  borderBottomWidth?: CSSProperties['borderBottomWidth'];
  /**
   * border-color
   */
  borderColor?: CSSProperties['borderColor'];
  /**
   * border-inline
   */
  borderInline?: CSSProperties['borderInline'];
  /**
   * border-inline-color
   */
  borderInlineColor?: CSSProperties['borderInlineColor'];
  /**
   * border-inline-style
   */
  borderInlineStyle?: CSSProperties['borderInlineStyle'];
  /**
   * border-inline-width
   */
  borderInlineWidth?: CSSProperties['borderInlineWidth'];
  /**
   * border-left
   */
  borderLeft?: CSSProperties['borderLeft'];
  /**
   * border-left-color
   */
  borderLeftColor?: CSSProperties['borderLeftColor'];
  /**
   * border-left-style
   */
  borderLeftStyle?: CSSProperties['borderLeftStyle'];
  /**
   * border-left-width
   */
  borderLeftWidth?: CSSProperties['borderLeftWidth'];
  /**
   * border-radius
   */
  borderRadius?: CSSProperties['borderRadius'];
  /**
   * border-top
   */
  borderTop?: CSSProperties['borderTop'];
  /**
   * border-top-color
   */
  borderTopColor?: CSSProperties['borderTopColor'];
  /**
   * border-top-style
   */
  borderTopStyle?: CSSProperties['borderTopStyle'];
  /**
   * border-top-width
   */
  borderTopWidth?: CSSProperties['borderTopWidth'];
  /**
   * border-style
   */
  borderStyle?: CSSProperties['borderStyle'];
  /**
   * border-width
   */
  borderWidth?: CSSProperties['borderWidth'];
}

interface FlexProps {
  /**
   * flex
   */
  flex?: CSSProperties['flex'];
  /**
   * flex-basis
   */
  flexBasis?: CSSProperties['flexBasis'];
  /**
   * flex-direction
   */
  flexDirection?: CSSProperties['flexDirection'];
  /**
   * flex-flow
   */
  flexFlow?: CSSProperties['flexFlow'];
  /**
   * flex-grow
   */
  flexGrow?: CSSProperties['flexGrow'];
  /**
   * flex-shrink
   */
  flexShrink?: CSSProperties['flexShrink'];
  /**
   * flex-wrap
   */
  flexWrap?: CSSProperties['flexWrap'];
}

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

interface JustifyProps {
  /**
  * justify-content
  */
  justifyContent?: CSSProperties['justifyContent'];
  /**
   * justify-items
   */
  justifyItems?: CSSProperties['justifyItems'];
  /**
   * justify-self
   */
  justifySelf?: CSSProperties['justifySelf'];
  /**
   * justify-tracks
   */
  justifyTracks?: CSSProperties['justifyTracks'];
}

interface MarginProps {
  /**
     * margin
     */
  margin?: CSSProperties['margin'];
  /**
   * margin-block
   */
  marginBlock?: CSSProperties['marginBlock'];
  /**
   * margin-bottom
   */
  marginBottom?: CSSProperties['marginBottom'];
  /**
   * margin-inline
   */
  marginInline?: CSSProperties['marginInline'];
  /**
   * margin-left
   */
  marginLeft?: CSSProperties['marginLeft'];
  /**
   * margin-right
   */
  marginRight?: CSSProperties['marginRight'];
  /**
   * margin-top
   */
  marginTop?: CSSProperties['marginTop'];
}

interface PaddinProps {
  /**
   * padding
   */
  padding?: CSSProperties['padding'];
  /**
   * padding-block
   */
  paddingBlock?: CSSProperties['paddingBlock'];
  /**
   * padding-bottom
   */
  paddingBottom?: CSSProperties['paddingBottom'];
  /**
   * padding-inline
   */
  paddingInline?: CSSProperties['paddingInline'];
  /**
   * padding-left
   */
  paddingLeft?: CSSProperties['paddingLeft'];
  /**
   * padding-right
   */
  paddingRight?: CSSProperties['paddingRight'];
  /**
   * padding-top
   */
  paddingTop?: CSSProperties['paddingTop'];
}

interface SizeProps {
  /**
   * height
   */
  height?: CSSProperties['height'];
  /**
   * max-height
   */
  maxHeight?: CSSProperties['maxHeight'];
  /**
   * min-height
   */
  minHeight?: CSSProperties['minHeight'];
  /**
   * width
   */
  width?: CSSProperties['width'];
  /**
   * max-width
   */
  maxWidth?: CSSProperties['maxWidth'];
  /**
   * min-width
   */
  minWidth?: CSSProperties['minWidth'];
  /**
   * gap
   */
  gap?: CSSProperties['gap'];
  /**
   * row-gap
   */
  rowGap?: CSSProperties['rowGap'];
  /**
   * column-gap
   */
  columnGap?: CSSProperties['columnGap'];
}