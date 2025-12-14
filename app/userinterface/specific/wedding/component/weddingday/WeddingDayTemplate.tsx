import Text from "~/userinterface/component/Text";
import Divider from "~/userinterface/component/Divider";
import {css, cx} from "@linaria/core";
import type WeddingSchedule from "~/infrastructure/network/value/WeddingSchedule";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import type BaseInfo from "~/infrastructure/network/value/BaseInfo";
import DDay from "~/userinterface/specific/wedding/component/weddingday/DDay";
import {format} from "date-fns";
import View from "~/userinterface/core/View.tsx";
import FadeIn from "~/userinterface/specific/fadein/FadeIn";
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
            <View ui={css`
                gap: 12px;
                align-items: center;
                justify-content: center;
                background: white;
                height: 100dvh;
            `}>
                <Text size={36} weight={300} ui={css`
                    color: var(--g-500);
                `}>{isValidDate && date.getFullYear()}</Text>
                <Text size={36} weight={300} ui={css`
                    color: var(--g-500);
                `}>{isValidDate && format(date, 'MMMM d')}</Text>
            </View>
        );
    }

    return (
        <View ui={css`
            gap: 40px;
            align-items: center;
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
                <View ui={css`
                    align-self: stretch;
                    gap: 25px;
                `}>
                    <FadeIn>
                        <Divider/>
                    </FadeIn>
                    <FadeIn>
                        <View as={'table'} className={css`
                            gap: 8px;
                            margin: 24px 19px;
                        `}>
                            <View as={'thead'} className={css`
                                display: flex;
                                flex-direction: row;
                                padding: 12px 14px;
                            `}>
                                <View as={'tr'} className={css`
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: space-between;
                                    color: var(--g-500);
                                    flex: 1;
                                `}>
                                    {['일', '월', '화', '수', '목', '금', '토'].map((i, index) => (
                                        <FadeIn as={'th'} delay={index * 10} ui={css`
                                        `} key={index}>
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
                            <View as={'tbody'} className={css`
                                gap: 4px;
                            `}>
                                {calendar && calendar.map((week, weekIndex) => (
                                    <View as={'tr'} key={weekIndex} className={css`
                                        display: flex;
                                        flex-direction: row;
                                        align-items: flex-start;
                                    `}>
                                        {week.map((day, dayIndex) => (
                                            <FadeIn key={dayIndex} delay={weekIndex * 160 + dayIndex * 160}>
                                                {provided => (
                                                    <View
                                                        as={'td'}
                                                        key={dayIndex}
                                                        ref={provided.ref}
                                                        className={cx(
                                                            css`
                                                                display: flex;
                                                                flex-direction: row;
                                                                align-items: center;
                                                                justify-content: center;
                                                                flex: 1;
                                                                height: 48px;
                                                                border-radius: 100px;
                                                            `,
                                                            day.isWeddingDay && css`
                                                                    background: var(--p-300);
                                                            `,
                                                            provided.style
                                                        )}
                                                    >
                                                        <Text
                                                            font={'Pretendard'} size={16} weight={300}
                                                            ui={(dayIndex === 0 || dayIndex === 6) ?
                                                                css`
                                                                    opacity: 0.4;
                                                                ` : undefined
                                                            }
                                                        >
                                                            {day.day ?? ''}
                                                        </Text>
                                                    </View>
                                                )}
                                            </FadeIn>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                    </FadeIn>
                    <FadeIn>
                        <Divider/>
                    </FadeIn>
                </View>
            )}
            {weddingSchedule.dday && (
                <DDay
                    baseInfo={baseInfo}
                    weddingSchedule={weddingSchedule}
                />
            )}
        </View>
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
