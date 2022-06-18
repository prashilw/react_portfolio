import React, { useEffect } from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Section, SectionTitle, SocialIcons } from '../../styles/GlobalComponents';
import { LeftSection, Div3 } from './Hero.style';
import ReactTypingEffect from 'react-typing-effect';
import { StyledButton } from '../../styles/GlobalComponents/CustomButton.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { HeroData } from '../../constants/constants';
import { animateScroll as scroll } from 'react-scroll';

const Hero = (props) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: '0',
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3
        }
      });
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3
        }
      });
    }
  }, [animation, inView]);

  const scrollToAbout = () => {
    scroll.scrollTo(3750);
  }
  return (
    <Section row nopadding >
      <LeftSection ref={ref} animate={animation}>
        <SectionTitle main center>
          I am <br />Prashil Wasnik
        </SectionTitle>
        <ReactTypingEffect speed="300ms" eraseSpeed="300ms" text={HeroData}
          style={{ display: 'flex', fontSize: '2rem', paddingBottom: '2rem' }} />
        <br />
        <div>
          <span>UI Architect with utmost details to design and implementation of SAP Fiori</span>
        </div>
        <Div3>
          <SocialIcons href="www.linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="www.linkedin.com">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="www.linkedin.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </Div3>
        <StyledButton to="about" onClick={() => scrollToAbout()}>Learn More</StyledButton>
      </LeftSection>
    </Section>
  );
};

export default Hero;