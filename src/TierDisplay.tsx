import styled from "styled-components";
import { Card, Divider } from "antd";
import { Section } from "./customComponents/Section";
import { StyledTitle } from "./customComponents/Title";
import { TierSelectionQuiz } from "./TierSelectionQuiz";
import { heading, tiers } from "./constants/tierDisplay";

const TierTitle = styled.h3`
  color: #0052cc;
  text-align: center;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

const TierOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TierCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  flex-grow: 1;
`;

const PricingInfo = styled.div`
  margin: 1rem 0;
  font-size: 1.1rem;
  color: #333;
  text-align: center;
`;

export const TierDisplay = () => {
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
        {heading}
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
            <Divider>Or</Divider>
            <PricingInfo>{tier.subscription}</PricingInfo>
          </TierCard>
        ))}
      </TierOptions>
      <TierSelectionQuiz />
    </Section>
  );
};
