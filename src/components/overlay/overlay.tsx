import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export interface OverlayProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  onBackdropClick?: React.MouseEventHandler<HTMLDivElement>;
  visible?: boolean;
}

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 9999;
`;

const Backdrop = styled.div`
  background-color: #00000060;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

export default function ({
  children,
  visible,
  onBackdropClick,
  ...props
}: OverlayProps) {
  return visible ?
    ReactDOM.createPortal((
      <Overlay {...props}>
        <Backdrop onClick={onBackdropClick} />
        {children}
      </Overlay>
    ), document.body)
    : null
}