import React, {useState} from 'react';
import S from './CreateInvitationDashboard.style';
import {Column} from "../../../designsystem/component/flexLayout";
import WeddingDashboard from "../../../remote/value/WeddingDashboard";
import InvitationCell from "./component/InvitationCell";
import Icon, {IconType} from "../../../designsystem/foundation/icon";
import colors from "../../../designsystem/foundation/colors";
import CreateDesignDialog from "./dialog/CreateDesignDialog";
import Text from "../../../designsystem/component/text";
import {TextType} from "../../../designsystem/foundation/text/textType";
import RemoveDesignDialog from "./dialog/RemoveDesignDialog";
import EditDesignDialog from "./dialog/EditDesignDialog";

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
    const [showCreateDesignDialog, setShowCreateDesignDialog] = useState(false);
    const [showRemoveDesignDialog, setShowRemoveDesignDialog] = useState(false);
    const [showEditDesignDialog, setShowEditDesignDialog] = useState(false);
    
    return (
        <S.container>
            <Column gap={44} style={{marginLeft: 64}} flex={1}>
                <Column gap={8} style={{marginTop: 64}}>
                    <Text text={'내 디자인'} type={TextType.h5} color={colors.black}/>
                    <Text text={'원하는 청첩장을 만들어보세요!'} type={TextType.p3} color={colors.g500}/>
                </Column>
                <S.items>
                    <S.createDesignButton onClick={() => {
                        setShowCreateDesignDialog(true);
                    }}>
                        <Column gap={8} $alignItems={'center'}>
                            <Icon type={IconType.AddLine} tint={colors.g600} size={28}/>
                            <Text text={'새 템플릿 만들기'} type={TextType.p4} color={colors.g500}/>
                        </Column>
                    </S.createDesignButton>
                    {dummyWeddingDashboard.map((weddingDashboard, index) =>
                        <InvitationCell key={index} weddingDashboard={weddingDashboard}/>
                    )}
                </S.items>
            </Column>
            {showCreateDesignDialog && <CreateDesignDialog dismiss={() => setShowCreateDesignDialog(false)}/>}
            {showRemoveDesignDialog && <RemoveDesignDialog dismiss={() => setShowRemoveDesignDialog(false)}/>}
            {showEditDesignDialog && <EditDesignDialog dismiss={() => setShowEditDesignDialog(false)}/>}
        </S.container>
    );
}

export default CreateInvitationDashboard;