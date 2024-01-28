import { Button } from "antd";
import { t } from "i18next";
import { Container, TextOverlay, Heading, Subheading } from "./Hero.styled";
import { IHero } from "./Hero.interface";

export const Hero = ({ isLoaded, offsetY }: IHero) => {
  return (
    <Container
      loaded={isLoaded}
      id="home"
      align="center"
      justify="center"
      vertical
      offset={offsetY}
    >
      <TextOverlay align="center" justify="center" vertical>
        <Heading level={1}>{t("hero__heading")}</Heading>
        <Subheading level={3}>{t("hero__subheading")}</Subheading>
        <Button type="primary" href="/#services">
          {t("hero__cta")}
        </Button>
      </TextOverlay>
    </Container>
  );
};
