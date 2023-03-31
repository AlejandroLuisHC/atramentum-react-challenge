import styled from 'styled-components';
import { color, device } from '../../style_constants';

export const CustomerDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const CustomerInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color.secondary};
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 600px;

    @media ${device.mobile} {
        border-radius: 0;
    }
`

export const CustomerName = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
    color: ${color.text};

    @media ${device.mobile} {
        font-size: 28px;
        margin-bottom: 15px;
    }
`

export const CustomerDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const DetailTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${color.textSecondary};

    @media ${device.mobile} {
        font-size: 18px;
        margin-bottom: 3px;
    }
`

export const DetailValue = styled.p`
    font-size: 16px;
    color: ${color.text};

    @media ${device.mobile} {
        font-size: 14px;
    }
`