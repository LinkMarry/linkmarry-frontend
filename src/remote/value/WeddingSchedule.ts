export default interface WeddingSchedule {
    //예식 일시
    weddingDate: string;
    
    // 예식 시간 (21:30 형태)
    weddingTime: string;
    
    // 캘린더 표시 상태
    calendar: boolean;
    
    // 디데이 표시 상태
    dDay: boolean;
}