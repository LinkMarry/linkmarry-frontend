import React, {useEffect, useState} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import styled from "styled-components";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";

export type DDayStyle = 'style1' | 'style2';
type RemainTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface DDayProps {
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    dDayStyle: DDayStyle;
}

function DDay(
    {
        baseInfo,
        weddingSchedule,
        dDayStyle
    }: DDayProps
) {
    const [remainingTime, setRemainingTime] = useState<RemainTime>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const weddingDate = weddingSchedule.weddingDate;
    const date = weddingDate ? parseDate(weddingDate) : null;  // 입력 날짜 파싱

    useEffect(() => {
        const calculateRemainingTime = () => {
            if (!date) return;

            const now = new Date();
            const timeDiff = date.getTime() - now.getTime();

            // 시간 차가 음수일 경우 결혼식이 이미 지났다는 의미
            if (timeDiff <= 0) {
                setRemainingTime({days: 0, hours: 0, minutes: 0, seconds: 0});
                return;
            }

            setRemainingTime({
                days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)), // 남은 일수 
                hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
            });
        };

        calculateRemainingTime();
        const interval = setInterval(calculateRemainingTime, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [weddingDate]);

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <Column gap={24} $alignItems={'center'}>
            <RemainTimeComponent
                dDayStyle={dDayStyle}
                remainingTime={remainingTime}
            />
            <Row gap={4}>
                <Text size={14} weight={300}>{first.name}</Text>
                <Icon
                    type={IconType.HeartFill}
                    size={16}
                    color={colors.black}
                />
                <Text size={14} weight={300}>{second.name}의 결혼식이</Text>
                <Text size={14} weight={300}
                      color={colors.p800}>{remainingTime.days}</Text>
                <Text size={14} weight={300}>일 남았습니다.</Text>
            </Row>
        </Column>
    );
}

function RemainTimeComponent(
    {
        dDayStyle,
        remainingTime
    }: {
        dDayStyle: DDayStyle,
        remainingTime: RemainTime
    }
) {
    switch (dDayStyle) {
        case 'style1':
            return (
                <Row gap={12} $alignItems={'center'} style={{paddingLeft: 50, paddingRight: 50}}>
                    <S.dateCell>
                        <Text size={12} weight={400} color={colors.g300}>DAYS</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.days}</Text>
                    </S.dateCell>
                    <S.dateCell>
                        <Text size={12} weight={400} color={colors.g300}>HOUR</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.hours}</Text>
                    </S.dateCell>
                    <S.dateCell>
                        <Text size={12} weight={400} color={colors.g300}>MIN</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.minutes}</Text>
                    </S.dateCell>
                    <S.dateCell>
                        <Text size={12} weight={400} color={colors.g300}>SEC</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.seconds}</Text>
                    </S.dateCell>
                </Row>
            )
        case 'style2':
            return (
                <Row $alignItems={'flex-end'}>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} color={colors.g300}>SEC</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.days}</Text>
                    </Column>
                    <Text size={24} weight={300} color={colors.g600} style={{width: 28, textAlign: 'center'}}>:</Text>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} color={colors.g300}>HOUR</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.hours}</Text>
                    </Column>
                    <Text size={24} weight={300} color={colors.g600} style={{width: 28, textAlign: 'center'}}>:</Text>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} color={colors.g300}>MIN</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.minutes}</Text>
                    </Column>
                    <Text size={24} weight={300} color={colors.g600} style={{width: 28, textAlign: 'center'}}>:</Text>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} color={colors.g300}>SEC</Text>
                        <Text size={24} weight={300} color={colors.g600}>{remainingTime.seconds}</Text>
                    </Column>
                </Row>
            )
    }
}

const S = {
    dateCell: styled.div`
        display: flex;
        width: 64px;
        padding: 17px 16px 16px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        gap: 4px;
        background: ${colors.white};
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16);
    `
}

function parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month는 0부터 시작하므로 1을 빼줍니다.
}

export default DDay;