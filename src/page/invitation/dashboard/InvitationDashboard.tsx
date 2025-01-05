import React, {useEffect, useState} from 'react';
import S from '@page/invitation/dashboard/InvitationDashboard.style';
import {Column} from "@designsystem/component/flexLayout";
import DashboardInvitationCell from "@page/invitation/dashboard/component/DashboardInvitationCell";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";
import CreateDesignDialog from "@page/invitation/dashboard/dialog/CreateDesignDialog";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";
import RemoveDesignDialog from "@page/invitation/dashboard/dialog/RemoveDesignDialog";
import EditDesignDialog from "@page/invitation/dashboard/dialog/EditDesignDialog";
import WeddingDashboard, {dummyWeddingDashboard} from "@remote/value/WeddingDashboard";
import weddingApi from "@remote/api/WeddingApi";

function InvitationDashboard() {
    const [showCreateDesignDialog, setShowCreateDesignDialog] = useState(false);
    const [showRemoveDesignDialog, setShowRemoveDesignDialog] = useState(false);
    const [showEditDesignDialog, setShowEditDesignDialog] = useState(false);

    const [weddingDashboard, setWeddingDashboard] = useState<WeddingDashboard>();

    useEffect(() => {
        (async () => {
            const {data} = await weddingApi.getMyWedding();
            setWeddingDashboard(data);
        })();
    }, []);

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
                            <Text text={'새 디자인 만들기'} type={TextType.p4} color={colors.g500}/>
                        </Column>
                    </S.createDesignButton>
                    {weddingDashboard ? (
                        weddingDashboard.weddingInfo.map((weddingInfo, index) =>
                            <DashboardInvitationCell key={index} weddingInfo={weddingInfo}/>
                        )
                    ) : (
                        <div>...</div>
                    )}{/* TODO: Shimmer */}
                </S.items>
            </Column>
            {showCreateDesignDialog && <CreateDesignDialog dismiss={() => setShowCreateDesignDialog(false)}/>}
            {showRemoveDesignDialog && <RemoveDesignDialog dismiss={() => setShowRemoveDesignDialog(false)}/>}
            {showEditDesignDialog && <EditDesignDialog dismiss={() => setShowEditDesignDialog(false)}/>}
        </S.container>
    );
}

export default InvitationDashboard;