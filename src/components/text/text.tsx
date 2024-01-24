import styled from "styled-components";
import { TextProps } from "./text-types";
import { parseAttributes } from "../../utils";
import { baseProps } from "../layout/base-props";
import { textProps } from "./text-props";

const propsObj = { ...baseProps, ...textProps }

export const Text = styled.p.withConfig({
  shouldForwardProp: (prop: string) => !Object.keys(propsObj).includes(prop)
}) <TextProps>`
  ${(props) => parseAttributes(propsObj, props)}
`;