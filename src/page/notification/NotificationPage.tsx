import React, {useEffect, useState} from 'react';
import S from './NotificationPage.style';
import HasHeader from "@designsystem/component/header/hasHeader";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";
import Notification from "@remote/value/Notification";
import {tagToKoreanRecord} from "@remote/enumeration/Tag";
import notificationApi from "@remote/api/NotificationApi";
import Cookies from "js-cookie";

function NotificationPage() {
    const [notifications, setNotifications] = useState<Notification[]>();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await notificationApi.getNotifications();
                setNotifications(data);
            } catch (error) {
            }
        })();
        console.log(Cookies.get('accessToken'))
        console.log(Cookies.get('refreshToken'))
    }, []);

    return (
        <HasHeader>
            <S.container>
                <Column gap={44} flex={1} $alignItems={'stretch'}>
                    <Text text={'공지사항'} type={TextType.h5}/>
                    <Column $alignItems={'stretch'}>
                        <S.header.row>
                            <S.header.cell>태그</S.header.cell>
                            <S.header.titleCell>제목</S.header.titleCell>
                            <S.header.cell>작성자</S.header.cell>
                            <S.header.cell>작성일</S.header.cell>
                        </S.header.row>
                        {notifications && notifications.map(notification => (
                            <S.body.row key={notification.id}>
                                <S.body.tagCell>{tagToKoreanRecord[notification.tag]}</S.body.tagCell>
                                <S.body.titleCell>{notification.title}</S.body.titleCell>
                                <S.body.nameCell>{notification.name}</S.body.nameCell>
                                <S.body.dateCell>{notification.date}</S.body.dateCell>
                            </S.body.row>
                        ))}
                        {notifications?.length === 0 && (
                            <Text text={'공지사항이 없어요'} type={TextType.p3} style={{
                                display: 'flex',
                                height: 200,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}/>
                        )}
                    </Column>
                </Column>
            </S.container>
        </HasHeader>
    );
}

export default NotificationPage;