import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import config from "@config/config";
import KakaoRedirectPage from "@page/KakaoRedirectPage";
import MyPageLayout from "@page/mypage/MyPageLayout";
import ComponentDemo from "@designsystem/demo/ComponentDemo";
import FoundationDemo from "@designsystem/demo/FoundationDemo";
import TemplateComponent from "@src/component/template/TemplateComponent";
import {dummyWedding} from "@remote/value/Wedding";
import WeddingPage from "@page/WeddingPage";
import LoginPage from "@page/LoginPage";
import {css} from "styled-components";
import {Row} from "@designsystem/core/FlexLayout";
import MyPageWedding from "@page/mypage/MyPageWedding";
import MyPageInfo from "@page/mypage/MyPageInfo";
import HomePage from "@page/HomePage";
import HelmetMetaTags from "@src/HelmetMetaTags";
import EditorPage from "@page/editor/EditorPage";
import {AuthProvider} from "@hook/useAuth";
import {AutoFocusProvider} from "@hook/useAutoFocus";
import useAxiosInterceptor from "@hook/useAxiosInterceptor";

const {Kakao} = window as any;

function App() {
    useAxiosInterceptor();
    useEffect(() => {
        if (!Kakao?.isInitialized()) {
            Kakao?.init(config.kakao.javascriptKey);
        }
    }, []);

    return (
        <AuthProvider>
            <AutoFocusProvider>
                <HelmetMetaTags/>
                <Routes>
                    {/*service*/}
                    <Route path={''} element={<HomePage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'mypage'} element={<MyPageLayout/>}>
                        <Route path={'wedding'} element={<MyPageWedding/>}/>
                        <Route path={'info'} element={<MyPageInfo/>}/>
                    </Route>
                    <Route path={'editor'} element={<EditorPage/>}/>
                    <Route path={'wedding/:url'} element={<WeddingPage/>}/>
                    <Route path={'sample'} element={(
                        <Row $justifyContent={'center'} $customStyle={css`
                            background: ${dummyWedding.template.templateColor};
                            padding: 64px 0;
                        `}>
                            <TemplateComponent wedding={dummyWedding} isPreview={true}/>
                        </Row>
                    )}/>

                    {/*for system*/}
                    <Route path={'login/oauth2/code/kakao'} element={<KakaoRedirectPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/'}/>}/>

                    {config.env === 'development' && (
                        <>
                            <Route path={'design-system/foundation'} element={<FoundationDemo/>}/>
                            <Route path={'design-system/component'} element={<ComponentDemo/>}/>
                        </>
                    )}
                </Routes>
            </AutoFocusProvider>
        </AuthProvider>
    );
}

export default App;
