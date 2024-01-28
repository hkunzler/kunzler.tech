import { Button, Typography } from 'antd';
import styled from 'styled-components';
import { Section } from './customComponents/Section';
import { StyledTitle } from './customComponents/Title';

const { Paragraph } = Typography;

const StyledText = styled(Paragraph)`
  max-width: 600px;
  margin-bottom: 2rem;
`;

export const OurStory = () => {
  return (
    <Section id="about-us" secondary align='center' justify='center' vertical>
      <StyledTitle secondary level={2}>Our Story</StyledTitle>
      <StyledText>
        Kunzler Technology was born out of a vision to redefine the digital landscape. Pioneering the intersection of technology and creativity, we strive to create digital solutions that tell a story, evoke emotion, and connect with the audience. We are dedicated to pushing the boundaries, leveraging the latest technologies to deliver not just websites, but experiences that leave a lasting impact.
        <br /><br />
        Our passion for excellence is the driving force behind every project. We believe in a collaborative approach, working closely with clients to understand their vision and translate it into digital masterpieces. Every line of code we write, every design we craft, is infused with the commitment to create value and make a difference in the digital world.
      </StyledText>
      <Button type='primary' href="#contact">Let's Build Something Together</Button>
    </Section>
  );
};
