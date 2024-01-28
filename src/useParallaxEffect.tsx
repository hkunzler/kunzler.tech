import { useEffect, useState } from "react";

export const useParallaxEffect = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setOffsetY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offsetY;
};
