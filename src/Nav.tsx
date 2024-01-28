import { useEffect, useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logoImg from "./assets/kunzler_tech_logo.png";
import styled from "styled-components";

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

const LogoButton = styled(Button)`
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

const Logo = styled.img`
  max-width: 8rem;
  padding: 1rem;
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
  const [selectedKey, setSelectedKey] = useState("/");

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  const menuItems = [
    {
      key: "about-us",
      label: (
        <a href="#about-us" onClick={closeMobileMenu}>
          About Us
        </a>
      ),
    },
    {
      key: "services",
      label: (
        <a href="#services" onClick={closeMobileMenu}>
          Services
        </a>
      ),
    },
    {
      key: "tiers",
      label: (
        <a href="#tiers" onClick={closeMobileMenu}>
          Tier Options
        </a>
      ),
    },
    {
      key: "contact",
      label: (
        <a href="#contact" onClick={closeMobileMenu}>
          Contact
        </a>
      ),
    },
  ];

  const isBottomOfPage = () => {
    return (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      const currentScroll = window.scrollY + offset;
      const divs: HTMLElement[] = document.querySelectorAll("div[id]");

      let lastDivId = null;
      divs.forEach((div) => {
        if (
          div.offsetTop <= currentScroll &&
          div.offsetTop + div.offsetHeight > currentScroll
        ) {
          setSelectedKey(div.getAttribute("id")!);
        }
        lastDivId = div.getAttribute("id"); // Keep track of the last div id
      });
      if (isBottomOfPage() && lastDivId) setSelectedKey(lastDivId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FixedNavContainer>
        <LogoButton
          type="text"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top" // Provide an accessible label for screen readers
        >
          <Logo src={logoImg} alt="Kunzler Technology" />
        </LogoButton>
        <DesktopMenu>
          <Menu
            theme="dark"
            items={menuItems}
            mode="horizontal"
            selectedKeys={[selectedKey]}
          />
        </DesktopMenu>
        <MobileMenuButton
          ghost
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuVisible(true)}
        />
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
        <Menu
          onChange={() => setMobileMenuVisible(false)}
          style={{ paddingTop: "2rem" }}
          theme="dark"
          items={menuItems}
          mode="inline"
          selectedKeys={[selectedKey]}
        />
      </Drawer>
    </>
  );
};
