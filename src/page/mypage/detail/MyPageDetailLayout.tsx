import React from 'react';
import {Outlet} from "react-router-dom";
import useResponsive from "@hook/useResponsive";
import MyPageDetailSidebar from "@page/mypage/detail/MyPageDetailSidebar";

function MyPageDetailLayout() {
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
            <MyPageDetailSidebar/>
            <Outlet/>
        </>
    );
}

export default MyPageDetailLayout;
