import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Progress, ProgressItem, ReactProgress, ProgressListItem, ItemWidth } from './Skills.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Skills = () => {
    const novice = 'linear-gradient(to right, #e980b9, #6de5fa);';
    const proficient = 'linear-gradient(to left, #F2709C, #FF9472)';
    const expert = 'linear-gradient(to left, #02709C, #FF9472)';

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
            <Progress>
                <ProgressItem><span>novice</span></ProgressItem>
                <ProgressItem><span>proficient</span></ProgressItem>
                <ProgressItem><span>expert</span></ProgressItem>
            </Progress>
            <ReactProgress max={'100'} value={'70'} initial="hidden" animate={controls} ref={ref}>
                <span>Javascript</span><br /><ProgressListItem  max='100' colorVariant={novice} data-label="50% Complete" variants={childVariant}>
                    <ItemWidth variants={progressVariant} percent={'80'}/>
                </ProgressListItem>
                <span>Javascript</span><br /><ProgressListItem percent={'20'} max='100' colorVariant={proficient} data-label="50% Complete" variants={childVariant}>
                    <ItemWidth variants={progressVariant} percent={'20'}/>
                </ProgressListItem>
                <span>Javascript</span><br /><ProgressListItem percent={'70'} value={'30'} max='100' colorVariant={expert} data-label="50% Complete" variants={childVariant}>
                    <ItemWidth variants={progressVariant} />
                </ProgressListItem>
            </ReactProgress>
        </Section>
    );
}

export default Skills;