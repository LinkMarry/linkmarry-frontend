import React from 'react';
import MainWrapper from "@designsystem/pattern/header/MainWrapper";
import {Row} from "@designsystem/core/FlexLayout";
import {Outlet} from "react-router-dom";
import {css} from "styled-components";
import MyPageDefaultSidebar from "@page/mypage/default/MyPageDefaultSidebar";
import useResponsive from "@hook/useResponsive";

function MyPageLayout() {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileMyPageLayout/>;
    }

    return <DesktopMyPageLayout/>;
}

function MobileMyPageLayout() {
    return (
        <MainWrapper>
            <Row $justifyContent={'center'} $flex={1} $ui={css`
                overflow-y: scroll;
                padding: 24px 16px 0 16px;
            `}>
                <Row $gap={32} $ui={css`
                    max-width: 1100px;
                    flex: 1;
                `}>
                    <Outlet/>
                </Row>
            </Row>
        </MainWrapper>
    )
}

function DesktopMyPageLayout() {
    return (
        <MainWrapper>
            <Row $justifyContent={'center'} $flex={1} $ui={css`
                padding: 72px 24px 0 24px;
                overflow-y: scroll;
            `}>
                <Row $gap={32} $ui={css`
                    max-width: 1100px;
                    flex: 1;
                `}>
                    <Outlet/>
                </Row>
            </Row>
        </MainWrapper>
    );
}

export default MyPageLayout;
