import styled from 'styled-components';
import { color, device } from '../../style_constants';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DashboardTitle = styled.h1`
    margin-bottom: 20px;
    font-size: 32px;
    color: ${color.text};

    @media ${device.mobile} {
        font-size: 24px;
    }
`;

export const DashboardPaginationContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${color.text};
    gap: 10px;
`;

export const DashboardPaginationText = styled.p`
    font-size: 16px;
    margin-right: 20px;

    @media ${device.mobile} {
        font-size: 14px;
    }
`;

export const DashboardPageSelector = styled.input`
    width: 70px;
    margin-left: 20px;
    font-size: 16px;
    text-align: center;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${color.tertiary};

    @media ${device.mobile} {
        width: 50px;
    }
`;

export const DashboardButton = styled.button`
    background-color: ${color.primary};
    color: ${color.white};
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${color.accent};
    }

    &:disabled {
        background-color: ${color.tertiary};
        cursor: not-allowed;
    }

    @media ${device.mobile} {
        font-size: 14px;
    }
`;

export const DashboardRowsPerPageWrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${color.text};
    gap: 10px;
    margin-bottom: 20px;
`;

export const DashboardRowsPerPageLabel = styled.label`
    font-size: 16px;
    margin-right: 20px;

    @media ${device.mobile} {
        margin-bottom: 10px;
    }
`;

export const DashboardRowsPerPageSelect = styled.select`
    font-size: 16px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${color.tertiary};

    @media ${device.mobile} {
        margin-bottom: 10px;
    }
`;

export const DashboardRowsPerPageOption = styled.option`
    font-size: 16px;
    color: ${color.text};

    &:hover {
        background-color: ${color.primaryFade};
    }

    &:disabled {
        background-color: ${color.tertiary};
        cursor: not-allowed;
    }

    @media ${device.mobile} {
        font-size: 14px;
    }
`;