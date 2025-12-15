import React, {type ComponentPropsWithoutRef, useState} from 'react';
import type {Route} from './+types/notification'
import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import {css, cx} from "@linaria/core";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text.tsx";
import notificationApi from "~/infrastructure/network/api/notification-api.ts";
import type Notification from "~/infrastructure/network/value/Notification.ts";
import {type Tag, tagToKoreanRecord, type TagWithAll} from "~/infrastructure/network/enumeration/Tag.ts";
import {format} from "date-fns";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";


export async function loader() {
    const {data} = await notificationApi.getNotifications();
    return {
        notifications: data
    };
}


function Notification(
    {
        loaderData: {
            // notifications
        }
    }: Route.ComponentProps
) {
    const [queryTag, setQueryTag] = useState<TagWithAll>('ALL');
    const notifications = [
        {
            title: 'test',
            date: new Date(),
            id: 0,
            tag: 'UPDATE'
        }
    ];
    const tags = [
        'ALL',
        'NOTIFICATION',
        'UPDATE',
        'ETC'
    ]
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
                    <Text type={'h5'} bold={true}>공지사항</Text>
                    <View ui={cx(
                        css`
                            flex-direction: row !important;
                            gap: 8px;
                            overflow-x: scroll;
                        `,
                        hideScrollBarStyle
                    )}>
                        {tags.map(tag => (
                            <TagCell
                                key={tag}
                                tag={tag}
                                selected={queryTag === tag}
                                onClick={() => setQueryTag(tag)}
                            />
                        ))}
                    </View>
                    <View ui={css`
                        border-top: 1px solid var(--g-200);
                    `}>
                        {notifications.length !== 0 ? notifications.map(notification => (
                            <NotificationCell
                                key={notification.id}
                                notification={notification}
                            />
                        )) : (
                            <Text>
                                공지가 없어요
                            </Text>
                        )}
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
}

interface TagCellProps extends ComponentPropsWithoutRef<'div'> {
    tag: Tag;
    selected: boolean;
}

function TagCell(
    {
        tag,
        selected,
        ...props
    }: TagCellProps
) {
    return (
        <Text type={'p3'} lineHeight={'auto'} ui={cx(
            css`
                padding: 8px 14px;
                border-radius: 36px;
                cursor: pointer;
                word-break: keep-all;
            `,
            selected ? css`
                background: var(--g-800);
                color: var(--g-50);
            ` : css`
                border: 1px solid var(--g-200);
                color: var(--g-700);
            `
        )} {...props}>{tagToKoreanRecord[tag]}</Text>
    )
}

interface NotificationCellProps {
    notification: Notification;
}

function NotificationCell(
    {
        notification
    }: NotificationCellProps
) {
    return (
        <View ui={css`
            ${responsive.desktop} {
                flex-direction: row !important;
                padding: 12px 20px;
            }

            padding: 12px 0;
        `}>
            <Text type={'caption1'} bold={true} ui={css`
                color: var(--g-800);
                width: 80px;
            `}>
                {tagToKoreanRecord[notification.tag]}
            </Text>
            <Text type={'p3'} ui={css`
                color: var(--g-900);
                flex: 1;
            `}>
                {notification.title}
            </Text>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
            `}>
                {format(notification.date, "yyyy.MM.dd")}
            </Text>
        </View>
    );
}

export default Notification;