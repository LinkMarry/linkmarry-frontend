import {defaultBaseInfo} from "~/infrastructure/network/value/BaseInfo";
import type BaseInfo from "~/infrastructure/network/value/BaseInfo";
import {defaultWeddingSchedule} from "~/infrastructure/network/value/WeddingSchedule";
import type WeddingSchedule from "~/infrastructure/network/value/WeddingSchedule";
import {defaultWeddingPlace} from "~/infrastructure/network/value/WeddingPlace";
import type WeddingPlace from "~/infrastructure/network/value/WeddingPlace";
import {defaultGreeting} from "~/infrastructure/network/value/Greeting";
import type Greeting from "~/infrastructure/network/value/Greeting";
import {defaultBackgroundMusic} from "~/infrastructure/network/value/BackgroundMusic";
import type BackgroundMusic from "~/infrastructure/network/value/BackgroundMusic";
import {defaultLinkShare} from "~/infrastructure/network/value/LinkShare";
import type LinkShare from "~/infrastructure/network/value/LinkShare";
import {defaultMoneyInfo} from "~/infrastructure/network/value/MoneyInfo";
import type MoneyInfo from "~/infrastructure/network/value/MoneyInfo";
import {defaultVideo} from "~/infrastructure/network/value/Video";
import type Video from "~/infrastructure/network/value/Video";
import {defaultPhone} from "~/infrastructure/network/value/Phone";
import type Phone from "~/infrastructure/network/value/Phone";
import {defaultRsvp} from "~/infrastructure/network/value/Rsvp";
import type Rsvp from "~/infrastructure/network/value/Rsvp";
import {defaultGuestComment} from "~/infrastructure/network/value/GuestComment";
import type GuestComment from "~/infrastructure/network/value/GuestComment";
import {defaultWeddingDesign} from "~/infrastructure/network/value/WeddingDesign";
import type WeddingDesign from "~/infrastructure/network/value/WeddingDesign";
import {defaultGallery} from "~/infrastructure/network/value/Gallery";
import type Gallery from "~/infrastructure/network/value/Gallery";
import {positionList} from "~/infrastructure/network/value/Position";
import {type Position} from "~/infrastructure/network/value/Position";
import type Wedding from "~/infrastructure/network/value/Wedding";
import {dummyComments} from "~/infrastructure/network/value/Comment.ts";


export interface WeddingDto {
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

    // 방명록
    guestComment: GuestComment;

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

    // 갤러리
    gallery: Gallery;
}

export function makeDefaultWedding(url: string, name: string): Wedding {
    return {
        url,
        name,
        position: [...positionList],
        weddingDesign: defaultWeddingDesign,
        baseInfo: defaultBaseInfo,
        weddingSchedule: defaultWeddingSchedule,
        weddingPlace: defaultWeddingPlace,
        greeting: defaultGreeting,
        guestComment: defaultGuestComment,
        guestCommentList: dummyComments,
        backgroundMusic: defaultBackgroundMusic,
        linkShare: defaultLinkShare,
        moneyInfo: defaultMoneyInfo,
        video: defaultVideo,
        phone: defaultPhone,
        rsvp: defaultRsvp,
        gallery: defaultGallery,
        waterMark: false,
    };
}
