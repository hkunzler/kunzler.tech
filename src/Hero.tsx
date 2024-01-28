import styled from "styled-components";
import { Button, Flex, Typography } from "antd";
import chatGptLaptop from "./assets/chatGptLaptop.png";
import { useEffect, useState } from "react";
import { useParallaxEffect } from "./useParallaxEffect";
import { cta, heading, subheading } from "./constants/hero";

const { Title } = Typography;

const HeroContainer = styled(Flex)<{ offset: number; loaded: boolean }>`
  background-image: url(${chatGptLaptop});
  background-attachment: scroll;
  background-position: center ${({ offset }) => offset * 0.5}px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  text-align: center;
  transition: opacity 1s ease-out;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`;

const TextOverlay = styled(Flex)`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

const HeroHeading = styled(Title)`
  color: white !important;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

const HeroSubheading = styled(Title)`
  color: white !important;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
`;

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const offsetY = useParallaxEffect();

  useEffect(() => setIsLoaded(true), []);

  return (
    <HeroContainer
      loaded={isLoaded}
      id="home"
      align="center"
      justify="center"
      vertical
      offset={offsetY}
    >
      <TextOverlay align="center" justify="center" vertical>
        <HeroHeading level={1}>{heading}</HeroHeading>
        <HeroSubheading level={3}>{subheading}</HeroSubheading>
        <Button type="primary" href="/#services">
          {cta}
        </Button>
      </TextOverlay>
    </HeroContainer>
  );
};
