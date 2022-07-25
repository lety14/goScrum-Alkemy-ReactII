import styled from "styled-components";

interface IToggle {
  width?: number;
  bgColorBefore?: string;
  bgColorAfter?: string;
  sliderColorBefore?: string;
  sliderColorAfter?: string;
}

export const Switch = styled.label<IToggle>`
  // colors
  --bg-color-before: ${(props) =>
    props.bgColorBefore ? `${props.bgColorBefore}` : "#FFC5BE"};
  --bg-color-after: ${(props) =>
    props.bgColorAfter ? `${props.bgColorAfter}` : "#FFC5BE"};
  --slider-color-before: ${(props) =>
    props.sliderColorBefore ? `${props.sliderColorBefore}` : "#fff"};
  --slider-color-after: ${(props) =>
    props.sliderColorAfter ? `${props.sliderColorAfter}` : "#FF452B"};
  // sizes
  --width: ${(props) => (props.width ? `${props.width}px` : "60px")};
  --height: calc(var(--width) * 0.55);
  --circle-diameter: calc(var(--width) - var(--height));
  --circle-position: calc((var(--height) - var(--circle-diameter)) / 2);
  //
  position: relative;
  display: inline-block;
  width: var(--width);
  height: var(--height);
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-color-before);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: var(--circle-diameter);
    width: var(--circle-diameter);
    left: var(--circle-position);
    bottom: var(--circle-position);
    background-color: var(--slider-color-before);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    border-radius: 50%;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: var(--bg-color-after);
  }
  &:checked + ${Slider}::before {
    -webkit-transform: translateX(var(--circle-diameter));
    -ms-transform: translateX(var(--circle-diameter));
    transform: translateX(var(--circle-diameter));
    background-color: var(--slider-color-after);
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;
