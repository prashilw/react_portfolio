import React, { useEffect } from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Details, Carousel, VerticalDivider } from './about.style';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const About = () => {
    const {ref, inView} = useInView();
    const animation = useAnimation();
    const animationText = useAnimation();
    useEffect(() => {
        if(inView){
            animation.start({
              opacity : 1,
              transition : {
                type: 'ease-in',
                duration: 2,
              }
            });
            animationText.start({
                x : 0,
              transition : {
                type: 'spring',
                duration: 2,
              }
            });
          }
          if(!inView){
            animation.start({
              opacity: 0,
              transition : {
                type: 'ease-out',
                duration: 1,
              }
            });
            animationText.start({
                x : '-100vw',
                transition : {
                type: 'spring',
                duration: 2,
              }
            });
          }
      }, [animation,animationText, inView]);
    return (

        <Section nopadding id="about" ref={ref}>
            <SectionDivider />
            <SectionTitle>
                About Me
            </SectionTitle>
            <VerticalDivider>
                <Details animate={animationText}>
                    <p>I am Prashil Wasnik. <br />I live in Bangalore, India. I am Technical Architect and work on SAP Technologies.</p>
                </Details>
                <Carousel animate={animation}>

                </Carousel>
            </VerticalDivider>
        </Section>
    );
}

export default About;