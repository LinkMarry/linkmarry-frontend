import React, {useEffect, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import styled, {css} from "styled-components";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import FadeIn from "@src/component/fadein/FadeIn";

export type DDayStyle = 'style1' | 'style2';
type RemainTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface Props {
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    dDayStyle: DDayStyle;
}

function DDay(
    {
        baseInfo,
        weddingSchedule,
        dDayStyle
    }: Props
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
            <FadeIn>
                <Row gap={4}>
                    <Text size={14} weight={300}>{first.name}</Text>
                    <Icon
                        iconType={IconType.HeartFill}
                        size={16}
                        ui={css`
                            fill: black;
                        `}
                    />
                    <Text size={14} weight={300}>{second.name}의 결혼식이</Text>
                    <Text size={14} weight={300} ui={css`
                        color: var(--p-800);
                    `}>{remainingTime.days}</Text>
                    <Text size={14} weight={300}>일 남았습니다.</Text>
                </Row>
            </FadeIn>
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
                <Row gap={12} $alignItems={'center'} css={css`
                    padding: 0 50px;
                `}>
                    <FadeIn>
                        <S.dateCell>
                            <Text size={12} weight={400} ui={css`
                                color: var(--g-300);
                            `}>DAYS</Text>
                            <Text size={24} weight={300} ui={css`
                                color: var(--g-600);
                            `}>{remainingTime.days}</Text>
                        </S.dateCell>
                    </FadeIn>
                    <FadeIn delay={120}>
                        <S.dateCell>
                            <Text size={12} weight={400} ui={css`
                                color: var(--g-300);
                            `}>HOUR</Text>
                            <Text size={24} weight={300} ui={css`
                                color: var(--g-600);
                            `}>{remainingTime.hours}</Text>
                        </S.dateCell>
                    </FadeIn>
                    <FadeIn delay={240}>
                        <S.dateCell>
                            <Text size={12} weight={400} ui={css`
                                color: var(--g-300);
                            `}>MIN</Text>
                            <Text size={24} weight={300} ui={css`
                                color: var(--g-600);
                            `}>{remainingTime.minutes}</Text>
                        </S.dateCell>
                    </FadeIn>
                    <FadeIn delay={360}>
                        <S.dateCell>
                            <Text size={12} weight={400} ui={css`
                                color: var(--g-300);
                            `}>SEC</Text>
                            <Text size={24} weight={300} ui={css`
                                color: var(--g-600);
                            `}>{remainingTime.seconds}</Text>
                        </S.dateCell>
                    </FadeIn>
                </Row>
            )
        case 'style2':
            return (
                <Row $alignItems={'flex-end'}>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} ui={css`
                            color: var(--g-300);
                        `}>SEC</Text>
                        <Text size={24} weight={300} ui={css`
                            color: var(--g-600);
                        `}>{remainingTime.days}</Text>
                    </Column>
                    <Text size={24} weight={300} ui={css`
                        color: var(--g-600);
                    `} style={{width: 28, textAlign: 'center'}}>:</Text>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} ui={css`
                            color: var(--g-300);
                        `}>HOUR</Text>
                        <Text size={24} weight={300} ui={css`
                            color: var(--g-600);
                        `}>{remainingTime.hours}</Text>
                    </Column>
                    <Text size={24} weight={300} ui={css`
                        color: var(--g-600);
                    `} style={{width: 28, textAlign: 'center'}}>:</Text>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} ui={css`
                            color: var(--g-300);
                        `}>MIN</Text>
                        <Text size={24} weight={300} ui={css`
                            color: var(--g-600);
                        `}>{remainingTime.minutes}</Text>
                    </Column>
                    <Text size={24} weight={300} ui={css`
                        color: var(--g-600);
                    `} style={{width: 28, textAlign: 'center'}}>:</Text>
                    <Column gap={4} $alignItems={'center'}>
                        <Text size={12} weight={400} ui={css`
                            color: var(--g-300);
                        `}>SEC</Text>
                        <Text size={24} weight={300} ui={css`
                            color: var(--g-600);
                        `}>{remainingTime.seconds}</Text>
                    </Column>
                </Row>
            )
    }
}

const S = {
    dateCell: styled.div`
        display: flex;
        flex-direction: column;
        width: 64px;
        padding: 17px 16px 16px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        gap: 4px;
        background: white;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16);
    `
}

function parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month는 0부터 시작하므로 1을 빼줍니다.
}

export default DDay;
