import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './Layout.style';

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}