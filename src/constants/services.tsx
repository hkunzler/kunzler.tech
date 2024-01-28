import {
  DesktopOutlined,
  MobileOutlined,
  ToolOutlined,
} from "@ant-design/icons";

const cardStyles = { fontSize: "3rem", color: "#0052cc", paddingTop: "1.5rem" };

export const services = [
  {
    cover: <DesktopOutlined style={cardStyles} />,
    title: "Web Development",
    description:
      "Crafting responsive and performant websites tailored to your needs.",
  },
  {
    cover: <MobileOutlined style={cardStyles} />,
    title: "Responsive Design",
    description:
      "Ensuring your website’s optimal viewing experience across a wide range of devices.",
  },
  {
    cover: <ToolOutlined style={cardStyles} />,
    title: "Ongoing Support",
    description:
      "Providing continuous support and maintenance services to keep your website running smoothly.",
  },
];

export const heading = "Our Services";
