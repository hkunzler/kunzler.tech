import { Button, Typography } from "antd";
import styled from "styled-components";
import { Section } from "./customComponents/Section";
import { StyledTitle } from "./customComponents/Title";
import i18n from "./i18n";
import { Trans } from "react-i18next";
const { Paragraph } = Typography;

const StyledText = styled(Paragraph)`
  max-width: 600px;
  margin-bottom: 2rem;
`;

export const OurStory = () => {
  return (
    <Section id="about-us" secondary align="center" justify="center" vertical>
      <StyledTitle secondary level={2}>
        {i18n.t("our_story__heading")}
      </StyledTitle>
      <StyledText>
        <Trans i18nKey="our_story__description" />
      </StyledText>
      <Button type="primary" href="#contact">
        {i18n.t("our_story__cta")}
      </Button>
    </Section>
  );
};
