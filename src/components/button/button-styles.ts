import theme from "../../theme";
import {
  CustomProps,
  SizePropsType,
  SizeType
} from "./button-types";

export function getColors(props: CustomProps) {
  const scheme = theme.colors[props.scheme!];

  return {
    background: typeof scheme === 'object' ? scheme.background : scheme,
    text: typeof scheme === 'object' ? scheme.text : theme.colors.text_primary_contrast
  }
}

export function getApperance(props: CustomProps) {
  const { background, text } = getColors(props);
  const border = `border: 1px solid ${background};`

  if (props.variant === 'solid') {
    return `
      background-color: ${background};
      ${border}
      color: ${text};
      &:hover {
        box-shadow: 2px 2px 8px color-mix(in srgb, ${background} 60%, transparent);
      }
    `;
  }
  if (props.variant === 'ghost') {
    return `
      background-color: transparent;
      border: transparent;
      color: ${background};
      &:hover {
        background-color: color-mix(in srgb, ${background} 25%, transparent);
      }
    `;
  }
  if (props.variant === 'highlight') {
    return `
      background-color: transparent;
      ${border}
      color: ${background};
      &:hover {
        background-color: ${background};
        color: ${text};
      }
    `;
  }
  return `
    ${border}
    background-color: transparent;
    color: ${background};
  `;
}

export const sizeMap: Record<SizeType, SizePropsType> = {
  xs: {
    fontSize: theme.fontSizes.caption,
    height: theme.sizes.height_xs,
    minWidth: '4rem',
    padding: theme.sizes.space_xs
  },
  sm: {
    fontSize: theme.fontSizes.body,
    height: theme.sizes.height_sm,
    minWidth: '4rem',
    padding: theme.sizes.space_sm,
  },
  md: {
    fontSize: theme.fontSizes.body,
    height: theme.sizes.height_md,
    minWidth: '4rem',
    padding: theme.sizes.space_md,
  }
}

export function getSize(props: CustomProps) {
  return `
    font-size: ${sizeMap[props.size!].fontSize};
    height: ${sizeMap[props.size!].height};
    padding-inline: ${sizeMap[props.size!].padding};
  `
}