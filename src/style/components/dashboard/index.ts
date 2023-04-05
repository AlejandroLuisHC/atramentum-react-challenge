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