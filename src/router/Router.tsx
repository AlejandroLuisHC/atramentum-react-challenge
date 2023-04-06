import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreProvider from '../helper/providers/StoreProvider'
import Spinner from '../components/general_components/Spinner'
import { DetailValueError } from '../style/components/customer_data'

// Lazy import components
const Layout = lazy(() => import('./Layout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const CustomerData = lazy(() => import('../pages/CustomerData'))

const Router = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="customer/:id" element={<CustomerData />} />
                            <Route path="*" element={<DetailValueError>Error 404: Page not found</DetailValueError>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default Router