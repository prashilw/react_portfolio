import styled, { css } from 'styled-components';
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
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #000000, #434343);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #000000, #434343); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width: 50vw;
    align-content: center:
    align-items: center:
    text-align: center;
    justify-content: center;
`;

export const ProgressListItem = styled(motion.div)`
   {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
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
  background: #0099F7;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #F11712, #0099F7);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #F11712, #0099F7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      box-shadow: 1px 5px 5px -5px #F2709C, 0 2px 5px #F2709C;
      height: 2rem;
      max-width: ${(props)=> props.percent}%;
      border-radius: 1rem;
      position: relative;
      z-index: 1;
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
        z-index: 100;
      }
      &::before{
        content: attr('data-label');
        z-index: 2;
        position: absolute;
        left: 3rem;
        width: 100%;
      }
`;