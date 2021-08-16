import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-bottom: 1rem;
  margin-left: 3rem;
  width: 100%; 
  flex-wrap: wrap;
  position: sticky;
  left: 0;
  right: 0;
  top: -1rem;
  z-index: 1;
  background-color: #000;
  

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
export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 8 / 5 / 4;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 4rem;
    height: 30rem;
    max-height: ${(props) => (props.isOpen ? '60rem' : '0rem')};
    display:${(props) => (props.isOpen ? 'flex' : 'none')};
    transition: max-height 0.7s ease-in;
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    background: #fff;
    width: 20rem;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 950px) {
    display:${(props) => (props.isOpen ? 'flex' : 'none')};
  }

  
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 3 / 4 / 6;
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
`
;
export const Hamburger = styled.div`

flex-direction : column;
cursor: pointer;
display: none;
 span {
   height: 2px;
   width: 2.5rem;
   background: #3498db;
   margin-bottom: 6px;
   border-radius: 5px;
 }
 @media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
}
@media screen and (max-width: 950px) {
  display: flex;
  }
`;