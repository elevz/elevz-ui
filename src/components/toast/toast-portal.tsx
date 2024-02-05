import styled from "styled-components";
import ReactDOM from "react-dom";
import React, { ReactNode } from "react";
import theme from "../../theme";

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

const positions: Record<ToastPosition, string> = {
  'top-left': `
    top: 0;
    left: 0;
  `,
  'top-center': `
    top: 0;
    align-self: center;
  `,
  'top-right': `
    top: 0; 
    right: 0;
  `,
  'bottom-left': `
    bottom: 0;
    left: 0;
  `,
  'bottom-center': `
    bottom: 0;
    align-self: center;
  `,
  'bottom-right': `
    bottom: 0;
    right: 0;
  `,
}

const ToastPortal = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export default function (props: { children?: ReactNode }) {
  return ReactDOM.createPortal((
    <ToastPortal>
      {props.children}
    </ToastPortal>
  ), document.body);
}

export const ToastContainer = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !['position'].includes(prop)
}) <{ position: ToastPosition }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: ${theme.spaces.md};
  padding: ${theme.spaces.md};
  max-height: 100%;
  ${(props) => positions[props.position]}
`;

