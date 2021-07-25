import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './Hero.style';
import ReactTypingEffect from 'react-typing-effect';
import { StyledButton } from '../../styles/GlobalComponents/CustomButton.style';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am Prashil Wasnik
      </SectionTitle>
        <ReactTypingEffect speed="300ms" eraseSpeed="300ms" text={["SAP Certified Fiori Consultant", "SAP Certified Extension Suite Developer"]}
        style={{ display: 'flex', fontSize: '2rem', paddingBottom: '2rem'}}/>
        <br/>
        <StyledButton href="#aboutMe">Learn More</StyledButton>
    </LeftSection>
  </Section>
);

export default Hero;