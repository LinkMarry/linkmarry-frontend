import BaseInfo from "@remote/value/BaseInfo";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import Greeting from "@remote/value/Greeting";
import BaseMusic from "@remote/value/BaseMusic";
import LinkShare from "@remote/value/LinkShare";
import MoneyInfo from "@remote/value/MoneyInfo";
import Video from "@remote/value/Video";
import Phone from "@remote/value/Phone";
import Rsvp from "@remote/value/Rsvp";
import GuestComment from "@remote/value/GuestComment";
import Template from "@remote/value/Template";

export default interface WeddingDto {
    // URL 값
    url: string;
    
     // 아래 내용 위치
    position: number[];
    
    // 템플릿 정보
    template: Template;
    
    // 기본 정보
    baseInfo: BaseInfo;
    
    // 예식 일시
    weddingSchedule: WeddingSchedule;
    
    // 예식 장소
    weddingPlace: WeddingPlace;
    
    // 인사말
    greeting: Greeting;
    
    // 방명록
    guestComment: GuestComment;
    
    // 배경음악
    baseMusic: BaseMusic;
    
    // 링크 공유
    linkShare: LinkShare;
    
    // 축의금
    moneyInfo: MoneyInfo;
    
    // 영상
    video: Video;
    
    // 전화번호
    phone: Phone;
    
    // 참석의사
    rsvp: Rsvp;
    
     // 갤러리
    imgList: string[];
}