import React, {useState} from 'react';
import S from './CreateInvitationPage.style';
import CreateInvitationSideBar from "./component/CreateInvitationSideBar";
import {CreateInvitationSideBarType} from "./component/CreateInvitationSideBarType";
import CreateInvitationDesign from "./design/CreateInvitationDesign";
import HasHeader from "../../designsystem/component/header/hasHeader";
import CreateInvitationDashboard from "./dashboard/CreateInvitationDashboard";

function CreateInvitationPage() {
    const [selectedSideBarType, setSelectedSideBarType] = useState<CreateInvitationSideBarType>('dashboard');

    const subPage = () => {
        switch (selectedSideBarType) {
            case 'dashboard':
                return <CreateInvitationDashboard/>
            case 'design':
                return <CreateInvitationDesign/>;
            case 'statistics':
                return <div>Statistics</div>
        }
    };

    return (
        <HasHeader>
            <S.container>
                <CreateInvitationSideBar selected={selectedSideBarType} onChange={item => {
                    setSelectedSideBarType(item);
                }}/>
                {subPage()}
            </S.container>
        </HasHeader>
    );
}

export default CreateInvitationPage;