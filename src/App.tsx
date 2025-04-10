import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import config from "@config/config";
import KakaoRedirectPage from "@page/KakaoRedirectPage";
import MyPageLayout from "@page/mypage/MyPageLayout";
import ComponentDemo from "@designsystem/demo/ComponentDemo";
import FoundationDemo from "@designsystem/demo/FoundationDemo";
import WeddingComponent from "@src/component/wedding/WeddingComponent";
import {dummyWedding} from "@remote/value/Wedding";
import WeddingPage from "@page/WeddingPage";
import LoginPage from "@page/LoginPage";
import {css} from "styled-components";
import {Row} from "@designsystem/core/FlexLayout";
import MyPageWeddingPage from "@page/mypage/default/MyPageWeddingPage";
import MyPageInfoPage from "@page/mypage/default/MyPageInfoPage";
import HomePage from "@page/HomePage";
import HelmetMetaTags from "@src/HelmetMetaTags";
import EditorPage from "@page/editor/EditorPage";
import {AutoFocusProvider} from "@hook/useAutoFocus";
import useAxios from "@hook/useAxios";
import AdminRoute from "@page/admin/AdminRoute";
import MyPageStatPage from "@page/mypage/detail/MyPageStatPage";
import MyPageDefaultLayout from "@page/mypage/default/MyPageDefaultLayout";
import MyPageDetailLayout from "@page/mypage/detail/MyPageDetailLayout";
import PrivateRoute from "@src/PrivateRoute";
import AiCustomPage from "@src/ai/AICustomPage";


if (config.env !== 'development') {
    console.log = () => {
    };
}

function App() {
    useAxios();
    useEffect(() => {
        const {Kakao} = window as any;
        if (!Kakao?.isInitialized()) {
            Kakao?.init(config.kakao.javascriptKey);
        }
    }, []);

    return (
        <AutoFocusProvider>
            <HelmetMetaTags/>
            <Routes>
                {/*service*/}
                <Route path={''} element={<HomePage/>}/>
                <Route path={'login'}>
                    <Route index={true} element={<LoginPage/>}/>
                    <Route path={'oauth2/code/kakao'} element={<KakaoRedirectPage/>}/>
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path={'mypage'} element={<MyPageLayout/>}>
                        <Route element={<MyPageDefaultLayout/>}>
                            <Route path={'wedding'} element={<MyPageWeddingPage/>}/>
                            <Route path={'info'} element={<MyPageInfoPage/>}/>
                        </Route>
                        <Route element={<MyPageDetailLayout/>}>
                            <Route path={'wedding/:url'} element={<MyPageStatPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'editor/:url?'} element={<EditorPage/>}/>
                </Route>
                <Route path={'wedding/:url'} element={<WeddingPage/>}/>
                <Route path={'sample'} element={(
                    <Row $justifyContent={'center'} $ui={css`
                        background: ${dummyWedding.weddingDesign.weddingDesignColor};
                        padding: 64px 0;
                    `}>
                        <WeddingComponent wedding={dummyWedding} isPreview={true}/>
                    </Row>
                )}/>
                <Route path={'ai-custom'} element={<AiCustomPage/>}/>

                <Route path={'admin'} element={<AdminRoute/>}>
                    {/*<Route path={'/tem'}/>*/}
                </Route>

                {config.env === 'development' && (
                    <>
                        <Route path={'design-system/foundation'} element={<FoundationDemo/>}/>
                        <Route path={'design-system/component'} element={<ComponentDemo/>}/>
                    </>
                )}
                <Route path={'*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </AutoFocusProvider>
    );
}

export default App;
