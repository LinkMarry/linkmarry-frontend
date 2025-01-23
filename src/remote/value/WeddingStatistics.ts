import WeddingStatisticsInfo from "@remote/value/WeddingStatisticsInfo";
import RsvpInfo from "@remote/value/RsvpInfo";

export default interface WeddingStatistics {
    // 총 방문자 수
    totalVisitorCnt: number;

    // 총 링크 공유 수
    totalLinkShareCnt: number;

    // 일일 방문자 정보
    weddingStatisticsInfos: WeddingStatisticsInfo[];

    // RSVP 전체
    rsvpInfos: RsvpInfo[];

    // 모바일 방문자 수
    mobileCnt: number;

    // 데스크탑 방문자 수
    desktopCnt: number;

    // 모청 생성일
    createdDate: string;
}