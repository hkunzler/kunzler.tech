import { useEffect, useState } from "react";
import { useParallaxEffect } from "../useParallaxEffect";
import { Hero } from "../Hero/Hero.view";

export const HeroContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const offsetY = useParallaxEffect();

  useEffect(() => setIsLoaded(true), []);

  return <Hero offsetY={offsetY} isLoaded={isLoaded} />;
};
