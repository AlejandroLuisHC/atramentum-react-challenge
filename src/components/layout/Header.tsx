import {
    Container,
    ImgHeader,
    Logo,
    Navigation,
    NavLink,
} from '../../style/components/layout/headerStyle';
import { memo } from 'react'
import headerLogo from '../../assets/img/headerlogo.png'

const Header = () => {
    return (
        <Container>
            <Logo to="/">
                <ImgHeader src={headerLogo} alt="logo" />
            </Logo>
            <Navigation>
                <NavLink to="/">Home</NavLink>
            </Navigation>
        </Container>
    );
};

export default memo(Header);