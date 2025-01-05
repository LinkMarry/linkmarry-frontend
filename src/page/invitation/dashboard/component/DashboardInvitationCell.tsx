import React, {useState} from 'react';
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
import weddingApi from "@remote/api/WeddingApi";

export type DashboardInvitationCellClickType = 'remove' | 'edit';

interface DashboardInvitationCellProps {
    weddingInfo: WeddingInfo;
    onClick: (type: DashboardInvitationCellClickType) => void;

}

function DashboardInvitationCell(
    {
        weddingInfo,
        onClick
    }: DashboardInvitationCellProps
) {
    const [showPopover, setShowPopover] = useState(false);
    const navigate = useNavigate();

    const onClickPopover = async (type: DashboardPopoverClickType) => {
        switch (type) {
            case 'share':
                if (navigator.canShare()) break;
                try {
                    const {data: {baseInfo}} = await weddingApi.getWedding(weddingInfo.url);

                    await navigator.share({
                        title: `안녕하세요.
${baseInfo.groomName}, ${baseInfo.brideName}님의 링크메리 모바일 청첩장이 도착하였습니다.
청첩장을 확인하시려면 아래 링크를 클릭해 주세요.
따뜻한 축하와 함께 자리를 빛내 주시면 감사하겠습니다. 😊`,
                        url: `${window.location.origin}/wedding/${weddingInfo.url}`,
                    });
                } catch (error) {
                    console.error(error);
                }

                break;
            case 'copyLink':
                try {
                    await navigator.clipboard.writeText(weddingInfo.url);
                    alert("복사되었습니다. 원하는 곳에 붙여넣기하여 주세요.");
                } catch (error) {
                    console.error(error);
                    prompt("키보드의 ctrl+C 또는 마우스 오른쪽의 복사하기를 이용해주세요.", weddingInfo.url);
                }
                break;
            case 'editLink':
                onClick('edit');
                break;
            case 'guestComment':
                navigate(`guest-comment?url=${weddingInfo.url}`);
                break;
            case 'remove':
                onClick('remove');
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