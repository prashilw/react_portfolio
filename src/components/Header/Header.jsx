import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { GiHypersonicBolt } from 'react-icons/gi';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Hamburger } from './Header.style';

const Header = () =>  {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
    <Div1 onClick={()=> scroll.scrollToTop()}>
      <Link href="/">
          <GiHypersonicBolt size="5rem" /><Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2 style={{ paddingTop: '1.5rem'}} isOpen={isOpen}>
      <li>
        <Link to="project">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to="tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link to="accomplishment">
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
