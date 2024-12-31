export default interface WeddingSchedule {
    weddingDate: string; //예식 일시
    weddingTime: string; // 예식 시간 (21:30 형태)
    calendar: boolean; // 캘린더 표시 상태
    dDay: boolean; // 디데이 표시 상태
}