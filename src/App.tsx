import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import RegisterPage from "@page/RegisterPage";
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
            <Routes>
                {/*service*/}
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'login/oauth2/code/kakao'} element={<KakaoRedirectPage/>}/>
                <Route path={''} element={<HomePage/>}/>
                <Route path={'invitation'} element={<InvitationLayout/>}>
                    <Route path={'dashboard'} element={<InvitationDashboard/>}/>
                    <Route path={'design'} element={<InvitationDesign/>}/>
                    <Route path={'statistics'}>
                        <Route index={true} element={<InvitationStatistics/>}/>
                        <Route path={'detail'} element={<InvitationStatisticsDetail/>}/>
                    </Route>
                </Route>
                <Route path={'my-page'} element={<MyPage/>}/>

                {/*design-system*/}
                <Route path={'design-system/foundation'} element={<FoundationDemo/>}/>
                <Route path={'design-system/component'} element={<ComponentDemo/>}/>

                {/*not found*/}
                <Route path={'*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
