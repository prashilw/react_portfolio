import styled from 'styled-components';

export const TimeLineContainer = styled.div`
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

export const TimeLineItem = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem 3rem 1rem 3rem;
    margin: 0px 0px 2rem 0px;
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
`;