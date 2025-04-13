import React, {useEffect} from 'react';
import config from "@src/config";
import HelmetMetaTags from "@src/application/seo/HelmetMetaTags";
import {AutoFocusProvider} from "@src/hook/useAutoFocus";
import useAxios from "@src/hook/useAxios";
import AppRoutes from "@src/application/route/AppRoutes";
import {AuthProvider} from "@src/hook/useAuth";

function App() {
    useAxios();
    useEffect(() => {
        const {Kakao} = window as any;
        if (!Kakao?.isInitialized()) {
            Kakao?.init(config.kakao.javascriptKey);
        }
    }, []);

    return (
        <AuthProvider>
            <AutoFocusProvider>
                <HelmetMetaTags/>
                <AppRoutes/>
            </AutoFocusProvider>
        </AuthProvider>
    );
}

export default App;
