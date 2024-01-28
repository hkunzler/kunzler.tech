import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { OurStory } from "./OurStory";
import { Services } from "./Services";
import { LetsConnect } from "./LetsConnect";
import { FooterComponent } from "./Footer";
import { ConfigProvider, Layout } from "antd";
import { TierDisplay } from "./TierDisplay";
import { theme } from "./theme";

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Nav />
        <Content>
          <Hero />
          <OurStory />
          <Services />
          <TierDisplay />
          <LetsConnect />
        </Content>
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
