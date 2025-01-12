import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import config from "@config/config";
import KakaoRedirectPage from "@page/KakaoRedirectPage";
import InvitationLayout from "@page/invitation/InvitationLayout";
import HomePage from "@page/home/HomePage";
import InvitationDashboard from "@page/invitation/dashboard/InvitationDashboard";
import InvitationStatistics from "@page/invitation/statistics/InvitationStatistics";
import InvitationDesign from "@page/invitation/design/InvitationDesign";
import InvitationStatisticsDetail from "@page/invitation/statistics/detail/InvitationStatisticsDetail";
import MyPage from "@page/mypage/MyPage";
import ComponentDemo from "@designsystem/demo/component.demo";
import FoundationDemo from "@designsystem/demo/foundation.demo";
import NotificationPage from "@page/notification/NotificationPage";
import NotificationDetailPage from "@page/notification/detail/NotificationDetailPage";
import InvitationDashboardGuestComment from "@page/invitation/dashboard/guestComment/InvitationDashboardGuestComment";
import Template1 from "@src/component/template/Template1";
import {dummyWedding} from "@remote/value/Wedding";
import TemplatesPage from "@page/templates/TemplatesPage";
import GlobalStyle from "@src/GlobalStyle";

const {Kakao} = window as any;

function App() {
    useEffect(() => {
        // 카카오 객체를 초기화 (필수)
        if (!Kakao?.isInitialized()) {
            Kakao?.init(config.kakao.javascriptKey);
        }
    }, []);

    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                {/*service*/}
                <Route path={'login/oauth2/code/kakao'} element={<KakaoRedirectPage/>}/>
                <Route path={''} element={<HomePage/>}/>
                <Route path={'invitation'} element={<InvitationLayout/>}>
                    <Route path={'dashboard'}>
                        <Route index={true} element={<InvitationDashboard/>}/>
                        <Route path={'guest-comment'} element={<InvitationDashboardGuestComment/>}/>
                    </Route>
                    <Route path={'design'} element={<InvitationDesign/>}/>
                    <Route path={'statistics'}>
                        <Route index={true} element={<InvitationStatistics/>}/>
                        <Route path={'detail'} element={<InvitationStatisticsDetail/>}/>
                    </Route>
                </Route>
                <Route path={'my-page'} element={<MyPage/>}/>
                <Route path={'notification'} element={<NotificationPage/>}/>
                <Route path={'notification/:id'} element={<NotificationDetailPage/>}/>
                <Route path={'templates'} element={<TemplatesPage/>}/>

                {/*design-system*/}
                <Route path={'design-system/foundation'} element={<FoundationDemo/>}/>
                <Route path={'design-system/component'} element={<ComponentDemo/>}/>

                {/*not found*/}
                <Route path={'*'} element={<Navigate to={'/'}/>}/>

                {/*temp*/}
                <Route path={'template1'} element={(
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Template1 wedding={dummyWedding}/>
                    </div>
                )}/>
            </Routes>
        </Router>
    );
}

export default App;
