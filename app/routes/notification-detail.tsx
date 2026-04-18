import React from 'react';
import type {Route} from './+types/notification-detail';
import notificationApi from "~/api/notification-api.ts";
import MainWrapper from "~/components/MainWrapper";
import NotificationDetailContent from "~/components/NotificationDetailContent.tsx";


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
            <NotificationDetailContent notification={loaderData}/>
        </MainWrapper>
    );
}

export default NotificationDetail;
