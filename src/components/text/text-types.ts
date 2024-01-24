import { CSSProperties } from "react";
import { BaseProps } from "../layout/base-types";

export interface CustomTextProps {
  /**
   * set font-weight value to bold
   * 
   * override weight prop
   */
  bold?: boolean;
  /**
   * font
   */
  font?: CSSProperties['font'];
  /**
   * font-style
   */
  fontStyle?: CSSProperties['fontStyle'];
  /**
   * font-family
   */
  family?: CSSProperties['fontFamily'];
  /**
   * font-feature-settings
   */
  featureSettings?: CSSProperties['fontFeatureSettings'];
  /**
   * font-kerning
   */
  kerning?: CSSProperties['fontKerning'];
  /**
   * font-language-override
   */
  languageOverride?: CSSProperties['fontLanguageOverride'];
  /**
   * font-optical-sizing
   */
  opticalSizing?: CSSProperties['fontOpticalSizing'];
  /**
   * font-palette
   */
  palette?: CSSProperties['fontPalette'];
  /**
   * font-size
   */
  size?: CSSProperties['fontSize'];
  /**
   * font-size-adjust
   */
  sizeAdjust?: CSSProperties['fontSizeAdjust'];
  /**
   * font-smooth
   */
  smooth?: CSSProperties['fontSmooth'];
  /**
   * font-stretch
   */
  stretch?: CSSProperties['fontStretch'];
  /**
   * font-synthesis
   */
  synthesis?: CSSProperties['fontSynthesis'];
  /**
   * font-synthesis-position
   */
  synthesisPosition?: CSSProperties['fontSynthesisPosition'];
  /**
   * font-synthesis-small-caps
   */
  synthesisSmallCaps?: CSSProperties['fontSynthesisSmallCaps'];
  /**
   * font-synthesis-style
   */
  synthesisStyle?: CSSProperties['fontSynthesisStyle'];
  /**
   * font-synthesis-weight
   */
  synthesisWeight?: CSSProperties['fontSynthesisWeight'];
  /**
   * font-variant
   */
  variant?: CSSProperties['fontVariant'];
  /**
   * font-variant-alternates
   */
  variantAlternates?: CSSProperties['fontVariantAlternates'];
  /**
   * font-variant-caps
   */
  variantCaps?: CSSProperties['fontVariantCaps'];
  /**
   * font-variant-east-asian
   */
  variantEastAsian?: CSSProperties['fontVariantEastAsian'];
  /**
   * font-variant-emoji
   */
  variantEmoji?: CSSProperties['fontVariantEmoji'];
  /**
   * font-variant-ligatures
   */
  variantLigatures?: CSSProperties['fontVariantLigatures'];
  /**
   * font-variant-numeric
   */
  variantNumeric?: CSSProperties['fontVariantNumeric'];
  /**
   * font-variant-position
   */
  variantPosition?: CSSProperties['fontVariantPosition'];
  /**
   * font-variation-settings
   */
  variationSettings?: CSSProperties['fontVariationSettings'];
  /**
   * font-weight
   */
  weight?: CSSProperties['fontWeight'];
}

export interface TextProps extends BaseProps, CustomTextProps { }