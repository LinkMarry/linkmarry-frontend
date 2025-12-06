import './index.css'
import {hydrateRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "@src/application/route/routes.tsx";
import {HelmetProvider} from "react-helmet-async";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById('root');

hydrateRoot(
    rootElement as HTMLElement,
    <HelmetProvider>
        <RouterProvider
            router={router}
        />
    </HelmetProvider>
)