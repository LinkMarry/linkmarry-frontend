import React, {useEffect, useState} from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import DashboardInvitationCell, {
    DashboardInvitationCellClickType
} from "@page/invitation/dashboard/component/DashboardInvitationCell";
import Icon, {IconType} from "@designsystem/foundation/icon";
import CreateDesignDialog from "@page/invitation/dashboard/dialog/CreateDesignDialog";
import Text from "@designsystem/component/Text";
import EditDesignDialog from "@page/invitation/dashboard/dialog/EditDesignDialog";
import WeddingDashboard from "@remote/value/WeddingDashboard";
import weddingApi from "@remote/api/WeddingApi";
import WeddingInfo from "@remote/value/WeddingInfo";
import {useNavigate} from "react-router-dom";
import Spacer from "@designsystem/component/Spacer";
import {isAxiosError} from "axios";
import PayWaterMarkDialog from "@page/invitation/dashboard/dialog/PayWaterMarkDialog";
import Dialog from "@designsystem/component/dialog/dialog";
import {css} from "styled-components";
import CustomStyle from "@designsystem/component/CustomStyle";

function InvitationDashboard() {
    const [showCreateDesignDialog, setShowCreateDesignDialog] = useState(false);
    const [showRemoveDesignDialog, setShowRemoveDesignDialog] = useState(false);
    const [showEditDesignDialog, setShowEditDesignDialog] = useState(false);
    const [showPayWaterMarkDialog, setShowPayWaterMarkDialog] = useState(false);
    const [showRemoveWaterMarkDialog, setShowRemoveWaterMarkDialog] = useState(false);

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
            case 'removeWaterMark':
                if (!weddingDashboard) break;
                if (weddingDashboard.invitation === 0) {
                    setShowPayWaterMarkDialog(true);
                    break;
                }

                setShowRemoveWaterMarkDialog(true);
                break;
        }
    };

    const removeWaterWater = async () => {
        const url = selectedWeddingInfo?.url;
        if (!url) return;

        try {
            await weddingApi.removeWatermark(url);
            alert('워터마크 제거 성공');
        } catch (error) {
            console.error(error);
            alert('워터마크 제거 실패 - 고객센터에 문의해 주세요');
            if (isAxiosError(error) && error.response) {
                if (error.status === 401 || error.status === 400) {
                    alert(error.response.data.message);
                }
            }
        } finally {
            setShowRemoveWaterMarkDialog(false);
            setSelectedWeddingInfo(undefined);
        }
    }

    return (
        <Row flex={1} $customStyle={css`
            background: white;
            overflow-y: scroll;
        `}>
            <Column gap={44} $alignItems={'stretch'} $customStyle={css`
                margin-left: 64px;
            `}>
                <Row style={{marginTop: 64}}>
                    <Column gap={8}>
                        <Text type={'h5'} customStyle={css`
                            color: black;
                        `}>내 디자인</Text>
                        <Text type={'p3'} customStyle={css`
                            color: var(--g-500);
                        `}>원하는 청첩장을 만들어보세요!</Text>
                    </Column>
                    <Spacer/>
                    {weddingDashboard && (
                        <Text type={'p3'} customStyle={css`
                            align-self: flex-end;
                            cursor: pointer;
                            color: var(--g-500);
                        `} onClick={() => {
                            setShowPayWaterMarkDialog(true);
                        }}>워터마크 제거 가능 횟수 {weddingDashboard?.invitation}</Text>
                    )}
                </Row>
                <CustomStyle $customStyle={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
                    gap: 28px;
                    justify-items: start;
                `}>
                    <CustomStyle as={'button'} $customStyle={css`
                        display: flex;
                        width: 300px;
                        height: 420px;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid var(--p-800);
                        outline: none;
                        border-radius: 12px;
                        background: white;
                        cursor: pointer;
                    `} onClick={() => {
                        setShowCreateDesignDialog(true);
                    }}>
                        <Column gap={8} $alignItems={'center'}>
                            <Icon iconType={IconType.AddLine} size={28} customStyle={css`
                                fill: var(--g-600);
                            `}/>
                            <Text type={'p4'} customStyle={css`
                                color: var(--g-500);
                            `}>새 디자인 만들기</Text>
                        </Column>
                    </CustomStyle>
                    {weddingDashboard ? (
                        weddingDashboard.weddingInfo.map((weddingInfo, index) =>
                            <DashboardInvitationCell key={index} weddingInfo={weddingInfo} onClick={async type => {
                                await onClickDashboardCell(type, weddingInfo);
                            }}/>
                        )
                    ) : (
                        <div>...</div>
                    )}{/* TODO: Shimmer */}
                </CustomStyle>
                <Spacer h={32}/>
            </Column>
            {showCreateDesignDialog && <CreateDesignDialog dismiss={() => setShowCreateDesignDialog(false)}/>}
            {showRemoveDesignDialog &&
                <Dialog
                    title={'정말 청첩장을\n삭제하시겠습니까?'}
                    dismiss={() => setShowRemoveDesignDialog(false)}
                    dismissButtonProps={{
                        text: '취소',
                        customStyle: css`
                            color: var(--status-error);
                            background: rgba(var(--status-error), 0.1);
                        `
                    }}
                    confirmButtonProps={{
                        text: '삭제',
                        onClick: onClickRemoveDashboard,
                        customStyle: css`
                            background: var(--status-error);
                        `
                    }}
                />
            }
            {showEditDesignDialog && selectedWeddingInfo &&
                <EditDesignDialog originUrl={selectedWeddingInfo.url} dismiss={() => setShowEditDesignDialog(false)}/>}
            {showPayWaterMarkDialog && (
                <PayWaterMarkDialog
                    dismiss={() => setShowPayWaterMarkDialog(false)}
                />
            )}
            {showRemoveWaterMarkDialog && weddingDashboard && (
                <Dialog
                    title={'워터마크를\n제거하시겠습니까?'}
                    description={`남은 제거 가능 횟수: ${weddingDashboard.invitation}`}
                    dismiss={() => setShowRemoveWaterMarkDialog(false)}
                    dismissButtonProps={{
                        text: '취소',
                        customStyle: css`
                            color: var(--status-error);
                            background: rgba(var(--status-error), 0.1);
                        `
                    }}
                    confirmButtonProps={{
                        text: '제거',
                        onClick: removeWaterWater,
                        customStyle: css`
                            background: var(--status-error);
                        `
                    }}
                />
            )}
        </Row>
    );
}

export default InvitationDashboard;