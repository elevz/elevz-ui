import styled from "styled-components";
import base from "./base";
import { parseAttributes } from "../../utils";
import { FlexProps } from "./flex-types";
import { flexProps } from "./flex-props";

export const Flex = styled(base) <FlexProps>`
  display: flex;
  ${(props) => parseAttributes(flexProps, props)}
`;