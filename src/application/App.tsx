import {useEffect} from 'react';
import config from "@src/config";
import HelmetMetaTags from "@src/application/seo/HelmetMetaTags";
import {CookiesProvider} from "react-cookie";
import {Outlet} from "react-router-dom";

if (config.prd) {
    console.log = () => {
    };
}

function App() {
    useEffect(() => {
        // loadKakaoMap();
        const {Kakao} = window as any;
        if (Kakao && !Kakao.isInitialized()) {
            Kakao.init(config.kakao.javascriptKey);
        }
    }, []);

    return (
        <CookiesProvider defaultSetOptions={{path: '/'}}>
            <HelmetMetaTags/>
            <Outlet/>
        </CookiesProvider>
    );
}

export default App;
