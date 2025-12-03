import {createRoot} from 'react-dom/client';
import App from '@src/application/App';
import {HelmetProvider} from "react-helmet-async";
import '@src/index.css';
import {CookiesProvider} from 'react-cookie';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);
root.render(
    <CookiesProvider defaultSetOptions={{path: '/'}}>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </CookiesProvider>
);