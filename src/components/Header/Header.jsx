import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { GiHypersonicBolt } from 'react-icons/gi';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Hamburger } from './Header.style';
import { useInView } from 'react-intersection-observer';
import { animate, useAnimation } from 'framer-motion';
const Header = () =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.8
  });
  const animation = useAnimation();
  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition : {
          type: 'spring',
          bounce: 0.3
        }
      });
    } else {
      animation.start({
        x: '-100vw'
      })
    }
  }, [inView]);

  return (
    <Container ref={ref}>
    <Div1 onClick={()=> scroll.scrollToTop()}>
      <Link to="/">
          <GiHypersonicBolt size="5rem" /><Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2 style={{ paddingTop: '1.5rem'}} isOpen={isOpen} initial={{scale: 0}} animate={{ scale: 1 }}>
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
