import {format, parse} from "date-fns";
import {type GreetingDesign} from "~/api/enumeration/GreetingDesign.ts";
import {type UserRole} from "~/api/enumeration/UserRole.ts";

import {
    type BackgroundMusic,
    type Video,
    type WeddingDesign,
    type Gallery,
    dummyBackgroundMusic,
    defaultBackgroundMusic,
    dummyVideo,
    defaultVideo,
    dummyWeddingDesign,
    defaultWeddingDesign,
    dummyGallery,
    defaultGallery,
} from "./design.ts";
import {type LinkShare, dummyLinkShare, defaultLinkShare} from "./common.ts";
import {type Rsvp, dummyRsvp, defaultRsvp} from "./rsvp.ts";
import {type GuestComment, type Comment, dummyGuestComment, defaultGuestComment, dummyComments} from "./guest.ts";

export interface BaseInfo {
    groomFirstName: string;
    groomLastName: string;
    groomEnglishName: string;
    groomFatherFirstName: string;
    groomFatherLastName: string;
    groomFatherStatus: boolean;
    groomMotherFirstName: string;
    groomMotherLastName: string;
    groomMotherStatus: boolean;
    groomFamilyName: string;
    groomFatherFamilyName: string;
    groomMotherFamilyName: string;
    brideFirstName: string;
    brideLastName: string;
    brideEnglishName: string;
    brideFatherFirstName: string;
    brideFatherLastName: string;
    brideFatherStatus: boolean;
    brideMotherFirstName: string;
    brideMotherLastName: string;
    brideMotherStatus: boolean;
    brideFamilyName: string;
    brideFatherFamilyName: string;
    brideMotherFamilyName: string;
    statusFlower: boolean;
    brideMarkFirst: boolean;
}

export const defaultBaseInfo: BaseInfo = {
    groomFirstName: "",
    groomLastName: "",
    groomEnglishName: "",
    groomFatherFirstName: "",
    groomFatherLastName: "",
    groomFatherStatus: false,
    groomMotherFirstName: "",
    groomMotherLastName: "",
    groomMotherStatus: false,
    groomFamilyName: "아들",
    groomFatherFamilyName: "아버지",
    groomMotherFamilyName: "어머니",
    brideFirstName: "",
    brideLastName: "",
    brideEnglishName: "",
    brideFatherFirstName: "",
    brideFatherLastName: "",
    brideFatherStatus: false,
    brideMotherFirstName: "",
    brideMotherLastName: "",
    brideMotherStatus: false,
    brideFamilyName: "딸",
    brideFatherFamilyName: "아버지",
    brideMotherFamilyName: "어머니",
    statusFlower: false,
    brideMarkFirst: false,
};

export const dummyBaseInfo: BaseInfo = {
    groomFirstName: "김",
    groomLastName: "민수",
    groomEnglishName: "Minsu",
    groomFatherFirstName: "김",
    groomFatherLastName: "아빠",
    groomFatherStatus: false,
    groomMotherFirstName: "이",
    groomMotherLastName: "엄마",
    groomMotherStatus: false,
    groomFamilyName: "아들",
    groomFatherFamilyName: "아버지",
    groomMotherFamilyName: "어머니",
    brideFirstName: "김",
    brideLastName: "지안",
    brideEnglishName: "jian",
    brideFatherFirstName: "김",
    brideFatherLastName: "강민",
    brideFatherStatus: false,
    brideMotherFirstName: "박",
    brideMotherLastName: "민영",
    brideMotherStatus: false,
    brideFamilyName: "딸",
    brideFatherFamilyName: "아버지",
    brideMotherFamilyName: "어머니",
    statusFlower: false,
    brideMarkFirst: false,
};

export type BaseInfoByBrideMarkFirst = {
    name: string;
    firstName: string;
    lastName: string;
    englishName: string;
    fatherName: string;
    fatherStatus: boolean;
    motherName: string;
    motherStatus: boolean;
    familyName: string;
    korean: string;
};

export function getBaseInfoByBrideMarkFirst(baseInfo: BaseInfo): {
    first: BaseInfoByBrideMarkFirst;
    second: BaseInfoByBrideMarkFirst;
} {
    const groomInfo: BaseInfoByBrideMarkFirst = {
        name: baseInfo.groomFirstName + baseInfo.groomLastName,
        firstName: baseInfo.groomFirstName,
        lastName: baseInfo.groomLastName,
        englishName: baseInfo.groomEnglishName,
        fatherName: baseInfo.groomFatherFirstName + baseInfo.groomFatherLastName,
        fatherStatus: baseInfo.groomFatherStatus,
        motherName: baseInfo.groomMotherFirstName + baseInfo.groomMotherLastName,
        motherStatus: baseInfo.groomMotherStatus,
        familyName: baseInfo.groomFamilyName,
        korean: "신랑",
    };

    const brideInfo: BaseInfoByBrideMarkFirst = {
        name: baseInfo.brideFirstName + baseInfo.brideLastName,
        firstName: baseInfo.brideFirstName,
        lastName: baseInfo.brideLastName,
        englishName: baseInfo.brideEnglishName,
        fatherName: baseInfo.brideFatherFirstName + baseInfo.brideFatherLastName,
        fatherStatus: baseInfo.brideFatherStatus,
        motherName: baseInfo.brideMotherFirstName + baseInfo.brideMotherLastName,
        motherStatus: baseInfo.brideMotherStatus,
        familyName: baseInfo.brideFamilyName,
        korean: "신부",
    };

    if (baseInfo.brideMarkFirst) {
        return {first: brideInfo, second: groomInfo};
    } else {
        return {first: groomInfo, second: brideInfo};
    }
}

export interface WeddingSchedule {
    weddingDate: string;
    weddingTime: string;
    calendar: boolean;
    dday: boolean;
}

export const defaultWeddingSchedule: WeddingSchedule = {
    weddingDate: "",
    weddingTime: "",
    calendar: true,
    dday: true,
};

export const dummyWeddingSchedule: WeddingSchedule = {
    weddingDate: "2026-06-02",
    weddingTime: "15:30",
    calendar: true,
    dday: true,
};

export function getDetails(weddingSchedule: WeddingSchedule) {
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, "yyyy-MM-dd HH:mm", new Date());
    const isValidDate = !isNaN(date.getTime());

    return {dateString, date, isValidDate};
}

export interface WeddingPlace {
    x: number;
    y: number;
    placeUrl: string;
    placeName: string;
    addressName: string;
    floorHall: string;
    placeTel: string;
    placeTransportation: PlaceTransportation;
    placeStatus: boolean;
    placeLock: boolean;
    placeNav: boolean;
}

export type PlaceTransportation = string[];

export function getPlaceholder(index: number): string {
    switch (index) {
        case 0:
            return "버스";
        case 1:
            return "지하철";
        case 2:
            return "주차안내";
        default:
            return "";
    }
}

export const defaultWeddingPlace: WeddingPlace = {
    x: 126.9782038,
    y: 37.5665851,
    placeUrl: "",
    placeName: "",
    addressName: "",
    floorHall: "",
    placeTel: "",
    placeTransportation: ["", "", ""],
    placeStatus: true,
    placeLock: true,
    placeNav: true,
};

export const dummyWeddingPlace: WeddingPlace = {
    x: 126.97689786832184,
    y: 37.577613288258206,
    placeUrl: "https://place.map.kakao.com/18619553",
    placeName: "경복궁",
    addressName: "서울 종로구 세종로 1-1",
    placeTel: "02-187-3021",
    floorHall: "야외 웨딩홀",
    placeTransportation: ["경북궁 앞 버스정류장 101번", "경북궁역 0호선", "경북궁 공용주차장 (발렛가능)"],
    placeStatus: true,
    placeLock: true,
    placeNav: true,
};

export interface Greeting {
    greetingTitle: string;
    greetingContent: string;
    greetingDesign: GreetingDesign;
}

export const defaultGreeting: Greeting = {
    greetingTitle: "",
    greetingContent: "",
    greetingDesign: "BASIC",
};

export const dummyGreeting: Greeting = {
    greetingTitle: "",
    greetingContent:
        "새로운 시작을 알리는 날,\n소중한 분들과 함께하고 싶습니다.\n함께해 주셔서 사랑과 행복을 나눠주세요.",
    greetingDesign: "FLOWER",
};

export interface MoneyInfo {
    infoTitle: string;
    infoContent: string;
    kakaoStatus: boolean;
    groomNameMoneyInfo: string;
    groomBankName: string;
    groomBankNumber: string;
    groomKakaoUrl: string;
    groomToggle: boolean;
    groomFatherNameMoneyInfo: string;
    groomFatherBankName: string;
    groomFatherBankNumber: string;
    groomFatherKakaoUrl: string;
    groomFatherToggle: boolean;
    groomMotherNameMoneyInfo: string;
    groomMotherBankName: string;
    groomMotherBankNumber: string;
    groomMotherKakaoUrl: string;
    groomMotherToggle: boolean;
    brideNameMoneyInfo: string;
    brideBankName: string;
    brideBankNumber: string;
    brideKakaoUrl: string;
    brideToggle: boolean;
    brideFatherNameMoneyInfo: string;
    brideFatherBankName: string;
    brideFatherBankNumber: string;
    brideFatherKakaoUrl: string;
    brideFatherToggle: boolean;
    brideMotherNameMoneyInfo: string;
    brideMotherBankName: string;
    brideMotherBankNumber: string;
    brideMotherKakaoUrl: string;
    brideMotherToggle: boolean;
}

export const defaultMoneyInfo: MoneyInfo = {
    infoTitle: "",
    infoContent: "",
    kakaoStatus: false,
    groomNameMoneyInfo: "",
    groomBankName: "",
    groomBankNumber: "",
    groomKakaoUrl: "",
    groomToggle: false,
    groomFatherNameMoneyInfo: "",
    groomFatherBankName: "",
    groomFatherBankNumber: "",
    groomFatherKakaoUrl: "",
    groomFatherToggle: false,
    groomMotherNameMoneyInfo: "",
    groomMotherBankName: "",
    groomMotherBankNumber: "",
    groomMotherKakaoUrl: "",
    groomMotherToggle: false,
    brideNameMoneyInfo: "",
    brideBankName: "",
    brideBankNumber: "",
    brideKakaoUrl: "",
    brideToggle: false,
    brideFatherNameMoneyInfo: "",
    brideFatherBankName: "",
    brideFatherBankNumber: "",
    brideFatherKakaoUrl: "",
    brideFatherToggle: false,
    brideMotherNameMoneyInfo: "",
    brideMotherBankName: "",
    brideMotherBankNumber: "",
    brideMotherKakaoUrl: "",
    brideMotherToggle: false,
};

export const dummyMoneyInfo: MoneyInfo = {
    infoTitle: "축의금",
    infoContent: "축의금 보내실 곳",
    kakaoStatus: false,
    groomNameMoneyInfo: "김민수",
    groomBankName: "ㅇㅇ은행",
    groomBankNumber: "12345678",
    groomKakaoUrl: "",
    groomToggle: true,
    groomFatherNameMoneyInfo: "",
    groomFatherBankName: "",
    groomFatherBankNumber: "",
    groomFatherKakaoUrl: "",
    groomFatherToggle: false,
    groomMotherNameMoneyInfo: "",
    groomMotherBankName: "",
    groomMotherBankNumber: "",
    groomMotherKakaoUrl: "",
    groomMotherToggle: false,
    brideNameMoneyInfo: "김지안",
    brideBankName: "ㅇㅇ은행",
    brideBankNumber: "12345678",
    brideKakaoUrl: "",
    brideToggle: true,
    brideFatherNameMoneyInfo: "",
    brideFatherBankName: "",
    brideFatherBankNumber: "",
    brideFatherKakaoUrl: "",
    brideFatherToggle: false,
    brideMotherNameMoneyInfo: "",
    brideMotherBankName: "",
    brideMotherBankNumber: "",
    brideMotherKakaoUrl: "",
    brideMotherToggle: false,
};

export type MoneyInfoByBrideMarkFirst = {
    bankName: string;
    bankNumber: string;
    toggle: boolean;
    kakaoUrl: string;
    nameMoneyInfo: string;
    korean: string;
};

export function getMoneyInfoByBrideMarkFirst(moneyInfo: MoneyInfo, brideMarkFirst: boolean) {
    const groomMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.groomBankName,
        bankNumber: moneyInfo.groomBankNumber,
        toggle: moneyInfo.groomToggle,
        kakaoUrl: moneyInfo.groomKakaoUrl,
        nameMoneyInfo: moneyInfo.groomNameMoneyInfo,
        korean: "신랑",
    };
    const groomFatherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.groomFatherBankName,
        bankNumber: moneyInfo.groomFatherBankNumber,
        toggle: moneyInfo.groomFatherToggle,
        kakaoUrl: moneyInfo.groomFatherKakaoUrl,
        nameMoneyInfo: moneyInfo.groomFatherNameMoneyInfo,
        korean: "아버지",
    };
    const groomMotherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.groomMotherBankName,
        bankNumber: moneyInfo.groomMotherBankNumber,
        toggle: moneyInfo.groomMotherToggle,
        kakaoUrl: moneyInfo.groomMotherKakaoUrl,
        nameMoneyInfo: moneyInfo.groomMotherNameMoneyInfo,
        korean: "어머니",
    };
    const brideMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.brideBankName,
        bankNumber: moneyInfo.brideBankNumber,
        toggle: moneyInfo.brideToggle,
        kakaoUrl: moneyInfo.brideKakaoUrl,
        nameMoneyInfo: moneyInfo.brideNameMoneyInfo,
        korean: "신부",
    };
    const brideFatherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.brideFatherBankName,
        bankNumber: moneyInfo.brideFatherBankNumber,
        toggle: moneyInfo.brideFatherToggle,
        kakaoUrl: moneyInfo.brideFatherKakaoUrl,
        nameMoneyInfo: moneyInfo.brideFatherNameMoneyInfo,
        korean: "아버지",
    };
    const brideMotherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.brideMotherBankName,
        bankNumber: moneyInfo.brideMotherBankNumber,
        toggle: moneyInfo.brideMotherToggle,
        kakaoUrl: moneyInfo.brideMotherKakaoUrl,
        nameMoneyInfo: moneyInfo.brideMotherNameMoneyInfo,
        korean: "어머니",
    };

    if (brideMarkFirst) {
        return {
            first: brideMoneyInfo,
            firstFather: brideFatherMoneyInfo,
            firstMother: brideMotherMoneyInfo,
            second: groomMoneyInfo,
            secondFather: groomFatherMoneyInfo,
            secondMother: groomMotherMoneyInfo,
            kakaoStatus: moneyInfo.kakaoStatus,
        };
    } else {
        return {
            first: groomMoneyInfo,
            firstMother: groomMotherMoneyInfo,
            firstFather: groomFatherMoneyInfo,
            second: brideMoneyInfo,
            secondFather: brideFatherMoneyInfo,
            secondMother: brideMotherMoneyInfo,
            kakaoStatus: moneyInfo.kakaoStatus,
        };
    }
}

export interface InfoMember {
    picture: string;
    name: string;
    email: string;
    role: UserRole;
    accessPoster: boolean;
}

export interface Phone {
    groomTel: string;
    groomFatherTel: string;
    groomMotherTel: string;
    brideTel: string;
    brideFatherTel: string;
    brideMotherTel: string;
    parentTel: boolean;
}

export const defaultPhone: Phone = {
    groomTel: "",
    groomFatherTel: "",
    groomMotherTel: "",
    brideTel: "",
    brideFatherTel: "",
    brideMotherTel: "",
    parentTel: false,
};

export const dummyPhone: Phone = {
    groomTel: "010-1234-5678",
    groomFatherTel: "010-1234-5678",
    groomMotherTel: "010-1234-5678",
    brideTel: "010-1234-5678",
    brideFatherTel: "010-1234-5678",
    brideMotherTel: "010-1234-5678",
    parentTel: true,
};

export const positionMap: Record<Position, {korean: string}> = {
    0: {korean: "인사말"},
    1: {korean: "캘린더"},
    2: {korean: "축의금"},
    3: {korean: "갤러리"},
    4: {korean: "지도"},
    5: {korean: "동영상"},
    6: {korean: "연락처"},
    7: {korean: "방명록"},
    8: {korean: "참석의사 RSVP"},
};

export const positionList = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Position = (typeof positionList)[number];

export interface WeddingDto {
    url: string;
    name: string;
    position: Position[];
    weddingDesign: WeddingDesign;
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    weddingPlace: WeddingPlace;
    greeting: Greeting;
    guestComment: GuestComment;
    backgroundMusic: BackgroundMusic;
    linkShare: LinkShare;
    moneyInfo: MoneyInfo;
    video: Video;
    phone: Phone;
    rsvp: Rsvp;
    gallery: Gallery;
}

export interface Wedding extends WeddingDto {
    guestCommentList: Comment[];
    waterMark: boolean;
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

export const dummyWedding: Wedding = {
    url: "sample",
    name: "sample",
    position: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
};

export interface WeddingInfo {
    img: string;
    url: string;
    name: string;
    waterMark: boolean;
    createdDate: string;
}

export interface WeddingDashboard {
    weddingInfo: WeddingInfo[];
    invitation: number;
}

export interface WeddingStatistics {
    totalRsvpVisitorCnt: number;
    totalVisitorCnt: number;
    totalMealCnt: number;
}

export interface WeddingStatisticsInfo {
    id: string;
    date: string;
    visitorCnt: number;
    linkShareCnt: number;
}

const calculateStartDate = (infos: WeddingStatisticsInfo[], daysAgo: number): Date => {
    const today = new Date();
    const oneWeekAgo = addDays(today, -daysAgo);
    const minInfoDate =
        infos.length > 0 ? new Date(Math.min(...infos.map(info => new Date(info.date).getTime()))) : today;
    return minInfoDate < oneWeekAgo ? minInfoDate : oneWeekAgo;
};

export const fillMissingDates = (infos: WeddingStatisticsInfo[]): WeddingStatisticsInfo[] => {
    const startDate = calculateStartDate(infos, 7);
    const endDate = new Date();
    const filledInfos: WeddingStatisticsInfo[] = [];
    const dateMap = new Map(infos.map(info => [info.date, info]));

    for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
        if (dateMap.has(format(date, "yyyy-MM-dd"))) {
            filledInfos.push(dateMap.get(format(date, "yyyy-MM-dd"))!);
        } else {
            filledInfos.push({
                id: "",
                date: format(date, "yyyy-MM-dd"),
                visitorCnt: 0,
                linkShareCnt: 0,
            });
        }
    }
    return filledInfos;
};

const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export interface WeddingRequest {
    firstVisitor: boolean;
}

export interface EditMemberRequest {
    picture: string;
    name: string;
}
