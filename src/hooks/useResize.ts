import { useEffect, useState } from "react";

export const useResize = () => {
  const breakPoint = 765;

  const [isPhone, setIsPhone] = useState<boolean>(true);

  const handleResize = () => {
    window.innerWidth < breakPoint ? setIsPhone(true) : setIsPhone(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return isPhone;
};
