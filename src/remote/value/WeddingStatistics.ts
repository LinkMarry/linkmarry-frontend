import WeddingStatisticsInfo from "@remote/value/WeddingStatisticsInfo";
import RsvpInfo from "@remote/value/RsvpInfo";

export default interface WeddingStatistics {
    totalVisitorCnt: number; // 총 방문자 수
    totalLinkShareCnt: number; // 총 링크 공유 수
    weddingStatisticsInfos: WeddingStatisticsInfo[]; // 일일 방문자 정보
    rsvpInfos: RsvpInfo[]; // RSVP 전체
    mobileCnt: number; // 모바일 방문자 수
    desktopCnt: number; // 데스크탑 방문자 수
}