import React, {useEffect} from "react";
import {Outlet, ScrollRestoration, Scripts, Meta, Links} from "react-router";
import {CookiesProvider} from "react-cookie";
import config from "~/config.ts";
import './app.css'
import {HelmetProvider} from "react-helmet-async";
import HelmetMetaTags from "~/application/seo/HelmetMetaTags.tsx";

export function Layout(
    {
        children,
    }: {
        children?: React.ReactNode,
    }
) {
    return (
        <html lang="ko">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/logo192.png"/>

            <link rel="preload"
                  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
                  as="style"/>
            <link rel="preload"
                  href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Rufina:wght@400;700&display=swap"
                  as="style"/>

            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
                  media="print" onload="this.media='all'"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Rufina:wght@400;700&display=swap"
                  media="print" onload="this.media='all'"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ungveloper/web-fonts/SCoreDream/font-face.css"
                  media="print" onload="this.media='all'"/>

            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16841271697"></script>
            <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
                    integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
                    crossOrigin="anonymous"></script>
            <script
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${config.kakao.javascriptKey}&libraries=services,clusterer,drawing`}></script>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {

    useEffect(() => {
        const {Kakao} = window as any;
        if (Kakao && !Kakao.isInitialized()) {
            Kakao.init(config.kakao.javascriptKey);
        }
    }, []);

    return (
        <CookiesProvider defaultSetOptions={{path: '/'}}>
            <HelmetProvider>
                <HelmetMetaTags/>
                <Outlet/>
            </HelmetProvider>
        </CookiesProvider>
    );
}