import React from 'react';
import { CareerData, TimeLineData } from '../../constants/constants';
import { SectionDivider, Section, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineContainer, TimeLineItem } from './TimeLine.style';


const TimelineItem = ({ data }) => {

    return (
        <TimeLineItem>
            <div className="timeline-item-content">
                <span className="tag">
                    {data.category}
                </span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                <span className="circle"></span>
            </div>
        </TimeLineItem>
    );
}

const TimeLine = () => CareerData.length > 0 && (
    <Section id="timeline" background={'white'}>
        <SectionDivider />
        <SectionTitle>Timeline</SectionTitle>
        <TimeLineContainer>
            {CareerData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </TimeLineContainer>
    </Section>
)

export default TimeLine;