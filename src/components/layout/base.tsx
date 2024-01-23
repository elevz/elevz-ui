import styled from "styled-components";
import { BaseProps } from "./base-types";
import { attributeCSS } from "../../utils";

export const baseAttributes = (props: BaseProps): string => `
  ${attributeCSS('border', props.border)}
  ${attributeCSS('border-block', props.borderBlock)}
  ${attributeCSS('border-block-color', props.borderBlockColor)}
  ${attributeCSS('border-block-end', props.borderBlockEnd)}
  ${attributeCSS('border-block-end-color', props.borderBlockEndColor)}
  ${attributeCSS('border-block-end-style', props.borderBlockEndStyle)}
  ${attributeCSS('border-block-end-width', props.borderBlockEndWidth)}
  ${attributeCSS('border-block-start', props.borderBlockStart)}
  ${attributeCSS('border-block-start-color', props.borderBlockStartColor)}
  ${attributeCSS('border-block-start-style', props.borderBlockStartStyle)}
  ${attributeCSS('border-block-start-width', props.borderBlockStartWidth)}
  ${attributeCSS('border-block-style', props.borderBlockStyle)}
  ${attributeCSS('border-block-width', props.borderBlockWidth)}
  ${attributeCSS('border-bottom', props.borderBottom)}
  ${attributeCSS('border-bottom-color', props.borderBottomColor)}
  ${attributeCSS('border-bottom-left-radius', props.borderBottomLeftRadius)}
  ${attributeCSS('border-bottom-right-radius', props.borderBottomRightRadius)}
  ${attributeCSS('border-bottom-style', props.borderBottomStyle)}
  ${attributeCSS('border-bottom-width', props.borderBottomWidth)}
  ${attributeCSS('border-collapse', props.borderCollapse)}
  ${attributeCSS('border-color', props.borderColor)}
  ${attributeCSS('border-end-end-radius', props.borderEndEndRadius)}
  ${attributeCSS('border-end-start-radius', props.borderEndStartRadius)}
  ${attributeCSS('border-image', props.borderImage)}
  ${attributeCSS('border-image-outset', props.borderImageOutset)}
  ${attributeCSS('border-image-repeat', props.borderImageRepeat)}
  ${attributeCSS('border-image-slice', props.borderImageSlice)}
  ${attributeCSS('border-image-source', props.borderImageSource)}
  ${attributeCSS('border-image-width', props.borderImageWidth)}
  ${attributeCSS('border-inline', props.borderInline)}
  ${attributeCSS('border-inline-color', props.borderInlineColor)}
  ${attributeCSS('border-inline-end', props.borderInlineEnd)}
  ${attributeCSS('border-inline-end-color', props.borderInlineEndColor)}
  ${attributeCSS('border-inline-end-style', props.borderInlineEndStyle)}
  ${attributeCSS('border-inline-end-width', props.borderInlineEndWidth)}
  ${attributeCSS('border-inline-start', props.borderInlineStart)}
  ${attributeCSS('border-inline-start-color', props.borderInlineStartColor)}
  ${attributeCSS('border-inline-start-style', props.borderInlineStartStyle)}
  ${attributeCSS('border-inline-start-width', props.borderInlineStartWidth)}
  ${attributeCSS('border-inline-style', props.borderInlineStyle)}
  ${attributeCSS('border-inline-width', props.borderInlineWidth)}
  ${attributeCSS('border-left', props.borderLeft)}
  ${attributeCSS('border-left-color', props.borderLeftColor)}
  ${attributeCSS('border-left-style', props.borderLeftStyle)}
  ${attributeCSS('border-left-width', props.borderLeftWidth)}
  ${attributeCSS('border-radius', props.borderRadius)}
  ${attributeCSS('border-right', props.borderRight)}
  ${attributeCSS('border-right-color', props.borderRightColor)}
  ${attributeCSS('border-right-style', props.borderRightStyle)}
  ${attributeCSS('border-right-width', props.borderRightWidth)}
  ${attributeCSS('border-spacing', props.borderSpacing)}
  ${attributeCSS('border-start-end-radius', props.borderStartEndRadius)}
  ${attributeCSS('border-start-start-radius', props.borderStartStartRadius)}
  ${attributeCSS('border-style', props.borderStyle)}
  ${attributeCSS('border-top', props.borderTop)}
  ${attributeCSS('border-top-color', props.borderTopColor)}
  ${attributeCSS('border-top-left-radius', props.borderTopLeftRadius)}
  ${attributeCSS('border-top-right-radius', props.borderTopRightRadius)}
  ${attributeCSS('border-top-style', props.borderTopStyle)}
  ${attributeCSS('border-top-width', props.borderTopWidth)}
  ${attributeCSS('border-width', props.borderWidth)}
  ${attributeCSS('margin-bottom', props.marginBottom)}
  ${attributeCSS('margin-left', props.marginLeft)}
  ${attributeCSS('margin-top', props.marginTop)}
  ${attributeCSS('margin-right', props.marginRight)}
  ${attributeCSS('padding', props.padding)}
  ${attributeCSS('padding-block', props.paddingBlock)}
  ${attributeCSS('padding-bottom', props.paddingBottom)}
  ${attributeCSS('padding-inline', props.paddingInline)}
  ${attributeCSS('padding-left', props.paddingLeft)}
  ${attributeCSS('padding-right', props.paddingRight)}
  ${attributeCSS('padding-top', props.paddingTop)}
`;

export default styled.div<BaseProps>`
  ${(props) => `${baseAttributes(props)}`}
`;