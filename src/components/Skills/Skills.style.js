import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Progress = styled.ul`


`
export const ProgressItem = styled.li`
    margin: 1rem 2em;
    display: inline-flex;
    text-align: center;
    line-height: 4em;
    border-radius: 2em;
    color: white;
    position: relative;
    
    &:first-child ~ &:before{
        content: '';
        position: absolute;
        background: #18bc9c;
        z-index: -1;
        top: 0.9em;
        left: -5rem;
        width: 4em;
        height: 0.2em;
    }
    &:after{
        content: '';
        position: absolute;
        background: #18bc9c;
        z-index: -1;
        top: 0.9em;
        width: 4em;
        height: 0.2em;
    }
    &:last-child {
        ::after {
            display: none;
        }
    }
`

export const ReactProgress = styled(motion.div)`
    width: 50vw;
    align-content: center:
    align-items: center:
    text-align: center;
    justify-content: center;
`;

export const ProgressListItem = styled(motion.div)`
   {
    padding-bottom: 2rem;
    margin-bottom: 4rem;
    height: 2rem;
    width: 90%;
    border-radius: 1rem;
    background-color: #fff;
    }
    div {
      
    }
}

`;

export const ItemWidth = styled(motion.div)`
      /* background: #0099F7;  
      background: -webkit-linear-gradient(to right, #F11712, #0099F7);  
      background: linear-gradient(to right, #F11712, #0099F7); */
      background : ${(props) => (props.percent > 80 ? 'linear-gradient(to right, #c0233e, #d4530a, #cb8900, #a0bc00, #07eb1b);' : 
      props.percent > 50 ? 'linear-gradient(to right, #2c599d, #0089c8, #00b4ba, #00d778, #c4eb07);'
       : 'linear-gradient(to right, #17a8e7, #678ee7, #a66acb, #cd3b92, #d10c48);') };
      box-shadow: 1px 5px 5px -5px #F2709C, 0 2px 5px #F2709C;
      height: 2rem;
      max-width: ${(props)=> props.percent}%;
      border-radius: 1rem;
      position: relative;
      &:hover{
        cursor: pointer;
      }
      &::after{
        content: '';
        background: -webkit-linear-gradient(to right, #F11712, #0099F7);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #F11712, #0099F7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
        
        height: 4rem;
        flex: 1;
        left: calc(100% - 1rem);
        top: -1rem;
        width: 4rem;
        border-radius: 2rem;
        position: absolute;
      }
      &::before{
        content: attr('data-label');
        position: absolute;
        left: 3rem;
        width: 100%;
      }
`;