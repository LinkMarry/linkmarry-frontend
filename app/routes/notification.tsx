import React, {type ComponentPropsWithoutRef, useMemo, useState} from 'react';
import type {Route} from './+types/notification'
import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import {css, cx} from "@linaria/core";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text.tsx";
import notificationApi from "~/infrastructure/network/api/notification-api.ts";
import type Notification from "~/infrastructure/network/value/Notification.ts";
import {tagToKoreanRecord, TagWithAll} from "~/infrastructure/network/enumeration/Tag.ts";
import {compareDesc, format} from "date-fns";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";
import {useNavigate} from "react-router";


export async function loader() {
    const {data} = await notificationApi.getNotifications();
    return {
        notifications: data.sort((a, b) => compareDesc(a.date, b.date))
    };
}


function Notification(
    {
        loaderData: {
            notifications
        }
    }: Route.ComponentProps
) {
    const [queryTag, setQueryTag] = useState<TagWithAll>('ALL');
    const navigate = useNavigate();
    const filteredNotifications = useMemo(() => {
        if (queryTag === 'ALL') {
            return notifications;
        }
        return notifications.filter(i => i.tag === queryTag);
    }, [queryTag]);

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
                        {TagWithAll.map(tag => (
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
                        {filteredNotifications.length !== 0 ? filteredNotifications.map(notification => (
                            <NotificationCell
                                key={notification.id}
                                notification={notification}
                                onClick={() => {
                                    navigate(`/notification/${notification.id}`);
                                }}
                            />
                        )) : (
                            <Text ui={css`
                                text-align: center;
                                margin-top: 32px;
                                color: var(--g-600);
                            `}>
                                공지가 없습니다
                            </Text>
                        )}
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
}

interface TagCellProps extends ComponentPropsWithoutRef<'div'> {
    tag: TagWithAll;
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
        <Text type={'p3'} lineHeight={'normal'} ui={cx(
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

interface NotificationCellProps extends ComponentPropsWithoutRef<'div'> {
    notification: Notification;
}

function NotificationCell(
    {
        notification,
        ...props
    }: NotificationCellProps
) {
    return (
        <View {...props} ui={css`
            ${responsive.desktop} {
                flex-direction: row !important;
                padding: 12px 20px;
            }

            padding: 12px 0;
            cursor: pointer;
        `}>
            <Text type={'caption1'} bold={true} ui={css`
                color: var(--g-800);
                width: 128px;
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