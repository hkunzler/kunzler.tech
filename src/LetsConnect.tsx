import styled from "styled-components";
import {
  PhoneOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { Section } from "./customComponents/Section";
import { StyledTitle } from "./customComponents/Title";
import {
  heading,
  phoneNumberHref,
  phoneLabel,
  phoneNumber,
  meetingLabel,
  meetingLink,
  localText,
  location,
} from "./constants/letsConnect";

const { Paragraph } = Typography;

const PhoneOption = styled.span`
  padding-left: 1.5rem;
`;

export const LetsConnect = () => {
  const iconStyles = { fontSize: "1.5rem", color: "#ffa500" };

  return (
    <Section
      id="contact"
      align="center"
      justify="center"
      vertical
      gap={"middle"}
    >
      <StyledTitle level={2}>{heading}</StyledTitle>
      <Flex align="center" justify="center" wrap="wrap" gap={"middle"}>
        <Flex align="center" justify="center">
          <PhoneOutlined style={iconStyles} />
          <Flex align="start" vertical>
            <PhoneOption>{phoneLabel}</PhoneOption>
            <Button type="link" href={phoneNumberHref}>
              {phoneNumber}
            </Button>
          </Flex>
        </Flex>
        <Flex align="center" justify="center">
          <CalendarOutlined style={iconStyles} />
          <Button type="link" href={meetingLink}>
            {meetingLabel}
          </Button>
        </Flex>
      </Flex>
      <div>
        <Paragraph>{localText}</Paragraph>
        <Flex align="center" justify="center" gap={"middle"}>
          <EnvironmentOutlined style={iconStyles} /> {location}
        </Flex>
      </div>
    </Section>
  );
};
