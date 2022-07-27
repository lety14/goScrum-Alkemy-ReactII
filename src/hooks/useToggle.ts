import { useState } from "react";

type UseToggleType = {
  isSelected: boolean;
  toggle: () => void;
};

const useToggle = (initialValue = false): UseToggleType => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((value) => !value);

  return { isSelected: value, toggle };
};

export default useToggle;
