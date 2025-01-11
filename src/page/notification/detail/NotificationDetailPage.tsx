import React, {useEffect, useState} from 'react';
import S from '@page/notification/detail/NotificationDetailPage.style';
import HasHeader from "@designsystem/component/header/hasHeader";
import {Column} from "@designsystem/component/flexLayout";
import {useNavigate, useParams} from "react-router-dom";
import notificationApi from "@remote/api/NotificationApi";
import Notification from "@remote/value/Notification";
import Text from "@designsystem/component/text";
import Button from "@designsystem/component/button";
import HorizontalDivider from "@designsystem/component/horizontalDivider";

function NotificationDetailPage() {
    const {id} = useParams();
    const numericId = Number(id);
    const [notification, setNotification] = useState<Notification>();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await notificationApi.getNotification(numericId);
                setNotification(data);
            } catch (error) {
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <HasHeader>
            <S.container>
                {notification && (
                    <Column gap={44} flex={1} $alignItems={'stretch'}>
                        <Column gap={16}>
                            <Column gap={8}>
                                <Text text={notification.title} type={'h4'}/>
                                <Text text={notification.date} type={'caption1'}/>
                            </Column>
                            <HorizontalDivider/>
                        </Column>
                        <Text text={notification.content} type={'p3'}/>
                        <Button text={'목록으로'} onClick={() => navigate('/notification')} role={'assistive'}
                                style={{alignSelf: 'center'}}/>
                    </Column>
                )}
            </S.container>
        </HasHeader>
    );
}

export default NotificationDetailPage;