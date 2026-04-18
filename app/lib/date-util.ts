import {differenceInDays, differenceInMonths, differenceInWeeks, differenceInYears, format} from "date-fns";

export function getTimeAgo(date: Date): string {
    const now = new Date();

    const daysAgo = differenceInDays(now, date);
    const weeksAgo = differenceInWeeks(now, date);
    const monthsAgo = differenceInMonths(now, date);
    const yearsAgo = differenceInYears(now, date);

    let timeAgo;
    if (yearsAgo >= 1) {
        timeAgo = `${yearsAgo}년 전`;
    } else if (monthsAgo >= 1) {
        timeAgo = `${monthsAgo}달 전`;
    } else if (weeksAgo >= 1) {
        timeAgo = `${weeksAgo}주 전`;
    } else if (daysAgo >= 1) {
        timeAgo = `${daysAgo}일 전`;
    } else {
        timeAgo = format(date, 'h:mm a');
    }

    return timeAgo;
}

export function getCalendar(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    // 첫 번째 날과 마지막 날 구하기
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const lastDate = lastDay.getDate();

    const calendar = [];
    let week: (number | null)[] = [];

    // 첫 번째 주의 빈 칸 채우기
    for (let i = 0; i < firstDayOfWeek; i++) {
        week.push(null);
    }

    // 날짜 추가
    for (let d = 1; d <= lastDate; d++) {
        week.push(d);

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
        }))
    );
}

