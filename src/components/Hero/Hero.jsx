import React, { useEffect } from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './Hero.style';
import ReactTypingEffect from 'react-typing-effect';
import { StyledButton } from '../../styles/GlobalComponents/CustomButton.style';
import { useInView } from 'react-intersection-observer';
import {   useAnimation } from 'framer-motion';
import { HeroData } from '../../constants/constants';

const Hero = (props) => {
  const {ref, inView} = useInView();
  const animation = useAnimation();  
  
  useEffect(() => {
    if(inView){
        animation.start({
          x: '0',
          transition : {
            type: 'spring',
            duration: 1,
            bounce: 0.3
          }
        });
      }
      if(!inView){
        animation.start({
          x: '-100vw',
          transition : {
            type: 'spring',
            duration: 1,
            bounce: 0.3
          }
        });
      }
  }, [animation,inView]);
  return (
  <Section row nopadding >
    <LeftSection ref={ref} animate={animation}>
      <SectionTitle main center>
        I am <br/>Prashil Wasnik
      </SectionTitle>
        <ReactTypingEffect speed="300ms" eraseSpeed="300ms" text={HeroData}
        style={{ display: 'flex', fontSize: '2rem', paddingBottom: '2rem'}}/>
        <br/>
        <StyledButton href="#about">Learn More</StyledButton>
    </LeftSection>
  </Section>
  );
};

export default Hero;