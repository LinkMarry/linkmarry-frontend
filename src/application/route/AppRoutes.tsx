import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "@src/feature/HomePage";
import LoginPage from "@src/feature/LoginPage";
import KakaoRedirectPage from "@src/feature/KakaoRedirectPage";
import PrivateRoute from "@src/application/route/PrivateRoute";
import MyPageLayout from "@src/feature/mypage/MyPageLayout";
import MyPageDefaultLayout from "@src/feature/mypage/default/MyPageDefaultLayout";
import MyPageWeddingPage from "@src/feature/mypage/default/MyPageWeddingPage";
import MyPageInfoPage from "@src/feature/mypage/default/MyPageInfoPage";
import MyPageDetailLayout from "@src/feature/mypage/detail/MyPageDetailLayout";
import MyPageStatPage from "@src/feature/mypage/detail/MyPageStatPage";
import EditorPage from "@src/feature/editor/EditorPage";
import WeddingPage from "@src/feature/WeddingPage";
import {Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import {dummyWedding} from "@src/infrastructure/network/value/Wedding";
import WeddingComponent from "@src/userinterface/specific/wedding/WeddingComponent";
import AiCustomPage from "@src/ai/AICustomPage";
import AdminRoute from "@src/application/route/AdminRoute";
import config from "@src/config";
import FoundationDemo from "@src/userinterface/demo/FoundationDemo";
import ComponentDemo from "@src/userinterface/demo/ComponentDemo";

const AppRoutes = () => {
    return (
        <Routes>
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
                    <Route path={'design-system/specific'} element={<ComponentDemo/>}/>
                </>
            )}
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default AppRoutes;
