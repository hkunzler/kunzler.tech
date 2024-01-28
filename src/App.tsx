import { Nav } from "./Nav";
import { HeroContainer } from "./Hero/Hero.container";
import { OurStory } from "./OurStory";
import { ServicesContainer } from "./Services/Services.container";
import { LetsConnect } from "./LetsConnect";
import { FooterComponent } from "./Footer";
import { ConfigProvider, Layout } from "antd";
import { TierDisplayContainer } from "./TierDisplay/TierDisplay.container";
import { theme } from "./theme";

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Nav />
        <Content>
          <HeroContainer />
          <OurStory />
          <ServicesContainer />
          <TierDisplayContainer />
          <LetsConnect />
        </Content>
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
