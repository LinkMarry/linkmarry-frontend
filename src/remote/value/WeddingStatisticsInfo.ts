export default interface WeddingStatisticsInfo {
    id: string; // UUID
    date: Date; // 통계 날짜 2020-02-02 형태
    visitorCnt: number; // 당일 방문자 수
    linkShareCnt: number; // 당일 링크 공유 수
}