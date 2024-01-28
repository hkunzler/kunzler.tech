import { Card, Flex, Typography } from "antd";
import { Section } from "../customComponents/Section";
import { t } from "i18next";
import { StyledCard } from "../Services/Services.styled";
import { IServices } from "./Services.interface";

const { Title } = Typography;
const { Meta } = Card;

export const Services = ({ services }: IServices) => {
  return (
    <Section id="services" align="center" vertical>
      <Title level={2}>{t("services__heading")}</Title>
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
