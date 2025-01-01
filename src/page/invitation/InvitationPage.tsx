import React, {useState} from 'react';
import S from './InvitationPage.style';
import InvitationSideBar from "./component/InvitationSideBar";
import {InvitationSideBarType} from "./component/InvitationSideBarType";
import InvitationDesign from "./design/InvitationDesign";
import HasHeader from "../../designsystem/component/header/hasHeader";
import InvitationDashboard from "./dashboard/InvitationDashboard";
import InvitationStatistics from "./statistics/InvitationStatistics";

function InvitationPage() {
    const [selectedSideBarType, setSelectedSideBarType] = useState<InvitationSideBarType>('dashboard');

    const subPage = () => {
        switch (selectedSideBarType) {
            case 'dashboard':
                return <InvitationDashboard/>
            case 'design':
                return <InvitationDesign/>;
            case 'statistics':
                return <InvitationStatistics/>;
        }
    };

    return (
        <HasHeader>
            <S.container>
                <InvitationSideBar selected={selectedSideBarType} onChange={item => {
                    setSelectedSideBarType(item);
                }}/>
                {subPage()}
            </S.container>
        </HasHeader>
    );
}

export default InvitationPage;