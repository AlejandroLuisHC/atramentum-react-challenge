import styled from 'styled-components';
import { color, device } from '../../style_constants';

export const StyledTableWrapper = styled.div`
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${color.white};
    width: 100%;
    overflow-x: auto;
    
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
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 90vw;
    
    @media ${device.mobile} {
        padding: 0 16px;
    }
`;

export const StyledTh = styled.th`
    text-align: left;
    padding: 16px;
    font-weight: bold;
    color: ${color.text};
    border-bottom: 2px solid ${color.secondary};
    cursor: default;
    position: relative;

    @media ${device.mobile} {
        padding: 16px;
        font-size: 13px;
        vertical-align: top;
    }
`;

export const StyledTd = styled.td`
    text-align: left;
    padding: 16px;
    border-bottom: 1px solid ${color.secondary};

    @media ${device.mobile} {
        padding: 12px;
        font-size: 14px;
    }
`;

export const StyledTr = styled.tr`
    cursor: pointer;
    margin: 0;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        background-color: ${color.primaryFade};
        transform: translateX(10px);       
    }
`;

export const StyledSortButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${color.primary};
    font-size: 16px;
    margin-left: 5px;
    transform: translateY(3px);
    right: 5px;
    bottom: 5px;
    
    &:hover {
        color: ${color.warning};
    }
    
    &:active {
        color: ${color.accent};
    }
    
    @media ${device.mobile} {
        position: absolute;
        font-size: 14px;
    }
`;