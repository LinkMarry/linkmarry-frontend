import React from 'react';
import {Outlet} from "react-router-dom";
import MyPageDefaultSidebar from "@page/mypage/default/MyPageDefaultSidebar";
import useResponsive from "@hook/useResponsive";

function MyPageDefaultLayout() {
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
            <MyPageDefaultSidebar/>
            <Outlet/>
        </>
    );
}

export default MyPageDefaultLayout;
