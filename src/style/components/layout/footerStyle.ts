import styled from 'styled-components';
import { color } from "../../style_constants";

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 0.9rem;
`;