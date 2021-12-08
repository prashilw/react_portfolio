import React, { useEffect, useState } from 'react';
import { WiSunrise } from 'react-icons/wi';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {  Link, animateScroll as scroll } from 'react-scroll';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Hamburger } from './Header.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { ThemeButton } from '../../styles/GlobalComponents/CustomButton.style';

const Header = () =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView();
  const animation = useAnimation();

  const headerVariant = {
    hidden : {
      y : 0,
      opacity: 0
    },
    visible : {
      y : 8,
      opacity: 1,
      transition : {
        delay: 1,
        duration : 1
      }
    }
  }

  useEffect(() => {
    if(inView){
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const popoverClose = () => {
    console.log(isOpen + "popover state");
    
  }
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return (
    <Container ref={ref} initial="hidden" animate={animation} variants={headerVariant}>
    <Div1 onClick={()=> scrollToTop()}>
          <WiSunrise size="5rem" /><Span>Portfolio</Span>
    </Div1>
    <Div2 style={{ paddingTop: '1.5rem'}} isOpen={isOpen}>
      <li>
        <Link to="blog" activeClass="active" smooth={true} offset={-100} duration={500} onClick={()=> setIsOpen(!isOpen)}>
          <NavLink>Blogs</NavLink>
        </Link>
      </li>
      <li>
        <Link to="skill" activeClass="active" smooth={true} offset={-100} duration={500} onClick={()=> setIsOpen(!isOpen)}>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link to="timeline" activeClass="active" smooth={true} offset={-100} duration={500}  onClick={()=> setIsOpen(!isOpen)}>
          <NavLink>Career</NavLink>
        </Link>
      </li>        
      <li>
        <Link to="about" activeClass="active" smooth={true} offset={-100} duration={500} onClick={()=> setIsOpen(!isOpen)}>
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
      <SocialIcons href="www.linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="www.linkedin.com">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
      <SocialIcons href="www.linkedin.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <Hamburger onClick={()=> setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
    </Hamburger>
    </Div3>
  </Container>
  );
}

export default Header;
