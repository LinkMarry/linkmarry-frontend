import React from 'react';
import Text from "@src/userinterface/component/Text";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Divider from "@src/userinterface/component/Divider";
import {css} from "styled-components";
import WeddingSchedule, {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import BaseInfo from "@src/infrastructure/network/value/BaseInfo";
import DDay from "@src/userinterface/specific/wedding/component/weddingday/DDay";
import {format} from "date-fns";
import View from "@src/userinterface/core/View";
import FadeIn from "@src/userinterface/specific/fadein/FadeIn";
import {ko} from "date-fns/locale";

interface Props {
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
}

function WeddingDayTemplate(
    {
        baseInfo,
        weddingSchedule,
    }: Props
) {
    const {date, isValidDate} = getDetails(weddingSchedule);
    const calendar = isValidDate ? getCalendar(date) : null;

    if (!weddingSchedule.calendar && !weddingSchedule.dday) {
        return (
            <Column $gap={12} $alignItems={'center'} $justifyContent={'center'} $ui={css`
                background: white;
                height: 100dvh;
            `}>
                <Text size={36} weight={300} ui={css`
                    color: var(--g-500);
                `}>{isValidDate && date.getFullYear()}</Text>
                <Text size={36} weight={300} ui={css`
                    color: var(--g-500);
                `}>{isValidDate && format(date, 'MMMM d')}</Text>
            </Column>
        )
    }

    return (
        <Column $alignItems={'center'} $gap={40} $ui={css`
            padding: 92px 22px;
            background: white;
        `}>
            <FadeIn>
                <Text size={20} weight={300} ui={css`
                    color: var(--g-600);
                `}>WEDDING DAY</Text>
            </FadeIn>
            <FadeIn>
                {isValidDate && (
                    <Text size={16} ui={css`
                        color: var(--g-900);
                        white-space: pre-wrap;
                        text-align: center;
                    `}>
                        {format(date, "yyyy년 M월 d일 EEEE", {locale: ko})}
                        {'\n'}
                        {format(date, "a h시 m분", {locale: ko})}
                    </Text>
                )}
            </FadeIn>
            {weddingSchedule.calendar && (
                <Column $gap={25} $alignSelf={'stretch'} $alignItems={'stretch'}>
                    <FadeIn>
                        <Divider/>
                    </FadeIn>
                    <FadeIn>
                        <Column as={'table'} $gap={8} $alignItems={'stretch'} $ui={css`
                            margin: 24px 19px;
                        `}>
                            <View as={'thead'} $ui={css`
                                display: flex;
                                padding: 12px 20px;
                            `}>
                                <View as={'tr'} $ui={css`
                                    display: flex;
                                    justify-content: space-between;
                                    color: var(--g-500);
                                    flex: 1;
                                `}>
                                    {['일', '월', '화', '수', '목', '금', '토'].map((i, index) => (
                                        <FadeIn as={'th'} delay={index * 10} key={index}>
                                            <Text
                                                font={'Pretendard'}
                                                size={16}
                                                weight={300}
                                                ui={css`
                                                    color: var(--g-500);
                                                `}
                                            >{i}</Text>
                                        </FadeIn>
                                    ))}
                                </View>
                            </View>
                            <Column as={'tbody'} $alignItems={'stretch'} $gap={4}>
                                {calendar && calendar.map((week, weekIndex) => (
                                    <Row as={'tr'} key={weekIndex}>
                                        {week.map((day, dayIndex) => (
                                            <FadeIn key={dayIndex} delay={weekIndex * 160 + dayIndex * 160}>
                                                {provided => (
                                                    <Row
                                                        key={dayIndex} as={'td'}
                                                        ref={provided.ref}
                                                        $flex={1} $alignItems={'center'} $justifyContent={'center'}
                                                        $ui={css`
                                                            height: 48px;
                                                            border-radius: 100px;
                                                            ${day.isWeddingDay && css`
                                                                background: var(--p-300);
                                                            `};
                                                            ${provided.style};
                                                        `}
                                                    >
                                                        <Text
                                                            font={'Pretendard'} size={16} weight={300}
                                                            ui={css`
                                                                ${(dayIndex === 0 || dayIndex === 6) && (
                                                                        css`
                                                                            opacity: 0.4;
                                                                        `
                                                                )}
                                                            `}
                                                        >
                                                            {day.day ?? ''}
                                                        </Text>
                                                    </Row>
                                                )}
                                            </FadeIn>
                                        ))}
                                    </Row>
                                ))}
                            </Column>
                        </Column>
                    </FadeIn>
                    <FadeIn>
                        <Divider/>
                    </FadeIn>
                </Column>
            )}
            {weddingSchedule.dday && (
                <DDay
                    baseInfo={baseInfo}
                    weddingSchedule={weddingSchedule}
                />
            )}
        </Column>
    );
}

function getCalendar(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    // 첫 번째 날과 마지막 날 구하기
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const lastDate = lastDay.getDate();

    const calendar = [];
    let week = [];

    // 첫 번째 주의 빈 칸 채우기
    for (let i = 0; i < firstDayOfWeek; i++) {
        week.push(null);
    }

    // 날짜 추가
    for (let date = 1; date <= lastDate; date++) {
        week.push(date);

        // 주가 끝나면 새로운 주를 시작
        if (week.length === 7) {
            calendar.push(week);
            week = [];
        }
    }

    // 마지막 주의 빈 칸 채우기
    while (week.length < 7) {
        week.push(null);
    }

    if (week.length > 0) {
        calendar.push(week);
    }

    return calendar.map(week =>
        week.map(day => ({
            day,
            isWeddingDay: day === date.getDate()
            // date.getMonth() === date.getMonth() &&
            // date.getFullYear() === date.getFullYear()
        }))
    );
}

export default WeddingDayTemplate;
