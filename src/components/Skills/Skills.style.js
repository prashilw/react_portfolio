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

const trackH = "0.4em";
const thumbD = "1.5em";
const trackC = "#ccced0";
const filllC = "#ffc069";

const track = css`
  box-sizing: border-box;
  border: none;
  height: 4px;
  background: ${trackC};
  border-radius: 8px;
`;

const trackFill = css`
  ${track};
  height: 6px;
  background-color: transparent;
  background-image: linear-gradient(${filllC}, ${filllC}),
    linear-gradient(${trackC}, ${trackC});
  background-size: var(--sx) 6px, calc(100% - var(--sx)) 4px;
  background-position: left center, right center;
  background-repeat: no-repeat;
`;

const fill = css`
  height: ${trackH};
  background: ${filllC};
  border-radius: 4px;
`;

const thumb = css`
  box-sizing: border-box;
  border: none;
  width: ${thumbD};
  height: ${thumbD};
  border-radius: 50%;
  background: white;
  box-shadow: 0px 0px 5px rgba(66, 97, 255, 0.5);
`;
const Input = styled.input`
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-moz-range-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-ms-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * ${thumbD} + var(--ratio) * (100% - ${thumbD}));

  margin: 0;
  padding: 0;
  height: ${thumbD};
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &::-webkit-slider-runnable-track {
    ${trackFill};
  }

  &::-moz-range-track {
    ${track};
  }

  &::-ms-track {
    ${track};
  }

  &::-moz-range-progress {
    ${fill};
  }

  &::-ms-fill-lower {
    ${fill};
  }

  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (${trackH} - ${thumbD}));
    ${thumb};
  }

  &::-moz-range-thumb {
    ${thumb};
  }

  &::-ms-thumb {
    margin-top: 0;
    ${thumb};
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;

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