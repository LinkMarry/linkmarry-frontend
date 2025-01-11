import React, {useEffect, useState} from 'react';
import S from '@page/invitation/dashboard/InvitationDashboard.style';
import {Column, Row} from "@designsystem/component/flexLayout";
import DashboardInvitationCell, {
    DashboardInvitationCellClickType
} from "@page/invitation/dashboard/component/DashboardInvitationCell";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";
import CreateDesignDialog from "@page/invitation/dashboard/dialog/CreateDesignDialog";
import Text from "@designsystem/component/text";
import RemoveDesignDialog from "@page/invitation/dashboard/dialog/RemoveDesignDialog";
import EditDesignDialog from "@page/invitation/dashboard/dialog/EditDesignDialog";
import WeddingDashboard from "@remote/value/WeddingDashboard";
import weddingApi from "@remote/api/WeddingApi";
import WeddingInfo from "@remote/value/WeddingInfo";
import {useNavigate} from "react-router-dom";
import Spacer from "@designsystem/component/spacer";

function InvitationDashboard() {
    const [showCreateDesignDialog, setShowCreateDesignDialog] = useState(false);
    const [showRemoveDesignDialog, setShowRemoveDesignDialog] = useState(false);
    const [showEditDesignDialog, setShowEditDesignDialog] = useState(false);

    const [weddingDashboard, setWeddingDashboard] = useState<WeddingDashboard>();
    const [selectedWeddingInfo, setSelectedWeddingInfo] = useState<WeddingInfo>();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const {data} = await weddingApi.getMyWedding();
            setWeddingDashboard(data);
        })();
    }, []);

    const onClickRemoveDashboard = async () => {
        if (!selectedWeddingInfo) return;
        try {
            await weddingApi.removeWedding(selectedWeddingInfo.url);
            alert('청첩장이 삭제 되었습니다.');
            navigate(0);
        } catch (error) {
            console.error(error);
        }
    };

    const onClickDashboardCell = async (type: DashboardInvitationCellClickType, cell: WeddingInfo) => {
        setSelectedWeddingInfo(cell);
        switch (type) {
            case 'remove':
                setShowRemoveDesignDialog(true);
                break;
            case 'edit':
                setShowEditDesignDialog(true);
                break;
        }
    };

    return (
        <S.container>
            <Column gap={44} style={{marginLeft: 64}} flex={1} $alignItems={'stretch'}>
                <Row style={{marginTop: 64}}>
                    <Column gap={8}>
                        <Text text={'내 디자인'} type={'h5'} color={colors.black}/>
                        <Text text={'원하는 청첩장을 만들어보세요!'} type={'p3'} color={colors.g500}/>
                    </Column>
                    <Spacer/>
                    {weddingDashboard && (
                        <Text
                            text={`워터마크 제거 가능 횟수 ${weddingDashboard?.invitation}`}
                            type={'p3'}
                            color={colors.g500}
                            style={{alignSelf: 'flex-end'}}
                        />
                    )}
                </Row>
                <S.items>
                    <S.createDesignButton onClick={() => {
                        setShowCreateDesignDialog(true);
                    }}>
                        <Column gap={8} $alignItems={'center'}>
                            <Icon type={IconType.AddLine} tint={colors.g600} size={28}/>
                            <Text text={'새 디자인 만들기'} type={'p4'} color={colors.g500}/>
                        </Column>
                    </S.createDesignButton>
                    {weddingDashboard ? (
                        weddingDashboard.weddingInfo.map((weddingInfo, index) =>
                            <DashboardInvitationCell key={index} weddingInfo={weddingInfo} onClick={async type => {
                                await onClickDashboardCell(type, weddingInfo);
                            }}/>
                        )
                    ) : (
                        <div>...</div>
                    )}{/* TODO: Shimmer */}
                </S.items>
            </Column>
            {showCreateDesignDialog && <CreateDesignDialog dismiss={() => setShowCreateDesignDialog(false)}/>}
            {showRemoveDesignDialog &&
                <RemoveDesignDialog dismiss={() => setShowRemoveDesignDialog(false)} confirm={onClickRemoveDashboard}/>}
            {showEditDesignDialog && selectedWeddingInfo &&
                <EditDesignDialog originUrl={selectedWeddingInfo.url} dismiss={() => setShowEditDesignDialog(false)}/>}
        </S.container>
    );
}

export default InvitationDashboard;