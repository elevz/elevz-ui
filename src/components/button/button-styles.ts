import theme from "../../theme";
import { CustomProps, SizePropsType, SizeType } from "./button-types";

export function getApperance(props: CustomProps) {
  const scheme = theme.colors[props.scheme!];
  const background = typeof scheme === 'object' ? scheme.background : scheme;
  const text = typeof scheme === 'object' ? scheme.text : theme.colors.text_primary_contrast;
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
      color: ${scheme};
      &:hover {
        background-color: color-mix(in srgb, ${background} 25%, transparent);
      }
    `;
  }
  if (props.variant === 'highlight') {
    return `
      background-color: ${theme.colors.surface};
      ${border}
      color: ${scheme};
      &:hover {
        background-color: ${background};
        color: ${text};
      }
    `;
  }
  return `
    ${border}
    background-color: transparent;
    color: ${scheme};
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