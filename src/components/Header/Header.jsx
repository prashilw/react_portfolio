import React, { useEffect, useState } from 'react';
import { WiSunrise } from 'react-icons/wi';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {  Link } from 'react-scroll';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Hamburger } from './Header.style';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }
  return (
    <Container ref={ref} initial="hidden" animate={animation} variants={headerVariant}>
    <Div1 onClick={()=> scrollToTop()}>
          <WiSunrise size="5rem" /><Span>Portfolio</Span>
    </Div1>
    <Div2 style={{ paddingTop: '1.5rem'}} isOpen={isOpen}>
      <li>
        <Link to="blog">
          <NavLink>Blogs</NavLink>
        </Link>
      </li>
      <li>
        <Link to="skill">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link to="timeline">
          <NavLink>Career</NavLink>
        </Link>
      </li>        
      <li>
        <Link to="about">
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
