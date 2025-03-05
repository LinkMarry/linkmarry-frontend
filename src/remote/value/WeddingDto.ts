import BaseInfo, {defaultBaseInfo} from "@remote/value/BaseInfo";
import WeddingSchedule, {defaultWeddingSchedule} from "@remote/value/WeddingSchedule";
import WeddingPlace, {defaultWeddingPlace} from "@remote/value/WeddingPlace";
import Greeting, {defaultGreeting} from "@remote/value/Greeting";
import BaseMusic, {defaultBaseMusic} from "@remote/value/BaseMusic";
import LinkShare, {defaultLinkShare} from "@remote/value/LinkShare";
import MoneyInfo, {defaultMoneyInfo} from "@remote/value/MoneyInfo";
import Video, {defaultVideo} from "@remote/value/Video";
import Phone, {defaultPhone} from "@remote/value/Phone";
import Rsvp, {defaultRsvp} from "@remote/value/Rsvp";
import GuestComment, {defaultGuestComment} from "@remote/value/GuestComment";
import WeddingDesign, {defaultWeddingDesign} from "@remote/value/WeddingDesign";
import ImgDesign from "@remote/enumeration/ImgDesign";
import Gallery, {defaultGallery} from "@remote/value/Gallery";

export default interface WeddingDto {
    // URL 값
    url: string;

     // 아래 내용 위치
    position: number[];

    // 템플릿 정보
    weddingDesign: WeddingDesign;

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
    gallery: Gallery;
    imgList: string[];
}


export function makeDefaultWedding(url: string): WeddingDto {
    return {
        url,
        position: [],
        weddingDesign: defaultWeddingDesign,
        baseInfo: defaultBaseInfo,
        weddingSchedule: defaultWeddingSchedule,
        weddingPlace: defaultWeddingPlace,
        greeting: defaultGreeting,
        guestComment: defaultGuestComment,
        baseMusic: defaultBaseMusic,
        linkShare: defaultLinkShare,
        moneyInfo: defaultMoneyInfo,
        video: defaultVideo,
        phone: defaultPhone,
        rsvp: defaultRsvp,
        imgList: [],
        gallery: defaultGallery
    };
}
