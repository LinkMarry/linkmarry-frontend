import React from 'react';
import S from './InvitationPage.style';
import InvitationSideBar from "./component/InvitationSideBar";
import HasHeader from "../../designsystem/component/header/hasHeader";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {InvitationSideBarType} from "./component/InvitationSideBarType";

function getSelectedSideBarType(pathname: string): InvitationSideBarType | null {
    if (pathname.startsWith('/invitation/dashboard')) {
        return 'dashboard';
    } else if (pathname.startsWith('/invitation/design')) {
        return 'design';
    } else if (pathname.startsWith('/invitation/statistics')) {
        return 'statistics';
    } else {
        return null;
    }
}

function InvitationLayout() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const sideBarType = getSelectedSideBarType(pathname);

    if (['/invitation', '/invitation/'].includes(pathname)) {
        window.location.href = '/invitation/dashboard';
        return <></>;
    }

    return (
        <HasHeader>
            <S.container>
                <InvitationSideBar selected={sideBarType!!} onChange={item => {
                    navigate(item);
                }}/>
                <Outlet/>
            </S.container>
        </HasHeader>
    );
}

export default InvitationLayout;