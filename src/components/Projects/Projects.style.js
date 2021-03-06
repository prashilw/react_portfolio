import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled(motion.section)`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled(motion.div)`
  /* border-radius: 10px; */
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  min-height: 15rem;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80vw;
    overflow: hidden;
  }
`;
export const TitleContent = styled.div`
  text-align: left;
  font-size: 2rem;
  font-family: monospace;
  flex-wrap: no-wrap;
  padding: 1rem;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 100;
  letter-spacing: 3px;
  text-decoration: underline;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2rem' : '2rem'};
  font-family: monospace;
`;

export const HrTileDetails = styled.div`
  display: flex;
  opacity: 1;
  bottom: 2rem;
  min-height: 15rem;
  position: relative;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  display: none;
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
display: hidden;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;

`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
`