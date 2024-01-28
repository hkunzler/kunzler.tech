import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

export const FooterComponent = () => {
  return (
    <StyledFooter> © {new Date().getFullYear()} Kunzler Technology, L.L.C. All rights reserved.</StyledFooter>
  );
};
