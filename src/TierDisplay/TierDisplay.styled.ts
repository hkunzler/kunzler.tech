import { Card } from "antd";
import styled from "styled-components";

export const TierTitle = styled.h3`
  color: #0052cc;
  text-align: center;
`;

export const FeatureItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

export const TierOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TierCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  flex-grow: 1;
`;

export const PricingInfo = styled.div`
  margin: 1rem 0;
  font-size: 1.1rem;
  color: #333;
  text-align: center;
`;
