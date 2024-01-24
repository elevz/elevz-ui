import { PropsObject } from "../types";
import { CustomTextProps } from "./text-types";

export const textProps: PropsObject<CustomTextProps> = {
  font: {
    attribute: 'font',
  },
  fontStyle: {
    attribute: 'font-style',
  },
  family: {
    attribute: 'font-family',
  },
  featureSettings: {
    attribute: 'font-feature-settings',
  },
  kerning: {
    attribute: 'font-kerning',
  },
  languageOverride: {
    attribute: 'font-language-override',
  },
  opticalSizing: {
    attribute: 'font-optical-sizing',
  },
  palette: {
    attribute: 'font-palette',
  },
  size: {
    attribute: 'font-size',
    type: 'px'
  },
  sizeAdjust: {
    attribute: 'font-size-adjust',
  },
  smooth: {
    attribute: 'font-smooth',
  },
  stretch: {
    attribute: 'font-stretch',
  },
  synthesis: {
    attribute: 'font-synthesis',
  },
  synthesisPosition: {
    attribute: 'font-synthesis-position',
  },
  synthesisSmallCaps: {
    attribute: 'font-synthesis-small-caps',
  },
  synthesisStyle: {
    attribute: 'font-synthesis-style',
  },
  synthesisWeight: {
    attribute: 'font-synthesis-weight',
  },
  variant: {
    attribute: 'font-variant',
  },
  variantAlternates: {
    attribute: 'font-variant-alternates',
  },
  variantCaps: {
    attribute: 'font-variant-caps',
  },
  variantEastAsian: {
    attribute: 'font-variant-east-asian',
  },
  variantEmoji: {
    attribute: 'font-variant-emoji',
  },
  variantLigatures: {
    attribute: 'font-variant-ligatures',
  },
  variantNumeric: {
    attribute: 'font-variant-numeric',
  },
  variantPosition: {
    attribute: 'font-variant-position',
  },
  variationSettings: {
    attribute: 'font-variation-settings',
  },
  weight: {
    attribute: 'font-weight',
  },
  bold: {
    attribute: 'font-weight',
    value: 'bold'
  }
}