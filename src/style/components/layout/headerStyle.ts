import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, device } from "../../style_constants";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${color.white};
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
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    color: ${color.black};

    @media ${device.mobile} {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
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
    color: ${color.black};

    &:hover {
        color: ${color.blue};
    }
`;