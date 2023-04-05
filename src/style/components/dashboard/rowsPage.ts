import styled from 'styled-components';
import { color, device } from '../../style_constants';

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