import { css, keyframes } from "styled-components";

export const dots = (size: number, color: string) => {
  const height = `${size * 0.5}px`;
  const middle = `${size * 0.34}px`;
  const colorLight = `color-mix(in srgb, ${color} 70%, transparent)`;
  const colorLighter = `color-mix(in srgb, ${color} 50%, transparent)`;
  const colorLightest = `color-mix(in srgb, ${color} 20%, transparent)`;

  const animation = keyframes`
    0% {
      box-shadow:
        0 ${height} 0 0 ${colorLight},
        -${middle} ${middle} 0 0 ${colorLight},
        -${height} 0 0 0 ${colorLight},
        -${middle} -${middle} 0 0 ${colorLight},
        0 -${height} 0 0 ${colorLight},
        ${middle} -${middle} 0 0 ${colorLighter},
        ${height} 0 0 0 ${colorLightest},
        ${middle} ${middle} 0 0 ${color};
    }
    12.5% {
      box-shadow: 
        0 ${height} 0 0 ${color},
        -${middle} ${middle} 0 0 ${colorLight},
        -${height} 0 0 0 ${colorLight},
        -${middle} -${middle} 0 0 ${colorLight},
        0 -${height} 0 0 ${colorLight},
        ${middle} -${middle} 0 0 ${colorLight},
        ${height} 0 0 0 ${colorLighter},
        ${middle} ${middle} 0 0 ${colorLightest};
    }
    25% {
      box-shadow: 
        0 ${height} 0 0 ${colorLightest},
        -${middle} ${middle} 0 0 ${color},
        -${height} 0 0 0 ${colorLight},
        -${middle} -${middle} 0 0 ${colorLight},
        0 -${height} 0 0 ${colorLight},
        ${middle} -${middle} 0 0 ${colorLight},
        ${height} 0 0 0 ${colorLight},
        ${middle} ${middle} 0 0 ${colorLighter};
    }
    37.5% {
      box-shadow: 
        0 ${height} 0 0 ${colorLighter},
        -${middle} ${middle} 0 0 ${colorLightest},
        -${height} 0 0 0 ${color},
        -${middle} -${middle} 0 0 ${colorLight},
        0 -${height} 0 0 ${colorLight},
        ${middle} -${middle} 0 0 ${colorLight},
        ${height} 0 0 0 ${colorLight},
        ${middle} ${middle} 0 0 ${colorLight};
    }
    50% {
      box-shadow: 
        0 ${height} 0 0 ${colorLight},
        -${middle} ${middle} 0 0 ${colorLighter},
        -${height} 0 0 0 ${colorLightest},
        -${middle} -${middle} 0 0 ${color},
        0 -${height} 0 0 ${colorLight},
        ${middle} -${middle} 0 0 ${colorLight},
        ${height} 0 0 0 ${colorLight},
        ${middle} ${middle} 0 0 ${colorLight};
    }
    62.5% {
      box-shadow: 
        0 ${height} 0 0 ${colorLight},
        -${middle} ${middle} 0 0 ${colorLight},
        -${height} 0 0 0 ${colorLighter},
        -${middle} -${middle} 0 0 ${colorLightest},
        0 -${height} 0 0 ${color},
        ${middle} -${middle} 0 0 ${colorLight},
        ${height} 0 0 0 ${colorLight},
        ${middle} ${middle} 0 0 ${colorLight};
    }
    75% {
      box-shadow: 
        0 ${height} 0 0 ${colorLight},
        -${middle} ${middle} 0 0 ${colorLight},
        -${height} 0 0 0 ${colorLight},
        -${middle} -${middle} 0 0 ${colorLighter},
        0 -${height} 0 0 ${colorLightest},
        ${middle} -${middle} 0 0 ${color},
        ${height} 0 0 0 ${colorLight},
        ${middle} ${middle} 0 0 ${colorLight};
    }
    87.5% {
      box-shadow: 
        0 ${height} 0 0 ${colorLight},
        -${middle} ${middle} 0 0 ${colorLight},
        -${height} 0 0 0 ${colorLight},
        -${middle} -${middle} 0 0 ${colorLight},
        0 -${height} 0 0 ${colorLighter},
        ${middle} -${middle} 0 0 ${colorLightest},
        ${height} 0 0 0 ${color},
        ${middle} ${middle} 0 0 ${colorLight};
    }
    100% {
      box-shadow:
        0 ${height} 0 0 ${colorLight},
        -${middle} ${middle} 0 0 ${colorLight},
        -${height} 0 0 0 ${colorLight},
        -${middle} -${middle} 0 0 ${colorLight},
        0 -${height} 0 0 ${colorLight},
        ${middle} -${middle} 0 0 ${colorLighter},
        ${height} 0 0 0 ${colorLightest},
        ${middle} ${middle} 0 0 ${color};
    }
  `

  return css`
    margin: ${size * 0.5}px;
    &::after {
      animation: 1.1s linear infinite ${animation};
      content: " ";
      border-radius: 50%;
      display: block;
      height: ${size * 0.25}px;
      width: ${size * 0.25}px;
    }
  `
}

export const dotsHorizontal = (size: number, color: string) => {
  const s = size * 0.5;
  const colorLight = `color-mix(in srgb, ${color} 20%, transparent)`

  const animation = keyframes`
    0%, 100% {
      background-color: ${colorLight};
      box-shadow: 
        -${s}px 0 0 ${colorLight},
        ${s}px 0 0 ${colorLight};
    }
    25% {
      background-color: ${colorLight};
      box-shadow: 
        -${s}px 0 0 ${color}, 
        ${s}px 0 0 ${colorLight};
    }
    50% {
      background-color: ${color};
      box-shadow: 
        -${s}px 0 0 ${color}, 
        ${s}px 0 0 ${colorLight};
    }
    75% {
      background-color: ${color};
      box-shadow: 
        -${s}px 0 0 ${color}, 
        ${s}px 0 0 ${color};
    }
  `

  return css`
    margin: ${size / 2}px;
    &::after {
      animation: .8s ease infinite ${animation};
      content: " ";
      border-radius: 50%;
      display: block;
      height: ${size * 0.25}px;
      width: ${size * 0.25}px;
    }
  `
}

export const rotation = (size: number, color: string) => {
  const animation = keyframes`
    0% {
      rotate: 0deg;
    }

    100% {
      rotate: 360deg;
    }
  `;
  return css`
    animation: 1s linear infinite ${animation};
    border: 2px solid ${color};
    border-bottom-color: transparent;
    height: ${size}px;
    width: ${size}px;
  `
}