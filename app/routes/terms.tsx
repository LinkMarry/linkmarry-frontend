import React, {useEffect, useRef} from 'react';
import NotificationDetailComp from "~/userinterface/NotificationDetailComp.tsx";
import notificationApi from "~/infrastructure/network/api/notification-api.ts";
import {compareDesc} from "date-fns";
import type {Route} from './+types/privacy-policy';
import MainWrapper from "~/userinterface/pattern/header/MainWrapper";
import {Navigate, useNavigate} from "react-router";
import View from "~/userinterface/core/View.tsx";
import {css} from "@linaria/core";
import Text from "~/userinterface/component/Text.tsx";
import Spacer from "~/userinterface/component/Spacer.tsx";
import Divider from "~/userinterface/component/Divider.tsx";


export async function loader() {
    const {data} = await notificationApi.getTermsNotifications();
    return {
        notifications: data.sort((a, b) => compareDesc(a.date, b.date))
    };
}

function Terms(
    {
        loaderData: {
            notifications
        },
        params: {
            date
        }
    }: Route.ComponentProps
) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const selectedNotification = date
        ? notifications.find(i => i.date === date)
        : notifications[0];

    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0);
    }, [date]);

    if (!selectedNotification) {
        return (
            <Navigate to={'/privacy-policy'}/>
        );
    }

    return (
        <MainWrapper scrollRef={scrollRef}>
            <NotificationDetailComp notification={selectedNotification}/>

            <View ui={css`
                align-items: center;
                padding: 0 16px;
                margin-bottom: 72px;
            `}>
                <View ui={css`
                    max-width: 720px;
                    width: 100%;
                    flex: 1;
                `}>
                    <Text type={'p1'} bold={true}>개인정보 처리방침 목록</Text>
                    <Spacer h={16}/>
                    {notifications.map((notification, index) => (
                        <>
                            <Divider/>
                            <View key={notification.id} onClick={() => {
                                navigate(`/terms/${notification.date}`);
                            }} ui={css`
                                flex-direction: row !important;
                                gap: 16px;
                                padding: 16px 0;
                                cursor: pointer;
                            `}>
                                <Text>{notification.date}</Text>
                                <Text>{notification.title}</Text>
                            </View>
                            {index === notifications.length - 1 && (
                                <Divider/>
                            )}
                        </>
                    ))}
                </View>
            </View>
        </MainWrapper>
    );
}

export default Terms;