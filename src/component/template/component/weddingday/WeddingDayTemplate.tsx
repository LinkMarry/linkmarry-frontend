import React from 'react';
import Text from "@designsystem/component/Text";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Divider from "@designsystem/component/Divider";
import styled, {css} from "styled-components";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import BaseInfo from "@remote/value/BaseInfo";
import DDay, {DDayStyle} from "@src/component/template/component/weddingday/DDay";
import {format, parse} from "date-fns";
import CustomStyle from "@designsystem/core/CustomStyle";
import FadeIn from "@src/component/fadein/FadeIn";

interface Props {
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    dDayStyle: DDayStyle;
}

function WeddingDayTemplate(
    {
        baseInfo,
        weddingSchedule,
        dDayStyle
    }: Props
) {
    const weddingDate = weddingSchedule.weddingDate;
    const date = parse(weddingDate, 'yyyy-MM-dd', new Date());
    const isValidDate = !isNaN(date.getTime());
    const calendar = isValidDate ? getCalendar(date) : null;

    if (!weddingSchedule.calendar && !weddingSchedule.dday) {
        return (
            <Column gap={12} $alignItems={'center'} $justifyContent={'center'} $customStyle={css`
                background: white;
                height: 100vh;
            `}>
                <Text size={36} weight={300} customStyle={css`
                    color: var(--g-500);
                `}>{isValidDate && date.getFullYear()}</Text>
                <Text size={36} weight={300} customStyle={css`
                    color: var(--g-500);
                `}>{isValidDate && format(date, 'MMMM d')}</Text>
            </Column>
        )
    }

    return (
        <Column $alignItems={'center'} gap={40} $customStyle={css`
            padding: 92px 22px;
            background: white;
        `}>
            <FadeIn>
                <Text size={20} weight={300} customStyle={css`
                    color: var(--g-600);
                `}>WEDDING DAY</Text>
            </FadeIn>
            {weddingSchedule.calendar && (
                <Column gap={25} $alignSelf={'stretch'} $alignItems={'stretch'}>
                    <FadeIn>
                        <Divider/>
                    </FadeIn>
                    <FadeIn>
                        <Column as={'table'} gap={8} $alignItems={'stretch'} $customStyle={css`
                            margin: 24px 19px;
                        `}>
                            <CustomStyle as={'thead'} $customStyle={css`
                                display: flex;
                                padding: 12px 20px;
                            `}>
                                <CustomStyle as={'tr'} $customStyle={css`
                                    display: flex;
                                    justify-content: space-between;
                                    color: var(--g-500);
                                    flex: 1;
                                `}>
                                    {['일', '월', '화', '수', '목', '금', '토'].map((i, index) => (
                                        <FadeIn delay={index * 10}>
                                            <th key={index}>
                                                <Text
                                                    font={'Pretendard'}
                                                    size={16}
                                                    weight={300}
                                                    customStyle={css`
                                                        color: var(--g-500);
                                                    `}
                                                >{i}</Text>
                                            </th>
                                        </FadeIn>
                                    ))}
                                </CustomStyle>
                            </CustomStyle>
                            <Column as={'tbody'} $alignItems={'stretch'} gap={4}>
                                {calendar && calendar.map((week, weekIndex) => (
                                    <Row as={'tr'} key={weekIndex}>
                                        {week.map((day, dayIndex) => (
                                            <FadeIn delay={weekIndex * 160 + dayIndex * 160}>
                                                {provided => (
                                                    <Row
                                                        key={dayIndex} as={'td'}
                                                        ref={provided.ref}
                                                        flex={1} $alignItems={'center'} $justifyContent={'center'}
                                                        $customStyle={css`
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
                                                            customStyle={css`
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
                    dDayStyle={dDayStyle}
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
            isWeddingDay: day === date.getDate() &&
                date.getMonth() === date.getMonth() &&
                date.getFullYear() === date.getFullYear()
        }))
    );
}

export default WeddingDayTemplate;
