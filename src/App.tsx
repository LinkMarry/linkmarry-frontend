import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FoundationDemo from "./designsystem/demo/foundation.demo";
import ComponentDemo from "./designsystem/demo/component.demo";
import RegisterPage from "./page/RegisterPage";
import config from "./config/config";
import KakaoRedirectPage from "./page/KakaoRedirectPage";
import CreateInvitationPage from "./page/createinvitation/CreateInvitationPage";
import HomePage from "./page/home/HomePage";

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
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/login/oauth2/code/kakao'} element={<KakaoRedirectPage/>}/>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/create-invitation'} element={<CreateInvitationPage/>}/>

                {/*design-system*/}
                <Route path={'/design-system/foundation'} element={<FoundationDemo/>}/>
                <Route path={'/design-system/component'} element={<ComponentDemo/>}/>

                {/*not found*/}
                <Route path={'*'} element={<div>404</div>}/>
            </Routes>
        </Router>
    );
}

export default App;
