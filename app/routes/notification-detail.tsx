import React from 'react';
import type {Route} from './+types/notification-detail';
import notificationApi from "~/infrastructure/network/api/notification-api.ts";
import {css, cx} from "@linaria/core";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import Text from "~/userinterface/component/Text.tsx";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";
import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import View from "~/userinterface/core/View.tsx";
import Markdown from "react-markdown";


export async function loader({params}: Route.LoaderArgs) {
    const {data} = await notificationApi.getNotification(Number(params.id));
    return data;
}

function NotificationDetail(
    {
        loaderData
    }: Route.ComponentProps
) {
    return (

        <MainWrapper>
            <View ui={css`
                align-items: center;
                padding: 72px 16px 40px 16px;

                ${responsive.notDesktop} {
                    padding-top: 24px;
                }
            `}>
                <View ui={css`
                    max-width: 720px;
                    width: 100%;
                    flex: 1;
                    gap: 24px;
                `}>
                    <View>
                        <Text type={'h5'} bold={true}>{loaderData.title}</Text>
                        <Text>{loaderData.date}</Text>
                        <Text>{loaderData.name}</Text>
                    </View>
                    <View ui={cx(
                        css`
                            flex-direction: row !important;
                            gap: 8px;
                            overflow-x: scroll;
                        `,
                        hideScrollBarStyle
                    )}>
                        <View>
                            <Markdown>
                                {loaderData.content}
                            </Markdown>
                        </View>
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
}

export default NotificationDetail;