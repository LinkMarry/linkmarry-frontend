import {defaultBaseInfo} from "~/api/value/BaseInfo.ts";
import type BaseInfo from "~/api/value/BaseInfo.ts";
import {defaultWeddingSchedule} from "~/api/value/WeddingSchedule.ts";
import type WeddingSchedule from "~/api/value/WeddingSchedule.ts";
import {defaultWeddingPlace} from "~/api/value/WeddingPlace.ts";
import type WeddingPlace from "~/api/value/WeddingPlace.ts";
import {defaultGreeting} from "~/api/value/Greeting.ts";
import type Greeting from "~/api/value/Greeting.ts";
import {defaultBackgroundMusic} from "~/api/value/BackgroundMusic.ts";
import type BackgroundMusic from "~/api/value/BackgroundMusic.ts";
import {defaultLinkShare} from "~/api/value/LinkShare.ts";
import type LinkShare from "~/api/value/LinkShare.ts";
import {defaultMoneyInfo} from "~/api/value/MoneyInfo.ts";
import type MoneyInfo from "~/api/value/MoneyInfo.ts";
import {defaultVideo} from "~/api/value/Video.ts";
import type Video from "~/api/value/Video.ts";
import {defaultPhone} from "~/api/value/Phone.ts";
import type Phone from "~/api/value/Phone.ts";
import {defaultRsvp} from "~/api/value/Rsvp.ts";
import type Rsvp from "~/api/value/Rsvp.ts";
import {defaultGuestComment} from "~/api/value/GuestComment.ts";
import type GuestComment from "~/api/value/GuestComment.ts";
import {defaultWeddingDesign} from "~/api/value/WeddingDesign.ts";
import type WeddingDesign from "~/api/value/WeddingDesign.ts";
import {defaultGallery} from "~/api/value/Gallery.ts";
import type Gallery from "~/api/value/Gallery.ts";
import {positionList} from "~/api/value/Position.ts";
import {type Position} from "~/api/value/Position.ts";
import type Wedding from "~/api/value/Wedding.ts";
import {dummyComments} from "~/api/value/Comment.ts";


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
