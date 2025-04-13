import React from 'react';
import {Outlet} from "react-router-dom";
import MyPageIndexSidebar from "@src/feature/mypage/index/component/MyPageIndexSidebar";
import useResponsive from "@src/hook/useResponsive";

function MyPageIndexLayout() {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileMyPageLayout/>;
    }

    return <DesktopMyPageLayout/>;
}

function MobileMyPageLayout() {
    return <Outlet/>;
}

function DesktopMyPageLayout() {
    return (
        <>
            <MyPageIndexSidebar/>
            <Outlet/>
        </>
    );
}

export default MyPageIndexLayout;
