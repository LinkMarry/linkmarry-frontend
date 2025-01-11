export default interface WeddingSchedule {
    // 예식 일시 (yyyy-MM-dd 형태)
    weddingDate: string;
    
    // 예식 시간 (hh:mm 형태)
    weddingTime: string;
    
    // 캘린더 표시 상태
    calendar: boolean;
    
    // 디데이 표시 상태
    dDay: boolean;
}

export const defaultWeddingSchedule: WeddingSchedule = {
    weddingDate: '',
    weddingTime: '',
    calendar: true,
    dDay: true
}

export const dummyWeddingSchedule: WeddingSchedule = {
    weddingDate: '2025-02-01',
    weddingTime: '21:30',
    calendar: true,
    dDay: true
}