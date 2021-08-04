import React, { useEffect, useState } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ReactProgress, ProgressListItem, ItemWidth, SkillDetail } from './Skills.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { SkillsData } from '../../constants/constants';
import { Animated } from "react-animated-css";



const Skills = () => {
    // const novice = 'linear-gradient(to right, #e980b9, #6de5fa);';
    // const proficient = 'linear-gradient(to left, #F2709C, #FF9472)';
    // const expert = 'linear-gradient(to left, #02709C, #FF9472)';
    const [isOpen, setIsOpen] = useState(false);
    const [skillIndex, setSkillIndex] = useState(0);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 1
    });

    const childVariant = {
        visible: {
            scaleX: 1,
            staggerChildren: 1,
            delayChildren: 0.5
        },
        hidden: { scaleX: 0 },
    }

    const progressVariant = {
        visible: {
            width: '100%',
            transition: {
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

    const showDetail = (event, name, idx) => {
        console.log(name + " " + idx);

        if(isOpen && idx === skillIndex) {
            setIsOpen(false);
        } else {
            setIsOpen(false);
            setTimeout(() => {
                setSkillIndex(idx);
                setIsOpen(true);
            }, 400);
            
        } 
    }

    return (
        <>
            <Section nopadding id="skill">
                <SectionDivider />
                <SectionTitle>
                    Skills
                </SectionTitle>
                <SectionText>Skills I possess</SectionText>
                <div style={{ display: 'flex', margin: '1rem', padding: '1rem' }}>
                    <ReactProgress max={'100'} value={'70'} initial="hidden" animate={controls} ref={ref}>
                        {SkillsData.map(({ name, value }, idx) => {
                            return (
                                <>
                                    <SectionText style={{ paddingBottom: '0rem' }}>{name}</SectionText>
                                    <ProgressListItem max='100' variants={childVariant} onClick={(e) => showDetail(e, name, idx)}>
                                        <ItemWidth variants={progressVariant} percent={value} />
                                    </ProgressListItem>
                                </>
                            )
                        })}
                    </ReactProgress>
                    <Animated animationIn="headShake" animationOut="fadeOutUp" animationInDuration={500} animationOutDuration={400} isVisible={isOpen}>
                        <SkillDetail variants={progressVariant} open={isOpen}>
                            <h3>{SkillsData[skillIndex].name}</h3>
                            <span>{SkillsData[skillIndex].description}</span>
                        </SkillDetail>
                    </Animated>
                </div>
            </Section>
        </>
    );
}

export default Skills;