import React from 'react';
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import {Column} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import styled from "styled-components";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import BaseInfo from "@remote/value/BaseInfo";
import DDay, {DDayStyle} from "@src/component/template/component/weddingday/DDay";

interface WeddingDayProps {
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    dDayStyle: DDayStyle;
}

function WeddingDayTemplate(
    {
        baseInfo,
        weddingSchedule,
        dDayStyle
    }: WeddingDayProps
) {
    const weddingDate = weddingSchedule.weddingDate;
    const date = weddingDate ? parseDate(weddingDate) : null;  // 입력 날짜 파싱

    const calendar = date ? getCalendar(date) : null;

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
                <DDay
                    baseInfo={baseInfo}
                    weddingSchedule={weddingSchedule}
                    dDayStyle={dDayStyle}
                />
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
    `
};

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

function parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month는 0부터 시작하므로 1을 빼줍니다.
}

export default WeddingDayTemplate;