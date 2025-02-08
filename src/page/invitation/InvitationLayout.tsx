import React from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import InvitationSideBar from "@page/invitation/component/InvitationSideBar";
import HasHeader from "@designsystem/component/header/hasHeader";
import {InvitationSideBarType} from "@page/invitation/component/InvitationSideBarType";
import {Row} from "@designsystem/component/FlexLayout";
import {css} from "styled-components";

function getSelectedSideBarType(pathname: string): InvitationSideBarType | null {
    if (pathname.startsWith('/dashboard')) {
        return 'dashboard';
    } else if (pathname.startsWith('/statistics')) {
        return 'statistics';
    } else {
        return null;
    }
}

function InvitationLayout() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const sideBarType = getSelectedSideBarType(pathname);

    return (
        <HasHeader>
            <Row flex={1} $alignItems={'stretch'} $customStyle={css`
                width: 100vw;
                background: var(--g-200);
                overflow: hidden;
            `}>
                <InvitationSideBar selected={sideBarType!!} onChange={item => {
                    navigate(item);
                }}/>
                <Outlet/>
            </Row>
        </HasHeader>
    );
}

export default InvitationLayout;