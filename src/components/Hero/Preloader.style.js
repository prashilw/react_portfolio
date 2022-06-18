import  styled, { keyframes }  from 'styled-components';


const heightFlexer = keyframes`
    0%{
        height: 1rem;
        border-radius: 1rem;
    }
    50%{
        height: 5rem;
        border-radius: 0rem;
    }
    100%{
        height: 1rem;
        border-radius: 1rem;
    }
`;

export const PreloaderComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: #000;
    align-self: center;
    height: 100vh;
    width: 100vw;
    span{
        height: 5rem;
        width: 1rem;
        background: green;
        margin: 0.5rem;
        :first-child{
            animation: 2s ease-out 1.2s infinite ${heightFlexer};
        }
        :nth-child(2){
            animation: 2s ease-out 0.7s infinite ${heightFlexer};
        }
        :nth-child(3){
            animation: 2s ease-out 0s infinite ${heightFlexer};
        }
        :nth-child(4){
            animation: 2s ease-out 1.5s infinite ${heightFlexer};
        }
        :last-child{
            animation: 2s ease-out 1s infinite ${heightFlexer};
        }
    }
`;