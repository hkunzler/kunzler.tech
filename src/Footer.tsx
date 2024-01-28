import { Layout } from "antd";
import styled from "styled-components";
import { copyright } from "./constants/footer";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

export const FooterComponent = () => <StyledFooter>{copyright}</StyledFooter>;
