import React, {useState} from 'react';
import WeddingDashboard from "@remote/value/WeddingDashboard";
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import makeText, {TextType} from "@designsystem/foundation/text/textType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Spacer from "@designsystem/component/spacer";
import Text from "@designsystem/component/text";
import WeddingInfo from "@remote/value/WeddingInfo";
import DashboardPopover, {DashboardPopoverClickType} from "@page/invitation/dashboard/component/DashboardPopover";
import {useNavigate} from "react-router-dom";

interface InvitationCellProps {
    weddingInfo: WeddingInfo;
    onClickRemove: () => void;
}

function DashboardInvitationCell(
    {
        weddingInfo,
        onClickRemove
    }: InvitationCellProps
) {
    const [showPopover, setShowPopover] = useState(false);
    const navigate = useNavigate();

    const onClickPopover = (type: DashboardPopoverClickType) => {
        switch (type) {
            case 'share':
                break;
            case 'copyLink':
                break;
            case 'editLink':
                break;
            case 'guestComment':
                navigate(`guest-comment?url=${weddingInfo.url}`);
                break;
            case 'remove':
                onClickRemove();
                break;
        }
    }

    return (
        <S.container>
            <S.content>
                <S.image src={weddingInfo.img} alt=""/>
                <Column gap={12} $alignItems={'stretch'} style={{padding: 20, background: colors.g100}}>
                    <Column gap={4} $alignItems={'stretch'}>
                        <Row gap={8}>
                            <S.urlLabel>{weddingInfo.url}</S.urlLabel>
                            <Spacer/>
                            <Icon
                                type={IconType.Detail}
                                tint={colors.black}
                                size={20}
                                onClick={() => {
                                    setShowPopover(true);
                                }}
                                style={{
                                    cursor: "pointer",
                                }}
                            />
                        </Row>
                        <Text text={weddingInfo.createdDate} type={TextType.caption1} color={colors.g500}/>
                    </Column>
                    <Row gap={10}>
                        <Button text={'워터마크 제거'} role={'assistive'} style={{background: colors.white, flex: 1}}/>
                        <Button text={'수정하기'} role={'assistive'} style={{background: colors.white, flex: 1}}/>
                    </Row>
                </Column>
            </S.content>
            {showPopover && (
                <DashboardPopover
                    onClick={onClickPopover}
                    dismiss={() => {
                        setShowPopover(false);
                    }}
                />
            )}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        align-items: flex-end;
    `,
    content: styled.div`
        display: flex;
        width: 300px;
        height: 420px;
        flex-direction: column;
        border: 1px solid ${colors.g200};
        border-radius: 12px;
        overflow: hidden;
        break-inside: avoid-column; // column 잘림 방지
    `,
    image: styled.img`
        display: flex;
        flex: 1;
        object-fit: cover;
    `,
    urlLabel: styled.span`
        ${makeText(TextType.p5)};
        color: ${colors.black};
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `,
};

export default DashboardInvitationCell;