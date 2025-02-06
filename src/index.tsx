import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/App';
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";
import '@src/index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </BrowserRouter>
);