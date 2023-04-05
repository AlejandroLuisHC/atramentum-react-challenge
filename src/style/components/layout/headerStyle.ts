import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, device } from "../../style_constants";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${color.backgroundDark};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 10;

    @media ${device.mobile} {
        flex-direction: column;
        justify-content: center;
        height: 80px;
    }
`;

export const Logo = styled(Link)`
    width: 140px;
    text-decoration: none;
    color: ${color.white};

    @media ${device.mobile} {
        position: absolute;
        top: 25px;
        left: 25px;
        margin-bottom: 0.5rem;
        width: 100px;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media ${device.mobile} {
        margin-top: 0.5rem;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${color.white};
    font-size: 1.1rem;

    &:hover {
        color: ${color.blue};
    }
`;

export const ImgHeader = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;