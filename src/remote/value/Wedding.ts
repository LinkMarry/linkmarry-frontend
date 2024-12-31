import BaseInfo from "./BaseInfo";
import WeddingSchedule from "./WeddingSchedule";
import WeddingPlace from "./WeddingPlace";
import Greeting from "./Greeting";
import BaseMusic from "./BaseMusic";
import LinkShare from "./LinkShare";
import MoneyInfo from "./MoneyInfo";
import Video from "./Video";
import Phone from "./Phone";
import Rsvp from "./Rsvp";
import GuestComment from "./GuestComment";

export default interface Wedding {
    url: string; // URL 값
    position: number[] // 아래 내용 위치
    baseInfo: BaseInfo; // 기본 정보
    weddingSchedule: WeddingSchedule; // 예식 일시
    weddingPlace: WeddingPlace; // 예식 장소
    greeting: Greeting; // 인사말
    guestComment: GuestComment; // 방명록
    baseMusic: BaseMusic; // 배경음악
    linkShare: LinkShare; // 링크 공유
    moneyInfo: MoneyInfo; // 축의금
    video: Video; // 영상
    phone: Phone; // 전화번호
    rsvp: Rsvp; // 참석의사
    imgList: string[] // 갤러리
}