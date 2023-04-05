import styled from 'styled-components';
import { color, device } from '../../style_constants';

export const ItemsSelectorWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    color: ${color.text};
    background-color: ${color.white};
    border-radius: 8px;
    height: 100px;
    padding: 40px 20px 10px;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${color.primary};
        border-radius: 8px;
    }
    &::-webkit-scrollbar-track {
        background-color: ${color.whiteFadeBg};
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: ${color.warning};
    }

    @media ${device.mobile} {   
        padding: 35px 20px 10px;
    }
`;

export const ItemsSelectorTitle = styled.h3`
    font-size: 16px;
    margin-right: 20px;
    position: absolute;
    top: 8px;
    left: 50%;
    color: ${color.text};
    transform: translatex(-50%);
    
    @media ${device.mobile} {
        font-size: 14px;
        left: 8px;
        transform: none;
    }
`;

export const ItemsSelectorLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    gap: 5px;
    text-align: center;

    @media ${device.mobile} {
        font-size: 14px;
        margin-right: 10px;
    }
`;

export const ItemsSelectorInput = styled.input`
    height: 12px;
    border-radius: 5px;
    border: 1px solid ${color.tertiary};
    text-align: center;

    @media ${device.mobile} {
        height: 16px;
    }
`;