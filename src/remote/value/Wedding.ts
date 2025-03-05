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
import WeddingDesign, {dummyTemplate} from "@remote/value/WeddingDesign";
import Comment, {dummyComments} from "@remote/value/Comment";
import ImgDesign from "@remote/enumeration/ImgDesign";

export default interface Wedding {
    // URL 값
    url: string;

    // 아래 내용 위치
    position: number[];

    // 템플릿 정보
    template: WeddingDesign;

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
    url: 'sample',
    position: [
        2,
        3,
        4,
        5,
        8,
        9,
        10,
        11,
        12
    ],
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
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/252470f8-3c29-4e45-a05e-c18bc1abb488-GettyImages-jv11005063.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/1c4b84cb-c635-4bf3-a195-575902f33b07-GettyImages-jv11005081.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/41af240a-7157-4176-8203-75372d251004-GettyImages-jv11192610.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/19eeb9fd-5607-4e11-85af-d16f541ec7a6-GettyImages-jv11192626.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0a9efe7e-d26d-498a-b03e-e777b6a32bfd-GettyImages-jv11192637.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/f52bbe8a-77a7-45c1-b01f-4f865b5a7870-GettyImages-jv12578254.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/d2c09181-bb9f-4cd3-9196-e06f65140228-GettyImages-jv12585991.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/f754865a-5ced-4a93-bc07-40a1d637c20e-GettyImages-jv12586038.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/7e35f845-1eb5-4be8-b3f9-c5abbe8c4e3d-GettyImages-jv12586686.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/6f7b0399-70ed-43ae-80e6-a227fc4ab54c-GettyImages-jv12586709.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/da9ea1f5-bb5d-4e85-bed8-63c355ab3e3f-GettyImages-jv12586711%20%281%29.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/dc68fab8-0042-4b3f-9a2c-892cd722fd03-GettyImages-jv12586711.jpg.jpg"
    ],
    imgDesign: ImgDesign.SLIDE,
    waterMark: true
}
