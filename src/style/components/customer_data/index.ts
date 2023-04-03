import styled from 'styled-components';
import { color, device } from '../../style_constants';

export const CustomerId = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
    color: ${color.text};
    text-align: center;

    @media ${device.mobile} {
        font-size: 32px;
        margin-bottom: 15px;
    }
`

export const CustomerDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const CustomerInfoDiv = styled.div`
    display: flex;
    position: relative;
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
export const CustomerInfoForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${color.secondary};
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 600px;
    position: relative;

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

export const DetailLabel = styled.label`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${color.textSecondary};

    @media ${device.mobile} {
        font-size: 18px;
        margin-bottom: 3px;
    }
`

export const DetailText = styled.p`
    font-size: 16px;
    color: ${color.text};
    margin-top: 5px;

    @media ${device.mobile} {
        font-size: 14px;
    }
`

export const DetailTextarea = styled.textarea`
    font-size: 16px;
    color: ${color.text};
    margin-top: 5px;
    height: 120px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${color.textSecondary};

    @media ${device.mobile} {
        font-size: 14px;
    }
`

export const DetailInput = styled.input`
    font-size: 16px;
    color: ${color.text};
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${color.textSecondary};

    @media ${device.mobile} {
        font-size: 14px;
    }
`

export const DetailOption = styled.option`
    font-size: 16px;
    color: ${color.text};
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${color.textSecondary};
    
    @media ${device.mobile} {
        font-size: 14px;
    }
`

export const DetailSelect = styled.select`
    font-size: 16px;
    color: ${color.text};
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${color.textSecondary};

    @media ${device.mobile} {
        font-size: 14px;
    }
`

export const DetailValueError = styled.p`
    font-size: 16px;
    color: ${color.error};

    @media ${device.mobile} {
        font-size: 14px;
    }
`
type ButtonEditProps = {
    isEdit: boolean
};

export const ButtonEdit = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: ${(props: ButtonEditProps) => props.isEdit ? color.warning : color.primary};
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
        background-color: ${color.accent};
    }
    
    @media ${device.mobile} {
        font-size: 14px;
        padding: 8px 12px;
    }
`

export const ButtonSave = styled.button`
    background-color: ${color.primary};
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
        background-color: ${color.accent};
    }

    @media ${device.mobile} {
        font-size: 14px;
        padding: 8px 12px;
    }
`