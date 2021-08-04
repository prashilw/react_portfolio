import React, { useEffect, useState } from 'react';
import { CareerData } from '../../constants/constants';
import { SectionDivider, Section, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineContainer, TimeLineItem } from './TimeLine.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Modal from '../Modal/Modal';
import { Animated } from "react-animated-css";

const TimeLine = () => {
    var options = { year: 'numeric', month: 'long' };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [childrenContent, setChildrenContent] = useState("");
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const timeVariant = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 1
            }
        },
        hidden: { opacity: 0 },
    }

    const timeItemVariant = {
        visible: {
            x: 0,
            delay: 1,
            opacity: 1,
            transition: {
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

    const delegateModal = (evt, description) => {
        setIsModalOpen(true);
        setChildrenContent(description);
    }
    return CareerData.length > 0 && (
        <Section nopadding id="timeline" background={'white'}>
            <SectionDivider />
            <SectionTitle>Timeline</SectionTitle>
            <TimeLineContainer variants={timeVariant} initial="hidden" animate={animation}>
                {CareerData.map((data, idx) => (
                    <TimeLineItem id={idx} key={idx} variants={timeItemVariant} ref={ref} onClick={(e) => delegateModal(e, data.description)}>
                        <div className="timeline-item-content">
                            <div>
                                <span className="tag">
                                    {data.category.map((tag, idx) => (
                                        <li>{tag}</li>
                                    ))}
                                    
                                </span>
                                {/* <span>{new Intl.DateTimeFormat('en-GB', options).format(data.date) }</span> */}
                                {new Intl.DateTimeFormat('en-GB', options).format(data.date)}
                            </div>
                            <p>{data.text}</p>
                        </div>
                    </TimeLineItem>
                ))}
                {/* <TimeLineItem variants={timeItemVariant} data={{text:"newText"}}/> */}
            </TimeLineContainer>
            <Modal animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} animationOutDuration={800} isVisible={isModalOpen} open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {childrenContent}
            </Modal>
        </Section>
    )
}

export default TimeLine;