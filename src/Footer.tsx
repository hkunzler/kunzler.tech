import { Layout } from "antd";
import styled from "styled-components";
import i18n from "./i18n";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const currentYear = new Date().getFullYear();

export const FooterComponent = () => <StyledFooter>{i18n.t('footer__copyright', { year: currentYear })}</StyledFooter>;
