import {parse} from "date-fns";

export default interface WeddingSchedule {
    // 예식 일시 (yyyy-MM-dd 형태)
    weddingDate: string;

    // 예식 시간 (hh:mm 형태)
    weddingTime: string;

    // 캘린더 표시 상태
    calendar: boolean;

    // 디데이 표시 상태
    dday: boolean;
}

export const defaultWeddingSchedule: WeddingSchedule = {
    weddingDate: '',
    weddingTime: '',
    calendar: true,
    dday: true
}

export const dummyWeddingSchedule: WeddingSchedule = {
    weddingDate: "2025-07-01",
    weddingTime: "16:30",
    calendar: true,
    dday: true
}

export function getDetails(weddingSchedule: WeddingSchedule) {
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());

    return {
        dateString,
        date,
        isValidDate
    }
}