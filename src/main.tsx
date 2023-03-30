import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router'
import { GlobalStyle } from './style/globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <Router />
    </React.StrictMode>,
)
