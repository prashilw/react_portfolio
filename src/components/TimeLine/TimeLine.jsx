import React, { useEffect, useState } from 'react';
import { CareerData } from '../../constants/constants';
import { SectionDivider, Section, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineContainer, TimeLineItem } from './TimeLine.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Modal from '../Modal/Modal';

const TimeLine = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const timeVariant = {
        visible: { 
            opacity : 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 1
            }
        },
        hidden: {opacity: 0 },
    }

    const timeItemVariant = {
        visible : {
            x : 0,
            delay: 1,
            opacity: 1,
            transition : {
                type: 'ease-in'
            }
        },
        hidden: {
            x: 100,
            opacity: 0
        }
    }

    useEffect(() => {
        console.log(`timeline ${inView}`)
        if (inView) {
          animation.start('visible');
        }
        if (!inView) {
          animation.start('hidden');
        }
      }, [animation, inView]);

    return CareerData.length > 0 && (
        <Section nopadding id="timeline" background={'white'}>
            <SectionDivider />
            <SectionTitle>Timeline</SectionTitle>
            <TimeLineContainer variants={timeVariant} initial="hidden" animate={animation}>
                {CareerData.map((data, idx) => (
                    <TimeLineItem id={idx} key={idx} variants={timeItemVariant} ref={ref} onClick={() => setIsModalOpen(true)}>
                    <div className="timeline-item-content">
                        <span className="tag">
                            {data.category}
                        </span>
                        <time>{data.date}</time>
                        <p>{data.text}</p>
                        <span className="circle"></span>
                    </div>
                </TimeLineItem>
                ))}
                {/* <TimeLineItem variants={timeItemVariant} data={{text:"newText"}}/> */}
            </TimeLineContainer>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                This is from Project
            </Modal>
        </Section>
    )
}

export default TimeLine;