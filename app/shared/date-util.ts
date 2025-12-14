import {differenceInDays, differenceInMonths, differenceInWeeks, differenceInYears, format} from "date-fns";

export function getTimeAgo(date: Date): string {
    const now = new Date();

    const daysAgo = differenceInDays(now, date);
    const weeksAgo = differenceInWeeks(now, date);
    const monthsAgo = differenceInMonths(now, date);
    const yearsAgo = differenceInYears(now, date);

    let timeAgo;
    if (yearsAgo >= 1) {
        timeAgo = `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
    } else if (monthsAgo >= 1) {
        timeAgo = `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
    } else if (weeksAgo >= 1) {
        timeAgo = `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
    } else if (daysAgo >= 1) {
        timeAgo = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else {
        timeAgo = format(date, 'h:mm a');
    }
    return timeAgo;
}
