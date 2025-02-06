import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Button from "@designsystem/component/Button";
import makeText from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Spacer from "@designsystem/component/Spacer";
import Text from "@designsystem/component/Text";
import WeddingInfo from "@remote/value/WeddingInfo";
import DashboardPopover, {DashboardPopoverClickType} from "@page/invitation/dashboard/component/DashboardPopover";
import {useNavigate} from "react-router-dom";
import weddingApi from "@remote/api/WeddingApi";
import {getWeddingUrl} from "@util/string.util";

export type DashboardInvitationCellClickType = 'remove' | 'edit' | 'removeWaterMark';

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
    const weddingUrl = getWeddingUrl(weddingInfo.url);

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
                        url: weddingUrl,
                    });
                } catch (error) {
                    console.error(error);
                }

                break;
            case 'copyLink':
                try {
                    await navigator.clipboard.writeText(weddingUrl);
                    alert("복사되었습니다. 원하는 곳에 붙여넣기하여 주세요.");
                } catch (error) {
                    console.error(error);
                    prompt("키보드의 ctrl+C 또는 마우스 오른쪽의 복사하기를 이용해주세요.", weddingUrl);
                }
                break;
            case 'editLink':
                onClick('edit');
                break;
            case 'guestComment':
                navigate(`guest-comment/${weddingInfo.url}`);
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
                <Column gap={12} $alignItems={'stretch'} $customStyle={css`
                    padding: 20px;
                    background: var(--g-100);
                `}>
                    <Column gap={4} $alignItems={'stretch'}>
                        <Row gap={8}>
                            <S.urlLabel onClick={() => window.open(weddingUrl)}>{weddingUrl}</S.urlLabel>
                            <Spacer/>
                            <Icon
                                iconType={IconType.Detail}
                                size={20}
                                onClick={() => {
                                    setShowPopover(true);
                                }}
                                customStyle={css`
                                    cursor: pointer;
                                    fill: black;
                                `}
                            />
                        </Row>
                        <Text type={'caption1'} customStyle={css`
                            color: var(--g-500);
                        `}>{weddingInfo.createdDate}</Text>
                    </Column>
                    <Row gap={10}>
                        <Button
                            text={weddingInfo.waterMark ? '워터마크 제거' : '링크 가기'} role={'assistive'}
                            customStyle={css`
                                background: white;
                                flex: 1;
                            `}
                            onClick={() => {
                                if (weddingInfo.waterMark) {
                                    onClick('removeWaterMark');
                                } else {
                                    window.open(weddingUrl);
                                }
                            }}
                        />
                        <Button
                            text={'수정하기'}
                            role={'assistive'}
                            customStyle={css`
                                background: white;
                                flex: 1;
                            `}
                            onClick={() => {
                                navigate(`/dashboard/design/${weddingInfo.url}`);
                            }}
                        />
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
        border: 1px solid var(--g-200);
        border-radius: 12px;
        overflow: hidden;
        break-inside: avoid-column; // column 잘림 방지
    `,
    image: styled.img`
        display: flex;
        flex: 1;
        object-fit: cover;
        min-height: 0;
    `,
    urlLabel: styled.span`
        ${makeText('p5')};
        color: black;
        overflow-x: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        text-decoration: underline;
        cursor: pointer;
    `,
};

export default DashboardInvitationCell;