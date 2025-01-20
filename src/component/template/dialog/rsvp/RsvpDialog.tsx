import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {Column} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import Text from "@designsystem/component/text";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import Button from "@designsystem/component/button";
import Cookies from "js-cookie";
import Rsvp from "@remote/value/Rsvp";

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
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={24} $alignItems={'stretch'}>
                    <Column gap={4} $alignItems={'center'}>
                        <Text type={'h6'} style={{wordBreak: 'break-all', textAlign: 'center'}}>{rsvp.rsvpTitle}</Text>
                        <Text type={'caption1'} style={{wordBreak: 'break-all', textAlign: 'center'}} color={colors.g400}>{rsvp.rsvpContent}</Text>
                    </Column>
                    <HorizontalDivider/>
                    <Text type={'caption1'}>
                        <Column $alignItems={'center'}>
                            <span>{first.korean} {first.name} & {second.korean} {second.name}</span>
                            {isValidDate && (
                                <span>{format(date, 'yyyy년 M월 d일 EEEE a h시', {locale: ko})}</span>
                            )}
                            <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                        </Column>
                    </Text>
                </Column>
                <Column gap={12} $alignItems={'center'} $alignSelf={'stretch'}>
                    <Button text={'참석의사 전달하기'} onClick={onConfirm} style={{alignSelf: 'stretch'}}/>
                    <Text type={'caption1'} color={colors.g400} style={{cursor: 'pointer'}} onClick={() => {
                        Cookies.set(`hide_RsvpDialog_${url}`, 'true', {expires: 1});
                        dismiss();
                    }}>오늘 하루 보지 않기</Text>
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        ${applyBaseDialogContent()};
        flex-direction: column;
        max-width: 436px;
        width: 100vw;
        border-radius: 12px;
        background: ${colors.white};
        padding: 44px 24px;
        align-items: stretch;
        gap: 48px;
    `
}

export default RsvpDialog;