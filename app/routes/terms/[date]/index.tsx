import {NotificationDetailContent, MainWrapper, View, Text, Spacer, Divider} from "~/components";
import React, {useEffect, useRef} from "react";

import {api} from "~/api/index.ts";
import {compareDesc} from "date-fns";
import type {Route} from "./+types/privacy-policy";

import {Navigate, useNavigate} from "react-router";

import {css} from "@linaria/core";

export async function loader() {
    const {data} = await api.notification.getTermsNotifications();
    return {
        notifications: data.sort((a, b) => compareDesc(a.date, b.date)),
    };
}

const TermsScreen = ({loaderData: {notifications}, params: {date}}: Route.ComponentProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const selectedNotification = date ? notifications.find(i => i.date === date) : notifications[0];

    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0);
    }, [date]);

    if (!selectedNotification) {
        return <Navigate to={"/privacy-policy"} />;
    }

    return (
        <MainWrapper scrollRef={scrollRef}>
            <NotificationDetailContent notification={selectedNotification} />

            <View
                ui={css`
                    align-items: center;
                    padding: 0 16px;
                    margin-bottom: 72px;
                `}
            >
                <View
                    ui={css`
                        max-width: 720px;
                        width: 100%;
                        flex: 1;
                    `}
                >
                    <Text type={"p1"} bold={true}>
                        개인정보 처리방침 목록
                    </Text>
                    <Spacer h={16} />
                    {notifications.map((notification, index) => (
                        <>
                            <Divider />
                            <View
                                key={notification.id}
                                flexDirection={"row"}
                                onClick={() => {
                                    navigate(`/terms/${notification.date}`);
                                }}
                                ui={css`
                                    gap: 16px;
                                    padding: 16px 0;
                                    cursor: pointer;
                                `}
                            >
                                <Text>{notification.date}</Text>
                                <Text>{notification.title}</Text>
                            </View>
                            {index === notifications.length - 1 && <Divider />}
                        </>
                    ))}
                </View>
            </View>
        </MainWrapper>
    );
};

export default TermsScreen;
