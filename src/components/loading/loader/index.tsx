import styled from "styled-components";
import { dots, dotsHorizontal, rotation } from "./animations";

interface SpinnerProps {
  /**
   * 
   */
  color?: string;
  /**
   * 
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * animation duration
   */
  speed?: string;
  /**
   * 
   */
  type?: 'dots' | 'dots-horizontal'
}

const sizeMap = {
  sm: 16,
  md: 25,
  lg: 40,
}

export const Loader = styled.div<SpinnerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;

  ${props => {
    if (props.type === 'dots') {
      return dots(sizeMap[props.size || 'sm'], props.color || '#000')
    }
    if (props.type === 'dots-horizontal') {
      return dotsHorizontal(sizeMap[props.size || 'sm'], props.color || '#000')
    }
    return rotation(sizeMap[props.size || 'sm'], props.color || 'currentColor')
  }}
`