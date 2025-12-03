import {useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "@src/application/route/routes";
import config from "@src/config";
import HelmetMetaTags from "@src/application/seo/HelmetMetaTags";

const router = createBrowserRouter(routes);

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
        <>
            <HelmetMetaTags/>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
