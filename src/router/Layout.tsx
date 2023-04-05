import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Main, LayoutContainer } from '../style/components/layout';
import { memo } from 'react'
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <LayoutContainer>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </LayoutContainer>
    )
}

export default memo(Layout)