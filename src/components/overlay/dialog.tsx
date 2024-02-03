import React from "react";
import styled, { keyframes } from "styled-components";
import Overlay, { OverlayProps } from "./overlay";
import theme from "../../theme";
import { Flex } from "../layout";
import { Button } from "../button";
import { ButtonProps } from "../button/button-types";

interface DialogProps extends OverlayProps {
  title: string;
  message?: string;
  cancelText?: string;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  cancelButton?: ButtonProps;
  confirmText?: string;
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
  confirmButton?: ButtonProps;
}

const slideFromTop = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(5vh);
  }
`

const Dialog = styled(Flex)`
  align-self: flex-start;
  animation: 0.3s ease ${slideFromTop} forwards;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.sizes.border_radius};
  padding: ${theme.spaces.xlg};
  min-width: 450px;

  & > header {
    font-weight: 600;
    font-size: ${theme.fontSizes.subtitle2};
  }

  & > div {
    font-weight: 400;
    font-size: ${theme.fontSizes.body};
  }
`;

export default ({
  title,
  message,
  cancelText,
  onCancel,
  confirmText,
  onConfirm,
  cancelButton,
  confirmButton,
  ...props
}: DialogProps) => (
  <Overlay {...props}>
    <Dialog flexDirection="column" gap={theme.spaces.xlg}>
      <Flex as="header">
        {title}
      </Flex>
      <Flex>
        {message}
      </Flex>
      <Flex as="footer" gap={theme.spaces.md} justify="flex-end">
        {onCancel &&
          <Button scheme="danger" onClick={onCancel} {...cancelButton}>
            {cancelText || 'Cancel'}
          </Button>
        }
        {onConfirm &&
          <Button scheme="success" onClick={onConfirm} {...confirmButton}>
            {confirmText || 'Confirm'}
          </Button>
        }
      </Flex>
    </Dialog>
  </Overlay>
);