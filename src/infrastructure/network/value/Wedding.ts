import BaseInfo, {dummyBaseInfo} from "@src/infrastructure/network/value/BaseInfo";
import WeddingSchedule, {dummyWeddingSchedule} from "@src/infrastructure/network/value/WeddingSchedule";
import WeddingPlace, {dummyWeddingPlace} from "@src/infrastructure/network/value/WeddingPlace";
import Greeting, {dummyGreeting} from "@src/infrastructure/network/value/Greeting";
import BackgroundMusic, {dummyBackgroundMusic} from "@src/infrastructure/network/value/BackgroundMusic";
import LinkShare, {dummyLinkShare} from "@src/infrastructure/network/value/LinkShare";
import MoneyInfo, {dummyMoneyInfo} from "@src/infrastructure/network/value/MoneyInfo";
import Video, {dummyVideo} from "@src/infrastructure/network/value/Video";
import Phone, {dummyPhone} from "@src/infrastructure/network/value/Phone";
import Rsvp, {dummyRsvp} from "@src/infrastructure/network/value/Rsvp";
import GuestComment, {dummyGuestComment} from "@src/infrastructure/network/value/GuestComment";
import WeddingDesign, {dummyWeddingDesign} from "@src/infrastructure/network/value/WeddingDesign";
import Comment, {dummyComments} from "@src/infrastructure/network/value/Comment";
import Gallery, {dummyGallery} from "@src/infrastructure/network/value/Gallery";
import Position from "@src/infrastructure/network/value/Position";

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
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
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
