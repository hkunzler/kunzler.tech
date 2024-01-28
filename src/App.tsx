import './App.css'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { OurStory } from './OurStory'
import { Services } from './Services'
import { LetsConnect } from './LetsConnect'
import { FooterComponent } from './Footer'
import { ConfigProvider, Layout } from 'antd';
import { TierDisplay } from './TierDisplay'

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            fontSize: 16,
            colorPrimary: '#0052cc',
            colorPrimaryHover: '#003d99',
            controlHeight: 42,
            paddingInline: 20,
            colorLink: '#0052cc',
            colorLinkHover: '#003d99'
          },
          FloatButton: {
            colorPrimary: '#0052cc',
            colorPrimaryHover: '#003d99',
          },
          Input: {
            colorPrimary: '#eb2f96',
          },
          Typography: {
            colorTextHeading: '#333',
            fontSizeHeading1: 48,
            fontSizeHeading2: 40,
            fontSizeHeading3: 24,
            fontSize: 16,
            colorText: '#555'
          },
          Layout: {
            headerBg: '#131414',
            footerBg: '#131414',
            colorText: '#fff'
          },
          Menu: {
            darkItemBg: '#131414',
            colorPrimary: '#0052cc',
          },
          Drawer: {
            colorBgElevated: '#131414',
            colorText: '#fff'
          }
        },
      }}
    >
      <Layout>
        <Nav />
        <Content>
          <Hero />
          <OurStory />
          <Services />
          {/* <Pricing /> */}
          <TierDisplay />
          <LetsConnect />
          </Content>
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  )
}

export default App
