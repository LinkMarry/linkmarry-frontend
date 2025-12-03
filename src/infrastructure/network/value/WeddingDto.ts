import {defaultBaseInfo} from "@src/infrastructure/network/value/BaseInfo";
import type BaseInfo from "@src/infrastructure/network/value/BaseInfo";
import {defaultWeddingSchedule} from "@src/infrastructure/network/value/WeddingSchedule";
import type WeddingSchedule from "@src/infrastructure/network/value/WeddingSchedule";
import {defaultWeddingPlace} from "@src/infrastructure/network/value/WeddingPlace";
import type WeddingPlace from "@src/infrastructure/network/value/WeddingPlace";
import {defaultGreeting} from "@src/infrastructure/network/value/Greeting";
import type Greeting from "@src/infrastructure/network/value/Greeting";
import {defaultBackgroundMusic} from "@src/infrastructure/network/value/BackgroundMusic";
import type BackgroundMusic from "@src/infrastructure/network/value/BackgroundMusic";
import {defaultLinkShare} from "@src/infrastructure/network/value/LinkShare";
import type LinkShare from "@src/infrastructure/network/value/LinkShare";
import {defaultMoneyInfo} from "@src/infrastructure/network/value/MoneyInfo";
import type MoneyInfo from "@src/infrastructure/network/value/MoneyInfo";
import {defaultVideo} from "@src/infrastructure/network/value/Video";
import type Video from "@src/infrastructure/network/value/Video";
import {defaultPhone} from "@src/infrastructure/network/value/Phone";
import type Phone from "@src/infrastructure/network/value/Phone";
import {defaultRsvp} from "@src/infrastructure/network/value/Rsvp";
import type Rsvp from "@src/infrastructure/network/value/Rsvp";
import {defaultGuestComment} from "@src/infrastructure/network/value/GuestComment";
import type GuestComment from "@src/infrastructure/network/value/GuestComment";
import {defaultWeddingDesign} from "@src/infrastructure/network/value/WeddingDesign";
import type WeddingDesign from "@src/infrastructure/network/value/WeddingDesign";
import {defaultGallery} from "@src/infrastructure/network/value/Gallery";
import type Gallery from "@src/infrastructure/network/value/Gallery";
import {positionList} from "@src/infrastructure/network/value/Position";
import {type Position} from "@src/infrastructure/network/value/Position";
import type Wedding from "@src/infrastructure/network/value/Wedding";
import {dummyComments} from "@src/infrastructure/network/value/Comment";


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

export function makeDefaultWedding(url: string, name: string): WeddingDto {
    return {
        url,
        name,
        position: positionList,
        weddingDesign: defaultWeddingDesign,
        baseInfo: defaultBaseInfo,
        weddingSchedule: defaultWeddingSchedule,
        weddingPlace: defaultWeddingPlace,
        greeting: defaultGreeting,
        guestComment: defaultGuestComment,
        backgroundMusic: defaultBackgroundMusic,
        linkShare: defaultLinkShare,
        moneyInfo: defaultMoneyInfo,
        video: defaultVideo,
        phone: defaultPhone,
        rsvp: defaultRsvp,
        gallery: defaultGallery
    };
}

export function toDomain(dto: WeddingDto, hasDummy: boolean): Wedding {
    return {
        url: dto.url,
        name: dto.name,
        position: dto.position,
        weddingDesign: dto.weddingDesign,
        baseInfo: dto.baseInfo,
        weddingSchedule: dto.weddingSchedule,
        weddingPlace: dto.weddingPlace,
        greeting: dto.greeting,
        guestComment: dto.guestComment,
        backgroundMusic: dto.backgroundMusic,
        linkShare: dto.linkShare,
        moneyInfo: dto.moneyInfo,
        video: dto.video,
        phone: dto.phone,
        rsvp: dto.rsvp,
        gallery: dto.gallery,
        waterMark: false,
        guestCommentList: hasDummy ? dummyComments : []
    }
}

export function toDTO(domain: Wedding): WeddingDto {
    return {
        url: domain.url,
        name: domain.name,
        position: domain.position,
        weddingDesign: domain.weddingDesign,
        baseInfo: domain.baseInfo,
        weddingSchedule: domain.weddingSchedule,
        weddingPlace: domain.weddingPlace,
        greeting: domain.greeting,
        guestComment: domain.guestComment,
        backgroundMusic: domain.backgroundMusic,
        linkShare: domain.linkShare,
        moneyInfo: domain.moneyInfo,
        video: domain.video,
        phone: domain.phone,
        rsvp: domain.rsvp,
        gallery: domain.gallery,
    }
}
