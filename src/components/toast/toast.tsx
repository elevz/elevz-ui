import React from "react";
import styled from "styled-components"
import theme from "../../theme";
import { Icon } from "../icon";
import { getApperance } from "./toast-styles";
import { ToastProps } from "./toast-types";
import { Loader } from "../loading";
import { Text } from "../text";

const Toast = styled.div<{ type: ToastProps['type'] }>`
  display: flex;
  align-items: center;
  border-radius: ${theme.sizes.border_radius};
  gap: ${theme.spaces.md};
  padding: ${theme.spaces.md};
  min-height: 40px;
  min-width: 250px;

  ${props => getApperance(props.type)}
`;

export default (props: ToastProps) => (
  <Toast type={props.type || 'primary'}>
    {props.loading ?
      <Loader />
      :
      <Icon
        name={props.icon || 'plus'}
      />
    }
    <Text as="span" size={theme.fontSizes.body}>
      {props.message || 'Toast message'}
    </Text>
  </Toast>
)