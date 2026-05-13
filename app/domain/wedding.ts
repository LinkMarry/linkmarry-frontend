import {parse} from "date-fns";
import type {CSSProperties} from "react";
import {type FontFamily} from "~/components/core/text/TextType.ts";

export const GreetingDesignList = ["BASIC", "TEXT", "FLOWER"] as const;
export type GreetingDesign = (typeof GreetingDesignList)[number];

export const UserRoleList = ["ROLE_ADMIN", "ROLE_USER"] as const;

export type UserRole = (typeof UserRoleList)[number];

export interface WeddingDesign {
    weddingDesignName: WeddingDesignName;
    weddingDesignColor: WeddingDesignColor;
    weddingDesignFont: FontFamily;
    weddingDesignFontSize: WeddingDesignFontSize;
    titleImgUrl: string;
    opening: Opening;
    openingText: OpeningText;
}

export type WeddingDesignName = string;
export type WeddingDesignColor = WeddingDesignDefaultColor | WeddingDesignPaperColor | string;
export const weddingDesignDefaultColorList = [
    "#FFFFFF",
    "#F7F7F2",
    "#F6F2F2",
    "#FBF2F2",
    "#FFFEF5",
    "#EDF8F8",
    "#ECECEC",
] as const;
export type WeddingDesignDefaultColor = (typeof weddingDesignDefaultColorList)[number];
export const weddingDesignPaperColorList = ["paper1", "paper2", "paper3", "paper4"] as const;
export type WeddingDesignPaperColor = (typeof weddingDesignPaperColorList)[number];

export function isPaperColor(weddingDesignColor: WeddingDesignColor): boolean {
    return weddingDesignColor.startsWith("paper");
}

export function backgroundStyle(weddingDesignColor: WeddingDesignColor): CSSProperties["background"] {
    if (isPaperColor(weddingDesignColor)) {
        return `url("/paper/${weddingDesignColor}.png")`;
    } else {
        return weddingDesignColor;
    }
}

export const weddingDesignFontSizeList = ["basic", "large", "extraLarge"] as const;
export type WeddingDesignFontSize = (typeof weddingDesignFontSizeList)[number];

export const openingTextList = [
    "We're getting married!",
    "저희 둘 결혼합니다",
    "Welcome to Our Wedding",
    "새로운 시작을 함께해주세요",
] as const;
export type OpeningText = (typeof openingTextList)[number];

export interface WeddingDesignPreset {
    id: number;
    name: string;
    img: string;
    category: string;
}

export interface GroupedWeddingDesignPresets {
    category: string;
    items: WeddingDesignPreset[];
}

export function groupedByCategory(presets: WeddingDesignPreset[]): GroupedWeddingDesignPresets[] {
    const grouped = presets.reduce(
        (acc, preset) => {
            if (!acc[preset.category]) {
                acc[preset.category] = [];
            }
            acc[preset.category].push(preset);
            return acc;
        },
        {} as Record<string, WeddingDesignPreset[]>,
    );

    return Object.keys(grouped).map(category => ({
        category,
        items: grouped[category],
    }));
}

export interface BackgroundMusic {
    backgroundMusicUrl: string;
    backgroundMusicName: string;
    effect: boolean;
    backgroundMusicActivate: boolean;
}

export interface Gallery {
    galleryTitle: string;
    galleryDesign: GalleryDesign;
    galleryZoom: boolean;
    galleryFullScreen: boolean;
    imgList: string[];
}

export interface Video {
    videoTitle: string;
    videoUrl: string;
    videoFileUrl: string;
    videoName: string;
    videoActivate: boolean;
    videoFileType: boolean;
}

export type VideoFileType = boolean;
export const videoFileTypeList: VideoFileType[] = [true, false];

export interface Music {
    id: number;
    name: string;
    imgUrl: string;
    musicUrl: string;
    tag: string;
}

export function getMusicName(music: Music) {
    const lst = music.name.split(".").map(i => i.replaceAll("_", " "));
    lst.pop();
    return lst.join(".");
}

export const GalleryDesignList = ["SLIDE", "HIGHLIGHT", "GRID"] as const;
export type GalleryDesign = (typeof GalleryDesignList)[number];

const OpeningValues = {
    NONE: "NONE",
    TYPING: "TYPING",
} as const;

export type Opening = (typeof OpeningValues)[keyof typeof OpeningValues];

export const openingList = Object.values(OpeningValues);

import {type LinkShare} from "./common.ts";

export const GuestTypeList = ["BRIDE", "GROOM"] as const;

export type GuestType = (typeof GuestTypeList)[number];

export const TagList = ["NOTIFICATION", "UPDATE", "ETC", "PRIVACY", "TERMS"] as const;
export const TagWithAllList = ["ALL", ...TagList] as const;
export type Tag = (typeof TagList)[number];
export type TagWithAll = (typeof TagWithAllList)[number];

export interface Rsvp {
    rsvpTitle: string;
    rsvpContent: string;
    attendStatus: boolean;
    attendMealStatus: boolean;
    attendGuestCntStatus: boolean;
    attendPhoneStatus: boolean;
    attendBusStatus: boolean;
    attendEtcStatus: boolean;
    startPopupStatus: boolean;
    rsvpActivate: boolean;
}

export interface RsvpInfo {
    id: number;
    guestType: GuestType;
    isAttend: boolean;
    isMeal: boolean;
    guestName: string;
    guestPhone: string;
    bus: boolean;
    guestCnt: number;
    guestComment: string;
    createdDate: string;
}

export interface Notification {
    id: number;
    name: string;
    title: string;
    content: string;
    date: string;
    tag: Tag;
}

export const dummyNotifications: Notification[] = [
    {
        id: 0,
        name: "운영자",
        title: "개인정보 처리방침 개정안내",
        content: `안녕하세요. 링크메리 입니다.\n\n링크메리 서비스를 이용해주시는 회원 여러분께 감사드리며, 링크메리 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.\n\n1. 변경 내용\n- 서비스에서 개인정보 수집하는 내역을 현행화합니다.\n\n3. 변경 시기\n2025년 1월 9일\n\n4. 문의 및 동의 철회\n새로운 개인정보 처리방침 내용에 동의하지 않으시는 경우, 서비스 내에서 “탈퇴”를 신청하여 회원 탈퇴를 하실 수 있습니다. 개인정보 처리방침 내용에 대한 문의사항이 있으신 경우, 개인정보보호 담당부서(고객센터)로 문의주시면 친절하게 안내해 드리겠습니다.\n\n회사는 앞으로도 이용자의 개인정보를 보다 안전하게 보호할 것을 약속드리며, 신뢰받는 서비스로 보답하겠습니다.\n\n감사합니다.`,
        date: "2024.12.26",
        tag: "NOTIFICATION",
    },
    {
        id: 1,
        name: "운영자",
        title: "1.1 버전 업데이트 안내",
        content: "업데이트 됐수다",
        date: "2025.1.1",
        tag: "UPDATE",
    },
];

export const GuestCommentDesignList = ["BASIC", "STICKER"] as const;
export type GuestCommentDesign = (typeof GuestCommentDesignList)[number];

export interface Comment {
    id: number;
    name: string;
    comment: string;
    createdDate: string;
}

export interface GuestComment {
    title: string;
    content: string;
    guestCommentDesign: GuestCommentDesign;
    privateContent: boolean;
}

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

export interface Greeting {
    greetingTitle: string;
    greetingContent: string;
    greetingDesign: GreetingDesign;
}

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
        weddingDesign: {
            weddingDesignName: "",
            weddingDesignColor: "#FFFFFF",
            weddingDesignFont: "Pretendard",
            weddingDesignFontSize: "basic",
            titleImgUrl: "",
            opening: "NONE",
            openingText: "We're getting married!",
        },
        baseInfo: {
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
        },
        weddingSchedule: {
            weddingDate: "",
            weddingTime: "",
            calendar: true,
            dday: true,
        },
        weddingPlace: {
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
        },
        greeting: {
            greetingTitle: "",
            greetingContent: "",
            greetingDesign: "BASIC",
        },
        guestComment: {
            title: "",
            content: "저희 둘에게 하고 싶은 말을 남겨주세요",
            guestCommentDesign: "BASIC",
            privateContent: true,
        },
        guestCommentList: [
            {
                id: 3,
                name: "김지민",
                comment: "진짜 행복하게 잘 살아야해!!!!",
                createdDate: "2025-02-06T08:45:38.339792",
            },
        ],
        backgroundMusic: {
            backgroundMusicUrl: "",
            backgroundMusicName: "",
            effect: true,
            backgroundMusicActivate: true,
        },
        linkShare: {
            kakaoImgUrl: "",
            kakaoTitle: "",
            kakaoContent: "",
            kakaoButton: "NONE",
            kakaoStyle: true,
            urlImgUrl: "",
            urlTitle: "",
            urlContent: "",
        },
        moneyInfo: {
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
        },
        video: {
            videoTitle: "",
            videoUrl: "",
            videoFileUrl: "",
            videoName: "",
            videoActivate: true,
            videoFileType: false,
        },
        phone: {
            groomTel: "",
            groomFatherTel: "",
            groomMotherTel: "",
            brideTel: "",
            brideFatherTel: "",
            brideMotherTel: "",
            parentTel: false,
        },
        rsvp: {
            rsvpTitle: "",
            rsvpContent: "",
            attendStatus: false,
            attendMealStatus: false,
            attendGuestCntStatus: false,
            attendPhoneStatus: false,
            attendBusStatus: false,
            attendEtcStatus: false,
            startPopupStatus: false,
            rsvpActivate: true,
        },
        gallery: {
            galleryTitle: "",
            galleryDesign: "SLIDE",
            galleryZoom: true,
            galleryFullScreen: true,
            imgList: [],
        },
        waterMark: false,
    };
}

export const dummyWedding: Wedding = {
    url: "sample",
    name: "sample",
    position: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    weddingDesign: {
        weddingDesignName: "모던 심플",
        weddingDesignColor: "#FFFFFF",
        weddingDesignFont: "Pretendard",
        weddingDesignFontSize: "basic",
        titleImgUrl:
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_3.png",
        opening: "TYPING",
        openingText: "We're getting married!",
    },
    baseInfo: {
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
    },
    weddingSchedule: {
        weddingDate: "2026-06-02",
        weddingTime: "15:30",
        calendar: true,
        dday: true,
    },
    weddingPlace: {
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
    },
    greeting: {
        greetingTitle: "",
        greetingContent:
            "새로운 시작을 알리는 날,\n소중한 분들과 함께하고 싶습니다.\n함께해 주셔서 사랑과 행복을 나눠주세요.",
        greetingDesign: "FLOWER",
    },
    guestComment: {
        title: "방명록",
        content: "저희 둘에게 하고 싶은 말을 남겨주세요",
        guestCommentDesign: "BASIC",
        privateContent: false,
    },
    guestCommentList: [
        {
            id: 3,
            name: "김지민",
            comment: "진짜 행복하게 잘 살아야해!!!!",
            createdDate: "2025-02-06T08:45:38.339792",
        },
    ],
    backgroundMusic: {
        backgroundMusicUrl:
            "https://axqjyyk4dfhw.compat.objectstorage.ap-chuncheon-1.oraclecloud.com/linkmarry/sample/music/As_Time_Goes_By.mp3",
        backgroundMusicName: "As_Time_Goes_By.mp3",
        effect: true,
        backgroundMusicActivate: true,
    },
    linkShare: {
        kakaoImgUrl:
            "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0234d19a-3206-489b-bafb-c0fa32c850ac-GettyImages-jv11005081.jpg.jpg",
        kakaoTitle: "2월 15일, 저희 결혼합니다.",
        kakaoContent: "많이 와주세요~",
        kakaoButton: "ATTEND",
        kakaoStyle: true,
        urlImgUrl:
            "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0234d19a-3206-489b-bafb-c0fa32c850ac-GettyImages-jv11005081.jpg.jpg",
        urlTitle: "2월 15일, 저희 결혼합니다.",
        urlContent: "많이 와주세요~",
    },
    moneyInfo: {
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
    },
    video: {
        videoTitle: "저희의 결혼식을 위한 영상입니다.",
        videoUrl: "https://www.youtube.com/embed/D1lNjuUj2c8",
        videoFileUrl: "",
        videoName: "결혼.mp4",
        videoActivate: true,
        videoFileType: false,
    },
    phone: {
        groomTel: "010-1234-5678",
        groomFatherTel: "010-1234-5678",
        groomMotherTel: "010-1234-5678",
        brideTel: "010-1234-5678",
        brideFatherTel: "010-1234-5678",
        brideMotherTel: "010-1234-5678",
        parentTel: true,
    },
    rsvp: {
        rsvpTitle: "RSVP",
        rsvpContent: "참석의사를 알려주세요!",
        attendStatus: false,
        attendMealStatus: true,
        attendGuestCntStatus: true,
        attendPhoneStatus: true,
        attendBusStatus: true,
        attendEtcStatus: true,
        startPopupStatus: true,
        rsvpActivate: true,
    },
    gallery: {
        galleryTitle: "",
        galleryDesign: "GRID",
        galleryZoom: true,
        galleryFullScreen: true,
        imgList: [
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_1.png",
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_2.png",
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_3.png",
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_4.png",
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_5.png",
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_6.png",
            "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_7.png",
        ],
    },
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
