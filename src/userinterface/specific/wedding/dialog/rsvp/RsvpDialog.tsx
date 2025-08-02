import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@src/userinterface/pattern/dialog/BaseDialog";
import {css} from "styled-components";
import {Column} from "@src/userinterface/core/FlexLayout";
import Divider from "@src/userinterface/component/Divider";
import Text from "@src/userinterface/component/Text";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import WeddingSchedule from "@src/infrastructure/network/value/WeddingSchedule";
import WeddingPlace from "@src/infrastructure/network/value/WeddingPlace";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import Button from "@src/userinterface/component/Button";
import Rsvp from "@src/infrastructure/network/value/Rsvp";
import {useCookies} from "react-cookie";

interface RsvpDialogProps {
    url: string;
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    weddingPlace: WeddingPlace;
    rsvp: Rsvp;
    onConfirm: () => void;
    dismiss: () => void;
}

function RsvpDialog(
    {
        url,
        baseInfo,
        weddingSchedule,
        weddingPlace,
        rsvp,
        onConfirm,
        dismiss
    }: RsvpDialogProps
) {
    const cookieKey = `hide_RsvpDialog_${url}`;
    const [, setCookie] = useCookies([cookieKey]);
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $gap={48} $alignItems={'stretch'} $ui={css`
                ${applyBaseDialogContent()};
                max-width: 436px;
                width: 90vw;
                border-radius: 12px;
                background: white;
                padding: 44px 24px;
            `}>
                <Column $gap={24} $alignItems={'stretch'}>
                    <Column $gap={4} $alignItems={'center'}>
                        <Text type={'p1'} bold={true} ui={css`
                            word-break: break-all;
                            text-align: center;
                        `}>{rsvp.rsvpTitle}</Text>
                        <Text type={'caption1'} ui={css`
                            word-break: break-all;
                            text-align: center;
                            color: var(--g-400);
                        `}>{rsvp.rsvpContent}</Text>
                    </Column>
                    <Divider/>
                    <Text type={'caption1'}>
                        <Column $alignItems={'center'}>
                            <span>{first.korean} {first.name} & {second.korean} {second.name}</span>
                            {isValidDate && (
                                <span>{format(date, 'yyyy년 M월 d일 EEEE a h시 m분', {locale: ko})}</span>
                            )}
                            <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                        </Column>
                    </Text>
                </Column>
                <Column $gap={12} $alignItems={'center'} $alignSelf={'stretch'}>
                    <Button text={'참석의사 전달하기'} onClick={onConfirm} style={{alignSelf: 'stretch'}}/>
                    <Text
                        type={'caption1'}
                        ui={css`
                            color: var(--g-400);
                            cursor: pointer;
                        `}
                        onClick={() => {
                            const date = new Date();
                            date.setDate(date.getDate() + 1);

                            setCookie(cookieKey, 'true', {
                                expires: date
                            });
                            dismiss();
                        }}
                    >오늘 하루 보지 않기</Text>
                </Column>
            </Column>
        </BaseDialog>
    );
}

export default RsvpDialog;
