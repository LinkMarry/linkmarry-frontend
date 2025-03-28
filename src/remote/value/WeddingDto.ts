import BaseInfo, {defaultBaseInfo} from "@remote/value/BaseInfo";
import WeddingSchedule, {defaultWeddingSchedule} from "@remote/value/WeddingSchedule";
import WeddingPlace, {defaultWeddingPlace} from "@remote/value/WeddingPlace";
import Greeting, {defaultGreeting} from "@remote/value/Greeting";
import BackgroundMusic, {defaultBackgroundMusic} from "@remote/value/BackgroundMusic";
import LinkShare, {defaultLinkShare} from "@remote/value/LinkShare";
import MoneyInfo, {defaultMoneyInfo} from "@remote/value/MoneyInfo";
import Video, {defaultVideo} from "@remote/value/Video";
import Phone, {defaultPhone} from "@remote/value/Phone";
import Rsvp, {defaultRsvp} from "@remote/value/Rsvp";
import GuestComment, {defaultGuestComment} from "@remote/value/GuestComment";
import WeddingDesign, {defaultWeddingDesign} from "@remote/value/WeddingDesign";
import Gallery, {defaultGallery} from "@remote/value/Gallery";
import Position, {positionList} from "@remote/value/Position";
import Wedding from "@remote/value/Wedding";
import {dummyComments} from "@remote/value/Comment";

export default interface WeddingDto {
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
