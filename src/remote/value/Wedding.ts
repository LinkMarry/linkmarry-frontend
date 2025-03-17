import BaseInfo, {dummyBaseInfo} from "@remote/value/BaseInfo";
import WeddingSchedule, {dummyWeddingSchedule} from "@remote/value/WeddingSchedule";
import WeddingPlace, {dummyWeddingPlace} from "@remote/value/WeddingPlace";
import Greeting, {dummyGreeting} from "@remote/value/Greeting";
import BackgroundMusic, {dummyBackgroundMusic} from "@remote/value/BackgroundMusic";
import LinkShare, {dummyLinkShare} from "@remote/value/LinkShare";
import MoneyInfo, {dummyMoneyInfo} from "@remote/value/MoneyInfo";
import Video, {dummyVideo} from "@remote/value/Video";
import Phone, {dummyPhone} from "@remote/value/Phone";
import Rsvp, {dummyRsvp} from "@remote/value/Rsvp";
import GuestComment, {dummyGuestComment} from "@remote/value/GuestComment";
import WeddingDesign, {dummyWeddingDesign} from "@remote/value/WeddingDesign";
import Comment, {dummyComments} from "@remote/value/Comment";
import Gallery, {dummyGallery} from "@remote/value/Gallery";
import Position from "@remote/value/Position";

export default interface Wedding {
    // URL 값
    url: string;

    name: string;

    // 아래 내용 위치
    position: Position[];

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

    // 방명록 정보
    guestComment: GuestComment;

    // 방명록 리스트
    guestCommentList: Comment[];

    // 배경음악
    backgroundMusic: BackgroundMusic;

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

    // 갤러리 디자인
    gallery: Gallery;

    // 워터마크 제거 여부
    waterMark: boolean;
}

export const dummyWedding: Wedding = {
    url: 'sample',
    name: '',
    position: [
        2,
        3,
        4,
        5,
        8,
    ],
    weddingDesign: dummyWeddingDesign,
    baseInfo: dummyBaseInfo,
    weddingSchedule: dummyWeddingSchedule,
    weddingPlace: dummyWeddingPlace,
    greeting: dummyGreeting,
    guestComment: dummyGuestComment,
    guestCommentList: dummyComments,
    backgroundMusic: dummyBackgroundMusic,
    linkShare: dummyLinkShare,
    moneyInfo: dummyMoneyInfo,
    video: dummyVideo,
    phone: dummyPhone,
    rsvp: dummyRsvp,
    gallery: dummyGallery,
    waterMark: true
}
