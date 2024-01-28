import {
  DesktopOutlined,
  MobileOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { t } from "i18next";
import { Services } from "./Services.view";

export const ServicesContainer = () => {
  const cardStyles = {
    fontSize: "3rem",
    color: "#0052cc",
    paddingTop: "1.5rem",
  };

  const services = [
    {
      cover: <DesktopOutlined style={cardStyles} />,
      title: t("services__web_development"),
      description: t("services__web_development_description"),
    },
    {
      cover: <MobileOutlined style={cardStyles} />,
      title: t("services__responsive_design"),
      description: t("services__responsive_design__description"),
    },
    {
      cover: <ToolOutlined style={cardStyles} />,
      title: t("services__ongoing_support"),
      description: t("services__ongoing_support_description"),
    },
  ];

  return <Services services={services} />;
};
