import { Flex, Typography } from "antd";
import styled from "styled-components";
import chatGptLaptop from "../assets/chatGptLaptop.png";

const { Title } = Typography;

export const Container = styled(Flex)<{ offset: number; loaded: boolean }>`
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

export const TextOverlay = styled(Flex)`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

export const Heading = styled(Title)`
  color: white !important;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

export const Subheading = styled(Title)`
  color: white !important;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
`;
