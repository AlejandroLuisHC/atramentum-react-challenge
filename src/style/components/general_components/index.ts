import styled from 'styled-components';
import { color } from '../../style_constants';

export const DivSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.primary};
    width: 100%;
    height: 100%;
    z-index: 100;
    font-size: 15vw;

    @keyframes spin {
        0% { 
            transform: rotate(0deg);
            color: ${color.primary}; 
        }
        50% {
            color: ${color.blue};
        }
        100% { 
            transform: rotate(360deg);
            color: ${color.primary}; 
        }
    }
    animation: spin 1s linear infinite;
`