import React from 'react';
import type {Route} from './+types/notification-detail';
import notificationApi from "~/infrastructure/network/api/notification-api.ts";
import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import NotificationDetailComp from "~/userinterface/NotificationDetailComp.tsx";


export async function loader({params}: Route.LoaderArgs) {
    const {data} = await notificationApi.getNotification(Number(params.id));
    console.log(data);
    return data;
}

function NotificationDetail(
    {
        loaderData,
    }: Route.ComponentProps
) {
    return (
        <MainWrapper>
            <NotificationDetailComp notification={loaderData}/>
        </MainWrapper>
    );
}

export default NotificationDetail;