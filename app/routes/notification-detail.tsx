import {MainWrapper, NotificationDetailContent} from "~/components";
import React from "react";
import type {Route} from "./+types/notification-detail";
import {api} from "~/api/index.ts";

export async function loader({params}: Route.LoaderArgs) {
    const {data} = await api.notification.getNotification(Number(params.id));
    console.log(data);
    return data;
}

const NotificationDetail = ({loaderData}: Route.ComponentProps) => {
    return (
        <MainWrapper>
            <NotificationDetailContent notification={loaderData} />
        </MainWrapper>
    );
};

export default NotificationDetail;
