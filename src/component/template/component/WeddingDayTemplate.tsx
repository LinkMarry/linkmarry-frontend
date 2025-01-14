import React, {useEffect, useState} from 'react';
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import Icon, {IconType} from "@designsystem/foundation/icon";
import styled from "styled-components";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import BaseInfo from "@remote/value/BaseInfo";


interface WeddingDayProps {
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
}

function WeddingDayTemplate(
    {
        baseInfo,
        weddingSchedule,
    }: WeddingDayProps
) {
    const [remainingTime, setRemainingTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const weddingDate = weddingSchedule.weddingDate;
    const date = weddingDate ? parseDate(weddingDate) : null;  // 입력 날짜 파싱
    const calendar = date ? getCalendar(date) : null;

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

    return (
        <S.root>
            <Text color={colors.g600} size={20} weight={300}>
                WEDDING DAY
            </Text>
            {weddingSchedule.calendar && (
                <Column gap={25} $alignSelf={'stretch'} $alignItems={'stretch'}>
                    <HorizontalDivider/>
                    <S.table>
                        <thead>
                        <tr>
                            {['일', '월', '화', '수', '목', '금', '토'].map((i, index) => (
                                <th key={index}>
                                    <Text
                                        font={'Pretendard'}
                                        color={colors.g500}
                                        size={16}
                                        weight={300}
                                    >{i}</Text>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {calendar && calendar.map((week, index) => (
                            <tr key={index}>
                                {week.map((day, dayIndex) => (
                                    <td
                                        key={dayIndex}
                                        style={{
                                            background: day.isWeddingDay ? colors.p300 : undefined,
                                            borderRadius: 100
                                        }}
                                    >
                                        <Text font={'Pretendard'} size={16} weight={300}>
                                            {day.day ?? ''}
                                        </Text>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </S.table>
                    <HorizontalDivider/>
                </Column>
            )}
            {weddingSchedule.dDay && (
                <Column gap={24} $alignItems={'center'}>
                    <Row gap={12} $alignItems={'center'} style={{paddingLeft: 50, paddingRight: 50}}>
                        <S.dateCell>
                            <Text size={12} weight={400} color={colors.g300}>DAYS</Text>
                            <Text size={24} weight={300} color={colors.g600}>
                                {remainingTime.days}
                            </Text>
                        </S.dateCell>
                        <S.dateCell>
                            <Text size={12} weight={400} color={colors.g300}>HOUR</Text>
                            <Text size={24} weight={300} color={colors.g600}>
                                {remainingTime.hours}
                            </Text>
                        </S.dateCell>
                        <S.dateCell>
                            <Text size={12} weight={400} color={colors.g300}>MIN</Text>
                            <Text size={24} weight={300} color={colors.g600}>
                                {remainingTime.minutes}
                            </Text>
                        </S.dateCell>
                        <S.dateCell>
                            <Text size={12} weight={400} color={colors.g300}>SEC</Text>
                            <Text size={24} weight={300} color={colors.g600}>
                                {remainingTime.seconds}
                            </Text>
                        </S.dateCell>
                    </Row>
                    <Row gap={4}>
                        <Text size={14} weight={300}>{baseInfo.groomName}</Text>
                        <Icon
                            type={IconType.HeartFill}
                            size={16}
                            color={colors.black}
                        />
                        <Text size={14} weight={300}>{baseInfo.brideName}의 결혼식이</Text>
                        <Text size={14} weight={300}
                              color={colors.p800}>{remainingTime.days}</Text>
                        <Text size={14} weight={300}>일 남았습니다.</Text>
                    </Row>
                </Column>
            )}
        </S.root>
    );
}

const S = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 92px 22px;
        background: ${colors.white};
        gap: 40px;
    `,
    table: styled.table`
        display: flex;
        flex-direction: column;
        margin: 24px 19px;
        gap: 8px;
        align-items: stretch;

        thead {
            display: flex;
            padding: 12px 20px;

            tr {
                display: flex;
                justify-content: space-between;
                color: ${colors.g500};
                flex: 1;
            }
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: 4px;

            tr {
                display: flex;

                td {
                    &:first-child, &:last-child {
                        opacity: 0.4;
                    }

                    display: flex;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    height: 48px;
                }
            }
        }
    `,
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
};

function parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month는 0부터 시작하므로 1을 빼줍니다.
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