import React, {useEffect, useState} from 'react';
import HasHeader from "@designsystem/component/header/hasHeader";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import Notification from "@remote/value/Notification";
import {tagToKoreanRecord} from "@remote/enumeration/Tag";
import notificationApi from "@remote/api/NotificationApi";
import {useNavigate} from "react-router-dom";
import Spacer from "@designsystem/component/Spacer";
import styled, {css} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";

function NotificationPage() {
    const [notifications, setNotifications] = useState<Notification[]>();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await notificationApi.getNotifications();
                setNotifications(data);
            } catch (error) {
            }
        })();
    }, []);

    return (
        <HasHeader>
            <Row $alignItems={'stretch'} $alignSelf={'stretch'} $customStyle={css`
                padding: 64px 124px;
                overflow-y: scroll;
            `}>
                <Column gap={44} flex={1} $alignItems={'stretch'}>
                    <Text type={'h5'}>공지사항</Text>
                    <Column $alignItems={'stretch'}>
                        <S.header.row>
                            <S.header.cell>태그</S.header.cell>
                            <S.header.titleCell>제목</S.header.titleCell>
                            <S.header.cell>작성자</S.header.cell>
                            <S.header.cell>작성일</S.header.cell>
                        </S.header.row>
                        {notifications && notifications.map(notification => (
                            <S.body.row key={notification.id} onClick={() => {
                                navigate(`/notification/${notification.id}`);
                            }}>
                                <S.body.tagCell>{tagToKoreanRecord[notification.tag]}</S.body.tagCell>
                                <S.body.titleCell>{notification.title}</S.body.titleCell>
                                <S.body.nameCell>{notification.name}</S.body.nameCell>
                                <S.body.dateCell>{notification.date}</S.body.dateCell>
                            </S.body.row>
                        ))}
                        {notifications?.length === 0 && (
                            <Text type={'p3'} style={{
                                display: 'flex',
                                height: 200,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>공지사항이 없어요</Text>
                        )}
                    </Column>
                    <Spacer h={32}/>
                </Column>
            </Row>
        </HasHeader>
    );
}
const BaseRow = styled.div`
    display: flex;
    padding: 0 8px;
    height: 64px;
    align-items: stretch;
`;

const BaseCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    ${makeText('p4')};
`

const S = {
    header: {
        row: styled(BaseRow)`
            border-bottom: 1px solid black;
        `,
        titleCell: styled(BaseCell)`
            flex: 1;
        `,
        cell: BaseCell
    },
    body: {
        row: styled(BaseRow)`
            cursor: pointer;
        `,
        titleCell: styled(BaseCell)`
            flex: 1;
            justify-content: flex-start;
        `,
        tagCell: styled(BaseCell)`
            justify-content: flex-start;
            padding-left: 30px;
        `,
        nameCell: BaseCell,
        dateCell: styled(BaseCell)`
            color: var(--g-400);
        `
    },
}

export default NotificationPage;