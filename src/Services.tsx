import { Card, Flex, Typography } from "antd";
import styled from "styled-components";
import { Section } from "./customComponents/Section";
import { services, heading } from "./constants/services";

const { Title } = Typography;
const { Meta } = Card;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 15rem;
  height: 15rem;
`;

export const Services = () => {
  return (
    <Section id="services" align="center" vertical>
      <Title level={2}>{heading}</Title>
      <Flex gap="middle" align="center" justify="center" wrap="wrap">
        {services.map(({ cover, title, description }) => (
          <StyledCard cover={cover} bodyStyle={{ textAlign: "center" }}>
            <Meta title={title} description={description} />
          </StyledCard>
        ))}
      </Flex>
    </Section>
  );
};
