import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/App';
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";
import '@src/index.css'
import {CookiesProvider} from "react-cookie";
import {AuthProvider} from "@hook/useAuth";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <CookiesProvider defaultSetOptions={{path: '/'}}>
        <BrowserRouter>
            <HelmetProvider>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </HelmetProvider>
        </BrowserRouter>
    </CookiesProvider>
);
