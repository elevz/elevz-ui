import React from "react";
import styled from "styled-components"
import theme from "../../theme";
import {
  ButtonProps,
  CustomProps
} from "./button-types";
import { getApperance, getSize } from "./button-styles";

const StyledButton = styled.button<CustomProps>`
  border-radius: ${theme.sizes.border_radius};
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  padding-inline: ${theme.sizes.space_md};

  ${(props) => getApperance(props)}
  ${(props) => getSize(props)}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  scheme = 'primary',
  size = 'md',
  variant = 'solid',
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      scheme={scheme}
      size={size}
      variant={variant}
    >
      {children}
    </StyledButton>
  )
}

export default Button;