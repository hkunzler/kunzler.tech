import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'antd';

const PricingSection = styled.section`
  padding: 50px 0;
  background: #f5f5f5; // Light grey background
  text-align: center;
`;

const PricingWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;

const PricingCard = styled(Card)`
  width: 300px; // Fixed width for each card
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px; // Rounded corners for a modern look
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

const Price = styled.div`
  font-size: 2rem;
  color: #007bff; // Highlight color
  margin: 15px 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;

  li {
    padding: 5px 0;
  }
`;

const SubscribeButton = styled(Button)`
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;

  &:hover,
  &:focus {
    background-color: #0056b3;
    color: white;
  }
`;

export const Pricing = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        {/* Basic Static Website Tier */}
        <PricingCard>
          <PlanTitle>Basic Static Website</PlanTitle>
          <Price>$199</Price>
          <FeatureList>
            <li>Up to 5 pages</li>
            <li>Basic design templates</li>
            <li>SEO-friendly</li>
            <li>Email support</li>
          </FeatureList>
          <SubscribeButton>Choose Plan</SubscribeButton>
        </PricingCard>

        {/* Other Tiers */}
        {/* You can duplicate the PricingCard component and adjust the features and prices accordingly for the other tiers. */}
        
        {/* Tier 2: Dynamic Website */}
        {/* ... */}
        
        {/* Tier 3: E-commerce Platform */}
        {/* ... */}
      </PricingWrapper>
    </PricingSection>
  );
};
