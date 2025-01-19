import BaseInfo, {dummyBaseInfo} from "@remote/value/BaseInfo";
import WeddingSchedule, {dummyWeddingSchedule} from "@remote/value/WeddingSchedule";
import WeddingPlace, {dummyWeddingPlace} from "@remote/value/WeddingPlace";
import Greeting, {dummyGreeting} from "@remote/value/Greeting";
import BaseMusic, {dummyBaseMusic} from "@remote/value/BaseMusic";
import LinkShare, {dummyLinkShare} from "@remote/value/LinkShare";
import MoneyInfo, {dummyMoneyInfo} from "@remote/value/MoneyInfo";
import Video, {dummyVideo} from "@remote/value/Video";
import Phone, {dummyPhone} from "@remote/value/Phone";
import Rsvp, {dummyRsvp} from "@remote/value/Rsvp";
import GuestComment, {dummyGuestComment} from "@remote/value/GuestComment";
import Template, {dummyTemplate} from "@remote/value/Template";
import Comment, {dummyComments} from "@remote/value/Comment";
import ImgDesign from "@remote/enumeration/ImgDesign";

export default interface Wedding {
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

    // 방명록 정보
    guestComment: GuestComment;

    // 방명록 리스트
    guestCommentList: Comment[];

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
    
    // 갤러리 디자인
    imgDesign: ImgDesign;

    // 워터마크 제거 여부
    waterMark: boolean;
}

export const dummyWedding: Wedding = {
    url: 'test',
    position: [],
    template: dummyTemplate,
    baseInfo: dummyBaseInfo,
    weddingSchedule: dummyWeddingSchedule,
    weddingPlace: dummyWeddingPlace,
    greeting: dummyGreeting,
    guestComment: dummyGuestComment,
    guestCommentList: dummyComments,
    baseMusic: dummyBaseMusic,
    linkShare: dummyLinkShare,
    moneyInfo: dummyMoneyInfo,
    video: dummyVideo,
    phone: dummyPhone,
    rsvp: dummyRsvp,
    imgList: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P5awDpltMID2v6ZF1G_z_PeLmwNLUFOONA&s',
        'https://image.yes24.com/goods/62188206/XL',
        'https://t1.daumcdn.net/news/202203/28/inews24/20220328094911808loli.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83SarITbsNC6VM6iy5QOTRkh-7BaissTcrQ&s'
    ],
    imgDesign: ImgDesign.SLIDE,
    waterMark: false
}