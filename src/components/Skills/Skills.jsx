import React, { useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ReactProgress, ProgressListItem, ItemWidth } from './Skills.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { SkillsData } from '../../constants/constants';

const showDetail =(event, name)=> {
    console.log(name);
  }

const Skills = () => {
    // const novice = 'linear-gradient(to right, #e980b9, #6de5fa);';
    // const proficient = 'linear-gradient(to left, #F2709C, #FF9472)';
    // const expert = 'linear-gradient(to left, #02709C, #FF9472)';

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 1
    });

    const childVariant = {
        visible: { scaleX : 1 },
        hidden: {scaleX: 0 },
    }

    const progressVariant = {
        visible : {
            width: '100%',
            transition : {
                delay: 1,
                duration: 2
            }
        },
        hidden: {
            width: 0
        }
    }

    useEffect(() => {
        console.log(`skill frame ${inView}`)
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);

    return (

        <Section nopadding id="skill">
            <SectionDivider />
            <SectionTitle>
                Skills
            </SectionTitle>
            <SectionText>Skills I possess</SectionText>
            
            <ReactProgress max={'100'} value={'70'} initial="hidden" animate={controls} ref={ref}>
            {SkillsData.map(({ name, value }) => {
                return (
                    <>
                    <SectionText style={{ paddingBottom : '0rem' }}>{name}</SectionText>
                    <ProgressListItem  max='100' variants={childVariant}>
                        <ItemWidth variants={progressVariant} percent={value} onClick={(e) => showDetail(e, name)}/>
                    </ProgressListItem>
                    </>
                )
            })}
            </ReactProgress>
        </Section>
    );
}

export default Skills;