import { Container } from '../../style/components/layout/footerStyle';
import { memo } from 'react'

const Footer = () => {
    return (
        <Container>
            <p>&copy; {new Date().getFullYear()} Customers manager. All rights reserved.</p>
        </Container>
    );
};

export default memo(Footer)