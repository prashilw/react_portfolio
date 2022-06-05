import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { keyframes } from 'styled-components';

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0fr;
  grid-column-gap: 2rem;
  padding-bottom: 1rem;
  width: 100%; 
  flex-wrap: wrap;
  z-index: 5;
  background-color: #000;
  position: fixed;
  top: -1rem;
  

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 6px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 5rem;
  font-variant: small-caps;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary3};
  display: inline;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
    padding: 1rem 0rem 0rem 2rem;
  }
`
  ;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  display: flex;
  padding-right: 3rem;
  padding-top: 1rem;
  cursor: pointer;
  flex-direction: row;
  align-content: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 4 / 3;
  }
  a {
    color: ${(props) => props.theme.colors.primary3};
  }
`;
const tiltinfwdtr = keyframes`
0% {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    -webkit-transform-origin: 100% 0%;   
            transform-origin: 100% 0%;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: space-between;
  height: 100%;
  .close-button {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 8 / 5 / 4;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 4rem;
    margin-top: 4rem;
    height: 30rem;
    /* max-height: ${(props) => (props.isOpen ? '60rem' : '0rem')}; */
    max-height: 40rem;
    /* display:${(props) => (props.isOpen ? 'flex' : 'none')}; */
    display: grid;
    transition: height 0.5s ease-in,
    z-index: 20;
    background: #fff;
    width: 35rem;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom-left-radius: 30rem;
    -webkit-animation: ${tiltinfwdtr} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: ${tiltinfwdtr} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
    }
    @media screen and (max-width: 950px) {
      display:${(props) => (props.isOpen ? 'flex' : 'none')};
    }
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    position: absolute;
    top: 30vh;
    flex-direction: column;
    align-items: center;
  }
`;

// Navigation Links
export const NavLink = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-right: 3rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.primary3};
  transition: 0.4s ease;
  &:hover {
    background-color: #212d45;
    border-radius: 50px;
    font-size: 2rem;
    scale: 1.5;
    opacity: 1;
    cursor: pointer;
  }
  &:active {
    background-color: #212d45;
    border-radius: 50px;
    font-size: 2rem;
    scale: 1.5;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    margin-right: 5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: ${(props) => props.theme.colors.primary3};
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;


export const Hamburger = styled.div`
display: none;
 @media ${(props) => props.theme.breakpoints.sm} {
  border: none;
  background:none;
  display: block;
  height: 3vh;
  width: 6vw;
  position: absolute;
  top: 4vh;
  right: 2vw;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  span{
    display: block;
    height: 2px;
    background: ${(props) => props.theme.colors.primary3};
    border-radius: 1px;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
  }
  .open:first-child {
      opacity: 1;
      transform: rotate(45deg) translate(5px, 2px);
      background: red;
    }
    .open:nth-child(2) {
      opacity: 0;
    }
    .open:last-child {
      opacity: 1;
      transform: rotate(-45deg) translate(2px, 0px);
      background: red;
    }
}


@media screen and (max-width: 950px) {
  display: flex;
  margin-right: 5vw;
  }
`;