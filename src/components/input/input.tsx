import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { getBgColor } from "../../utils";
import {
  Icon,
  IconName,
  IconProps
} from "../icon";

type SizeType = 'sm' | 'md';

export const sizeMap: Record<SizeType, {
  fontSize: string;
  height: string;
  padding: string;
}> = {
  sm: {
    fontSize: theme.fontSizes.caption,
    height: theme.sizes.height_sm,
    padding: theme.sizes.space_sm,
  },
  md: {
    fontSize: theme.fontSizes.body,
    height: theme.sizes.height_md,
    padding: theme.sizes.space_md,
  }
}

interface CustomProps {
  label?: string;
  helper?: string;
  leftIcon?: IconProps & {
    name: IconName;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  };

  rightIcon?: {
    name: IconName;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  };
  invalid?: boolean;
  invalidText?: string;
  size?: SizeType
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & CustomProps;

const Container = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  margin-block: ${theme.sizes.space_sm};

  & > label {
    font-size: ${theme.fontSizes.caption};
    padding-bottom: ${theme.sizes.space_xs};
    padding-left: ${theme.sizes.space_sm};
  }

  & > div  {
    display: flex;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.invalid ? getBgColor(theme.colors.danger) : theme.colors.border};
    border-radius: ${theme.sizes.border_radius};
    overflow: hidden;
    gap: ${(props) => sizeMap[props.size || 'md'].padding};
    padding-inline: ${(props) => sizeMap[props.size || 'md'].padding};
  }

  & div:has(input:focus) {
    outline-color: ${getBgColor(theme.colors.primary)};
    outline-offset: -2px;
    outline-style: solid;
    outline-width: 2px;
  }

  & input {
    border: none;
    font-size: ${(props) => sizeMap[props.size || 'md'].fontSize};
    height: ${(props) => sizeMap[props.size || 'md'].height};
    min-width: 4rem;
    outline-color: transparent;
    width: 100%;
  }

  & > span {
    color: ${(props) => props.invalid ? getBgColor(theme.colors.danger) : theme.colors.text_secondary};
    font-size: ${theme.fontSizes.caption};
    padding-left: ${theme.sizes.space_sm};
    padding-top: ${theme.sizes.space_xs};
  }
`;

const Input: React.FC<InputProps> = (props) => {
  return (
    <Container>
      {props.label &&
        <label>
          {props.label}
        </label>
      }

      <div>
        {props.leftIcon &&
          <div onClick={props.leftIcon.onClick}>
            <Icon
              name={props.leftIcon.name}
            />
          </div>
        }

        <input {...props} />

        {props.rightIcon &&
          <div onClick={props.rightIcon.onClick}>
            <Icon
              name={props.rightIcon.name}
            />
          </div>
        }
      </div>

      {(props.invalid && props.invalidText) ?
        <span>
          {props.invalidText}
        </span>
        :
        props.helper &&
        <span>
          {props.helper}
        </span>
      }
    </Container>
  );
}

export default Input;