import React, { FC, useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import { Slider, Switch, Input } from "./Toggle.style";

interface IToggle {
  clicked: (b: boolean) => void;
  width?: number;
  bgColorBefore?: string;
  bgColorAfter?: string;
  sliderColorBefore?: string;
  sliderColorAfter?: string;
}

export const Toggle: FC<IToggle> = ({
  clicked,
  width,
  bgColorBefore,
  bgColorAfter,
  sliderColorBefore,
  sliderColorAfter,
}) => {
  const { isSelected, toggle } = useToggle();

  useEffect(() => {
    clicked(isSelected);
  }, [isSelected]);

  return (
    <Switch
      width={width}
      bgColorBefore={bgColorBefore}
      bgColorAfter={bgColorAfter}
      sliderColorBefore={sliderColorBefore}
      sliderColorAfter={sliderColorAfter}
    >
      <Input type="checkbox" onClick={toggle} />
      <Slider />
    </Switch>
  );
};
