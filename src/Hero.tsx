import styled from 'styled-components';
import { Button, Flex, Typography, Layout } from 'antd';
import chatGptLaptop from './assets/chatGptLaptop.png'
import { useEffect, useState } from 'react';

const { Title } = Typography;
const { Content } = Layout;

const useParallaxEffect = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setOffsetY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offsetY;
};

const HeroContainer = styled(Flex) <{ offset: number }>`
  background-image: url(${chatGptLaptop});
  background-attachment: scroll;
  background-position: center ${props => props.offset * 0.5}px; // Parallax effect
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  text-align: center;
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
  const offsetY = useParallaxEffect();
  return (
    <HeroContainer id="/" align='center' justify='center' vertical offset={offsetY}>
      <TextOverlay align="center" justify='center' vertical>
        <HeroHeading level={1}>Building Your Digital Presence</HeroHeading>
        <HeroSubheading level={3} >Crafting unique and user-friendly web experiences tailored to your needs.</HeroSubheading>
        <Button type='primary'>Explore Our Services</Button>
      </TextOverlay>
    </HeroContainer>
  );
};
