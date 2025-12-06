import {renderToString} from 'react-dom/server'
import {ServerStyleSheet, StyleSheetManager} from "styled-components";
import {createStaticHandler, createStaticRouter, StaticRouterProvider} from "react-router-dom";
import routes from "@src/application/route/routes.tsx";
import {HelmetProvider} from "react-helmet-async";
import type {HelmetServerState} from "react-helmet-async/lib/types";

export async function render(req: Request) {

    const helmetContext: {
        helmet?: HelmetServerState;
    } = {};

    const sheet = new ServerStyleSheet();
    try {
        const handler = createStaticHandler(routes);
        const context = await handler.query(req);
        if (context instanceof Response) {
            // 예: redirect, 404 같은 처리
            return {
                redirect: context.headers.get("Location"),
                status: context.status
            };
        }
        const router = createStaticRouter(handler.dataRoutes, context);

        const html = renderToString(
            <StyleSheetManager sheet={sheet.instance}>
                <HelmetProvider context={helmetContext}>
                    <StaticRouterProvider router={router} context={context}/>
                </HelmetProvider>
            </StyleSheetManager>
        );
        const {helmet} = helmetContext;

        if (!helmet) {
            throw new Error('No helmet context');
        }

        const head =
            helmet?.title?.toString() +
            helmet?.meta?.toString() +
            helmet?.link?.toString() +
            sheet.getStyleTags();

        return {
            html,
            head
        }
    } catch (error) {
        // handle error
        console.error(error);
    } finally {
        sheet.seal();
    }
}