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
