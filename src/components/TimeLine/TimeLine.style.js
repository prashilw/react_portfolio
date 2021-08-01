import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TimeLineContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;
    width: 80rem;
    align-self: center;
    &:after {
        background-color: red;
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        left: calc(50% - 2px);
    }
`;

export const TimeLineItem = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 3rem 1rem 3rem;
    margin: 0px 0px 10rem 0px;
    box-shadow: -5px 4px 1px rgba(0, 0, 0, 0.2);
    position: relative;
    right: 2rem;
    width: 50%;
    color: #fff;
    background: #000;
    :nth-child(odd){
        align-self: flex-end;
        justify-content: flex-start;
        padding-right: 0px;
        padding-left: 3rem;
        left: 2rem;
        &:after {
            left: -2rem;
        }
    }
    &:after {
        background-color: red;
        content: '';
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        right: -2rem;
        top: 2rem;
    }
    .timeline-item-content {
        max-width: 70%;
    }
    span {
        right : 0;
        padding: 0 1rem 0 1rem;
        position: absolute;
        background: red;
        border-radius: 1rem;
        font-variant: small-caps;
    }
    time {
        left : 0;
        padding: 0 1rem 0 1rem;
        position: relative;
        background: red;
        border-radius: 1rem;
    }
`;