import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreProvider from '../helper/providers/StoreProvider'
import Spinner from '../components/general_components/Spinner'

// Lazy import components
const Layout = lazy(() => import('./Layout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

const Router = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="*" element={<p>Error 404: Page not found</p>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default Router