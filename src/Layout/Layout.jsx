import About from '../components/About/about';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/TimeLine/TimeLine';
import { Container } from './Layout.style';

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main>
     <Projects/>
     <Skills/>
     <Timeline/>
     <About/>
     <Footer/>
    </Container>
  )
}