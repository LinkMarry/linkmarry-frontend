import React from 'react';
import S from './CreateInvitationDashboard.style';
import {Column} from "../../../designsystem/component/flexLayout";
import WeddingDashboard from "../../../remote/value/WeddingDashboard";
import InvitationCell from "./component/InvitationCell";
import Icon, {IconType} from "../../../designsystem/foundation/icon";
import colors from "../../../designsystem/foundation/colors";

const dummyWeddingDashboard: WeddingDashboard[] = [
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
];

function CreateInvitationDashboard() {
    return (
        <S.container>
            <Column gap={44} style={{marginLeft: 64}} flex={1}>
                <Column gap={8} style={{marginTop: 64}}>
                    <S.title>내 디자인</S.title>
                    <S.titleDescription>원하는 청첩장을 만들어보세요!</S.titleDescription>
                </Column>
                <S.items>
                    <S.createDesignButton>
                        <Column gap={8} $alignItems={'center'}>
                            <Icon type={IconType.AddLine} tint={colors.g600} size={28}/>
                            <S.createDesignButtonLabel>새 템플릿 만들기</S.createDesignButtonLabel>
                        </Column>
                    </S.createDesignButton>
                    {dummyWeddingDashboard.map((weddingDashboard, index) =>
                        <InvitationCell key={index} weddingDashboard={weddingDashboard}/>
                    )}
                </S.items>
            </Column>
        </S.container>
    );
}

export default CreateInvitationDashboard;