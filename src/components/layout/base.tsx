import styled from "styled-components";
import { parseAttributes } from "../../utils";
import { BaseProps } from "./base-types";
import { baseProps } from "./base-props";

export default styled.div.withConfig({
  shouldForwardProp: (prop: string) => !Object.keys(baseProps).includes(prop)
}) <BaseProps>`
  ${(props) => parseAttributes(baseProps, props)}
`;