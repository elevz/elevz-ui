import styled from "styled-components";
import base from "./base";
import { parseAttributes } from "../../utils";
import { GridProps } from "./grid-types";
import { gridProps } from "./grid-props";

export const Grid = styled(base) <GridProps>`
  display: grid;
  ${(props) => parseAttributes(gridProps, props)}
`;