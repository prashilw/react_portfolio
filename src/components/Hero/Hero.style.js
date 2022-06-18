import styled from 'styled-components';
import { motion } from "framer-motion";

export const LeftSection = styled(motion.div)`
  width: 100%;
  height: 100vh;
  min-height : 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 auto;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: rows;
    align-items: center;
  }
`;