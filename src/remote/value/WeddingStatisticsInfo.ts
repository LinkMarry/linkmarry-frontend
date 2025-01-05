export default interface WeddingStatisticsInfo {
    // UUID
    id: string;
    
    // 통계 날짜 2020-02-02 형태
    date: Date;
    
    // 당일 방문자 수
    visitorCnt: number;
    
    // 당일 링크 공유 수
    linkShareCnt: number;
}