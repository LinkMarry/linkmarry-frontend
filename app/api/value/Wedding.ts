import {dummyBaseInfo} from "~/api/value/BaseInfo.ts";
import {dummyWeddingSchedule} from "~/api/value/WeddingSchedule.ts";
import {dummyWeddingPlace} from "~/api/value/WeddingPlace.ts";
import {dummyGreeting} from "~/api/value/Greeting.ts";
import {dummyBackgroundMusic} from "~/api/value/BackgroundMusic.ts";
import {dummyLinkShare} from "~/api/value/LinkShare.ts";
import {dummyMoneyInfo} from "~/api/value/MoneyInfo.ts";
import {dummyVideo} from "~/api/value/Video.ts";
import {dummyPhone} from "~/api/value/Phone.ts";
import {dummyRsvp} from "~/api/value/Rsvp.ts";
import {dummyGuestComment} from "~/api/value/GuestComment.ts";
import {dummyWeddingDesign} from "~/api/value/WeddingDesign.ts";
import type Comment from "~/api/value/Comment.ts";
import {dummyComments} from "~/api/value/Comment.ts";
import {dummyGallery} from "~/api/value/Gallery.ts";
import type {WeddingDto} from "~/api/value/WeddingDto.ts";

export default interface Wedding extends WeddingDto {
    guestCommentList: Comment[];
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
    waterMark: false,
}
