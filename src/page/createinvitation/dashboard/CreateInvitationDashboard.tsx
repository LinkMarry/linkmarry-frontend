import React from 'react';
import S from './CreateInvitationDashboard.style';
import {Column} from "../../../designsystem/component/flexLayout";
import WeddingDashboard from "../../../remote/data/value/WeddingDashboard";
import InvitationCell from "./component/InvitationCell";

const dummyWeddingDashboard: WeddingDashboard[] = [
    {
        weddingInfo: [
            {
                img: '',
                url: '',
                createdDate: ''
            }
        ],
        invitation: 1
    }
]

interface DashboardProps {

}

function CreateInvitationDashboard(
    {}: DashboardProps
) {
    return (
        <S.container>
            <Column gap={44} style={{marginLeft: 64}}>
                <Column gap={8} style={{marginTop: 64}}>
                    <S.title>내 디자인</S.title>
                    <S.titleDescription>원하는 청첩장을 만들어보세요!</S.titleDescription>
                </Column>
                <S.items>
                    {dummyWeddingDashboard.map(weddingDashboard =>
                        <InvitationCell weddingDashboard={weddingDashboard}/>
                    )}
                </S.items>
            </Column>
        </S.container>
    );
}

export default CreateInvitationDashboard;