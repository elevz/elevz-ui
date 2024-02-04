import theme from "../../theme";
import { ToastProps } from "./toast-types";

export function getApperance(type: ToastProps['type']) {
  const scheme = theme.colors[type!];

  const background = typeof scheme === 'object' ? scheme.background : scheme;
  const text = typeof scheme === 'object' ? scheme.text : theme.colors.text_primary_contrast

  return `
    background-color: ${background};
    color: ${text};
  `;
}