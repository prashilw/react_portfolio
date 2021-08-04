import styled from 'styled-components';
import { Scroll as Button } from "react-scroll";

export const StyledButton = styled.button`
    width: 20rem;
    border: 1px solid #E76F51;
    background: none;
    padding: 10px 20px;
    cursor: pointer;
    margin: 10px;
    color: #E76F51;
    transition: 0.8s;
    text-align: center;
    position: relative;
    overflow: hidden;   
    :hover {
        color: #fff;
        :before {
            height: 180%
        }
    }
    :active {
        background-color: #2A9D8F;
    }
    :before {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 0;
        background: #F4A261;
        z-index: -1;
        transition: 0.8s;
        top:0;
        border-radius: 0 0 50% 50%;
    }
`;

export const ThemeButton = styled.div `
width: 20rem;
    border: 1px solid #E76F51;
    background: none;
    padding: 10px 20px;
    cursor: pointer;
    margin: 10px;
    color: #E76F51;
    transition: 0.8s;
    position: relative;
    text-align: center;
    overflow: hidden;   
    :hover {
        color: #fff;
        :before {
            height: 180%
        }
    }
    :active {
        background-color: #2A9D8F;
    }
    :before {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 0;
        background: #F4A261;
        z-index: -1;
        transition: 0.8s;
        top:0;
        border-radius: 0 0 50% 50%;
    }
    @media (max-width: 728px) {
        background: #F4A261;
        :before {
            background: #2A9D8F;
        }
    }
`;