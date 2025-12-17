import React from 'react';
import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import Text from "~/userinterface/component/Text.tsx";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";
import Markdown from "react-markdown";
import type Notification from "~/infrastructure/network/value/Notification.ts";


interface NotificationDetailCompProps {
    notification: Notification;
}

function NotificationDetailComp(
    {
        notification
    }: NotificationDetailCompProps
) {
    return (
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
                    <Text type={'h5'} bold={true}>{notification.title}</Text>
                    <Text>{notification.date}</Text>
                    <Text>{notification.name}</Text>
                </View>
                <View ui={cx(
                    css`
                        flex-direction: row !important;
                        gap: 8px;
                        overflow-x: scroll;
                    `,
                    hideScrollBarStyle
                )}>
                    <View ui={css`
                        ul {
                            list-style: disc !important;
                            padding-left: 20px;
                        }

                        ol {
                            list-style: decimal !important;
                            padding-left: 20px;
                        }

                        li {
                            list-style-position: outside;
                        }
                    `}>
                        <Markdown>
                            {notification.content}
                        </Markdown>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default NotificationDetailComp;