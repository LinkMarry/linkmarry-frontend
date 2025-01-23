import {format} from "date-fns";

export default interface WeddingStatisticsInfo {
    // UUID
    id: string;
    
    // 통계 날짜 2020-02-02 형태
    date: string;
    
    // 당일 방문자 수
    visitorCnt: number;
    
    // 당일 링크 공유 수
    linkShareCnt: number;
}

const calculateStartDate = (infos: WeddingStatisticsInfo[], daysAgo: number): Date => {
    const today = new Date();
    const oneWeekAgo = addDays(today, -daysAgo);
    const minInfoDate = infos.length > 0 ? new Date(Math.min(...infos.map(info => new Date(info.date).getTime()))) : today;
    return minInfoDate < oneWeekAgo ? minInfoDate : oneWeekAgo;
};

export const fillMissingDates = (infos: WeddingStatisticsInfo[]): WeddingStatisticsInfo[] => {
    const startDate = calculateStartDate(infos, 7);
    const endDate = new Date();
    const filledInfos: WeddingStatisticsInfo[] = [];
    const dateMap = new Map(infos.map(info => [info.date, info]));

    for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
        if (dateMap.has(format(date, 'yyyy-MM-dd'))) {
            filledInfos.push(dateMap.get(format(date, 'yyyy-MM-dd'))!);
        } else {
            filledInfos.push({
                id: "", // UUID를 생성해서 넣을 수 있습니다.
                date: format(date, 'yyyy-MM-dd'),
                visitorCnt: 0,
                linkShareCnt: 0
            });
        }
    }
    
    console.log(filledInfos);

    return filledInfos;
};

const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};