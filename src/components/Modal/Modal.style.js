import styled from "styled-components";
import { Animated } from "react-animated-css";

export const ModalPopup = styled(Animated)`
 position: fixed;
 top: 25%;
 left: 37%;
 z-index: 1000;
 padding: 5rem;
 max-width: 50rem;
 max-height: 50rem;
 min-width: 50rem;
 min-height: 50rem;
 background: teal;
 border-radius: 2rem;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;

export const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.7);
    z-index: 1000;
    padding: 5rem;
    
`;

export const ButtonContainer = styled.div`
    position: relative;
    bottom: 1rem;
`;