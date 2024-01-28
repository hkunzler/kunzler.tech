import { Divider } from "antd";
import { Section } from "../customComponents/Section";
import { StyledTitle } from "../customComponents/Title";
import { TierSelectionQuizContainer } from "../TierSelectionQuiz/TierSelectionQuiz.container";
import { t } from "i18next";
import { ITierDisplay } from "./TierDisplay.interface";
import {
  FeatureItem,
  FeatureList,
  PricingInfo,
  TierCard,
  TierOptions,
  TierTitle,
} from "./TierDisplay.styled";

export const TierDisplay = ({ tiers }: ITierDisplay) => {
  return (
    <Section
      id="tiers"
      secondary
      align="center"
      justify="center"
      vertical
      gap={"middle"}
    >
      <StyledTitle level={2} secondary>
        {t("tier_options")}
      </StyledTitle>
      <TierOptions>
        {tiers.map((tier, index) => (
          <TierCard key={index}>
            <TierTitle>{tier.title}</TierTitle>
            <FeatureList>
              {tier.features.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex}>{feature}</FeatureItem>
              ))}
            </FeatureList>
            <PricingInfo>{tier.totalPrice}</PricingInfo>
            <Divider>{t("tier_display__or")}</Divider>
            <PricingInfo>{tier.subscription}</PricingInfo>
          </TierCard>
        ))}
      </TierOptions>
      <TierSelectionQuizContainer />
    </Section>
  );
};
