import styled, {keyframes} from 'styled-components';
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

const shake = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateX(0);} 
            40% {transform: translateX(-30px);} 
            60% {transform: translateX(-15px);} 
`;

export const TimeLineItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 3rem 1rem 3rem;
    margin: 0px 0px 5rem 0px;
    box-shadow: -5px 4px 1px rgba(0, 0, 0, 0.2);
    position: relative;
    right: 2rem;
    width: 50%;
    color: #fff;
    background: #000;
    min-height: 10rem;
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
        min-width: 90%;
    }
    span {
        
        padding: 0 1rem 0 1rem;
        position: relative;
        background: red;
        border-radius: 1rem;
        font-variant: small-caps;
        display: inline-flex;
        justify-content: space-between;
    }
    time {
        width: 40%;
        padding: 0 1rem 0 1rem;
        position: relative;
        background: red;
        border-radius: 1rem;
    }
    div {
        display: flex;
        /* width: 100%; */
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 2rem;
        min-height: 6rem;
    }
    &:hover{
        cursor: pointer;
        animation: ${shake} 1s linear infinite;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        align-self: center;
        justify-content: center;
        border-radius: 2rem;
        padding-right: 0px;
        width: 30%;
        z-index: 100;
        left: 0;
        :nth-child(odd){
            align-self: center;
            justify-content: center;
            border-radius: 2rem;
            padding-right: 0px;
            width: 30%;
            z-index: 100;
            left: 0;
        }
        .timeline-item-content {
            align: center;
            p{
                display: none;
            }
        }
        &:after {
            display: none;
        }

        span {
            padding: 1rem;
            align-items: center;
            background: red;
            border-radius: 1rem;
            font-variant: small-caps;
            display: inline-flex;
            justify-content: space-between;
        }

    }
`;