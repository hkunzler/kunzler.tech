import { Card, Flex, Typography } from 'antd';
import { DesktopOutlined, MobileOutlined, ToolOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Section } from './customComponents/Section';

const { Title } = Typography;
const { Meta } = Card;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 15rem;
  height: 15rem;
`;

const cardStyles = { fontSize: '3rem', color: '#0052cc', paddingTop: '1.5rem' };

const services = [
  {
    cover: <DesktopOutlined style={cardStyles} />,
    title: "Web Development",
    description: "Crafting responsive and performant websites tailored to your needs."
  },
  {
    cover: <MobileOutlined style={cardStyles} />,
    title: "Responsive Design",
    description: "Ensuring your website’s optimal viewing experience across a wide range of devices."
  },
  {
    cover: <ToolOutlined style={cardStyles} />,
    title: "Ongoing Support",
    description: "Providing continuous support and maintenance services to keep your website running smoothly."
  }
];

export const Services = () => {
  return (
      <Section id="services" align="center" vertical>
      <Title level={2}>Our Services</Title>
      <Flex gap="middle" align="center" justify='center' wrap="wrap">
        {services.map(({ cover, title, description }) =>
          <StyledCard
            cover={cover}
            bodyStyle={{ textAlign: 'center' }}
          >
            <Meta title={title} description={description} />
          </StyledCard>
        )}
      </Flex>
    </Section>
  );
};
