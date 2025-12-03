import {dummyBaseInfo} from "@src/infrastructure/network/value/BaseInfo";
import {dummyWeddingSchedule} from "@src/infrastructure/network/value/WeddingSchedule";
import {dummyWeddingPlace} from "@src/infrastructure/network/value/WeddingPlace";
import {dummyGreeting} from "@src/infrastructure/network/value/Greeting";
import {dummyBackgroundMusic} from "@src/infrastructure/network/value/BackgroundMusic";
import {dummyLinkShare} from "@src/infrastructure/network/value/LinkShare";
import {dummyMoneyInfo} from "@src/infrastructure/network/value/MoneyInfo";
import {dummyVideo} from "@src/infrastructure/network/value/Video";
import {dummyPhone} from "@src/infrastructure/network/value/Phone";
import {dummyRsvp} from "@src/infrastructure/network/value/Rsvp";
import {dummyGuestComment} from "@src/infrastructure/network/value/GuestComment";
import {dummyWeddingDesign} from "@src/infrastructure/network/value/WeddingDesign";
import {dummyComments} from "@src/infrastructure/network/value/Comment";
import type Comment from "@src/infrastructure/network/value/Comment";
import {dummyGallery} from "@src/infrastructure/network/value/Gallery";
import type {WeddingDto} from "@src/infrastructure/network/value/WeddingDto.ts";

export default interface Wedding extends WeddingDto {
    // 방명록 리스트
    guestCommentList: Comment[];

    // 워터마크 제거 여부
    waterMark: boolean;
}

export const dummyWedding: Wedding = {
    url: 'sample',
    name: 'sample',
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
