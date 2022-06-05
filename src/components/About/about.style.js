import styled from 'styled-components';
import { motion } from 'framer-motion';
import portfolioImg from '../../images/portfolio.jpg';

export const LeftSection = styled.div`

`;

export const Details = styled(motion.div)`
    width: 50vw;
    font-weight: 500;
    font-size: 3rem;
    margin-left: 3rem;
    margin-top: 5rem;
`;

export const Carousel = styled(motion.div)`
    width: 30vw;
    background: radial-gradient(circle,rgb(165 156 156) 20%,rgb(0 0 0) 60%),url(${portfolioImg});
    background-blend-mode: hard-light;
    margin-right: 3rem;
  /* Set a specific height */
    height: 40vw;
    border-radius: 2rem;
    /* Position and center the image to scale nicely on all screens */
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

export const VerticalDivider = styled.div`
    display: flex;
    flex-direction: row;
`;