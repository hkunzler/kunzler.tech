import styled from "styled-components";
import {
  PhoneOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { Section } from "./customComponents/Section";
import { StyledTitle } from "./customComponents/Title";
import { t } from "i18next";

const { Paragraph } = Typography;

const PhoneOption = styled.span`
  padding-left: 1.5rem;
`;

export const LetsConnect = () => {
  const iconStyles = { fontSize: "1.5rem", color: "#ffa500" };
  const phoneNumberHref = "tel:+13072139577";
  const phoneNumber = "+1 (307) 213-9577";
  const meetingLink = "https://calendly.com/hkunzler";

  return (
    <Section
      id="contact"
      align="center"
      justify="center"
      vertical
      gap={"middle"}
    >
      <StyledTitle level={2}>{t("lets_connect__heading")}</StyledTitle>
      <Flex align="center" justify="center" wrap="wrap" gap={"middle"}>
        <Flex align="center" justify="center">
          <PhoneOutlined style={iconStyles} />
          <Flex align="start" vertical>
            <PhoneOption>{t("lets_connect__phone")}</PhoneOption>
            <Button type="link" href={phoneNumberHref}>
              {phoneNumber}
            </Button>
          </Flex>
        </Flex>
        <Flex align="center" justify="center">
          <CalendarOutlined style={iconStyles} />
          <Button type="link" href={meetingLink}>
            {t("lets_connect__meeting")}
          </Button>
        </Flex>
      </Flex>
      <div>
        <Paragraph>{t("lets_connect__local_meetup")}</Paragraph>
        <Flex align="center" justify="center" gap={"middle"}>
          <EnvironmentOutlined style={iconStyles} />{" "}
          {t("lets_connect__location")}
        </Flex>
      </div>
    </Section>
  );
};
