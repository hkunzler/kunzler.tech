import styled from 'styled-components';
import { PhoneOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';
import { Section } from './customComponents/Section';
import { StyledTitle } from './customComponents/Title';

const { Paragraph } = Typography;

const PhoneOption = styled.span`
  padding-left: 1.5rem;
`;

export const LetsConnect = () => {
  const iconStyles = { fontSize: '1.5rem', color: '#ffa500' };

  return (
    <Section id="contact" align='center' justify='center' vertical gap={'middle'}>
      <StyledTitle level={2}>Let's Connect!</StyledTitle>
      <Flex align='center' justify='center' wrap='wrap' gap={'middle'}>
        <Flex align='center' justify='center'>
          <PhoneOutlined style={iconStyles} />
          <Flex align='start' vertical><PhoneOption>Call or Text: </PhoneOption><Button type="link" href="tel:+13072139577">+1 (307) 213-9577</Button></Flex>
        </Flex>
        <Flex align='center' justify='center' >
          <CalendarOutlined style={iconStyles} />
          <Button type="link" href="https://calendly.com/hkunzler">Schedule a Meeting</Button>
        </Flex>
      </Flex>
      <div>
        <Paragraph>
          If you’re local, we’d be happy to arrange an in-person meet-up. Reach out to us, and let’s find a convenient time and place!
        </Paragraph>
        <Flex align='center' justify='center' gap={'middle'}>
            <EnvironmentOutlined style={iconStyles} />{' '}
            Cody, WY
        </Flex>
      </div>
    </Section>
  );
};
