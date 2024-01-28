import { useState } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import logoImg from './assets/kunzler_tech_logo.png';
import styled from 'styled-components';

const { Header } = Layout;

const FixedNavContainer = styled(Header)`
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.2);
  z-index: 1; 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 8rem;
  transition: transform 0.3s;
  padding: 1rem;
  display: flex;
  &:hover {
    transform: scale(1.05);
  }
`;

const DesktopMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
`;

const MobileMenuButton = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    border: none;
    display: block; 
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1010;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 16px;
  top: 16px;
  border: none; 
`;


export const Nav = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const menuItems = [
    { key: '1', label: (<a href="#about-us">About Us</a>) },
    { key: '2', label: (<a href="#services">Services</a>) },
    { key: '3', label: (<a href="#tiers">Tier Options</a>) },
    { key: '4', label: (<a href="#contact">Contact</a>) },
  ];

  return (
    <>
    <FixedNavContainer>
      <Logo onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} src={logoImg} alt="Kunzler Technology" />
      <DesktopMenu><Menu theme="dark" items={menuItems} defaultSelectedKeys={['1']} mode="horizontal" /></DesktopMenu>
      <MobileMenuButton ghost icon={<MenuOutlined />} onClick={() => setMobileMenuVisible(true)} />
    </FixedNavContainer>
    <Drawer
      placement="right"
      closable={false}
      onClose={() => setMobileMenuVisible(false)}
      open={mobileMenuVisible}
    >
      <CloseButton
        ghost
        icon={<CloseOutlined />}
        onClick={() => setMobileMenuVisible(false)}
      />
      <Menu style={{paddingTop: '2rem'}} theme="dark" items={menuItems} mode="inline" />
    </Drawer>
  </>
  );
};
