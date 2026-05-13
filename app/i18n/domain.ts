import {
    type GalleryDesign,
    type GreetingDesign,
    type Opening,
    type WeddingDesignFontSize,
    type Position,
    type VideoFileType,
    type GuestType,
    type TagWithAll,
    type RsvpInfo,
    type GuestCommentDesign,
} from "~/domain/wedding.ts";
import {type KakaoButton, type KakaoStyle} from "~/domain/common.ts";

export function getRsvpText(rsvp: RsvpInfo): string {
    if (!rsvp.isAttend) {
        return "불참";
    }
    switch (rsvp.guestType) {
        case "GROOM":
            return "신랑측";
        case "BRIDE":
            return "신부측";
    }
}

export const galleryDesignMap: Record<GalleryDesign, {korean: string}> = {
    SLIDE: {korean: "슬라이드"},
    HIGHLIGHT: {korean: "하이라이트"},
    GRID: {korean: "그리드"},
};

export const greetingDesignMap: Record<GreetingDesign, {korean: string}> = {
    BASIC: {korean: "기본"},
    TEXT: {korean: "초대 글자"},
    FLOWER: {korean: "꽃 아이콘"},
};

export const guestCommentDesignMap: Record<GuestCommentDesign, {korean: string}> = {
    BASIC: {korean: "기본형"},
    STICKER: {korean: "스티커"},
};

export const guestTypeMap: Record<GuestType, {korean: string}> = {
    BRIDE: {korean: "신부"},
    GROOM: {korean: "신랑"},
};

export const kakaoButtonMap: Record<KakaoButton, {korean: string}> = {
    NONE: {korean: "설정 안 함"},
    PLACE: {korean: "위치 보기"},
    ATTEND: {korean: "참석의사"},
};

export const openingMap: Record<Opening, {korean: string}> = {
    NONE: {korean: "선택안함"},
    TYPING: {korean: "타이핑"},
};

export function fromKorean(korean: string): Opening | null {
    const entry = Object.entries(openingMap).find(([, value]) => value.korean === korean);
    return entry ? (entry[0] as Opening) : null;
}

export const tagToKoreanRecord: Record<TagWithAll, string> = {
    ALL: "전체",
    NOTIFICATION: "공지사항",
    UPDATE: "업데이트",
    ETC: "기타",
    PRIVACY: "개인정보 처리방침",
    TERMS: "이용약관",
};

export const weddingDesignFontSizeMap: Record<WeddingDesignFontSize, {korean: string; addFontSize: number}> = {
    basic: {korean: "기본", addFontSize: 0},
    large: {korean: "크게", addFontSize: 2},
    extraLarge: {korean: "더 크게", addFontSize: 4},
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

export const getKoreanByKakaoStyle = (kakaoStyle: KakaoStyle): string => {
    return kakaoStyle ? "가로" : "세로";
};

export const getKoreanByVideoFileType = (videoFileType: VideoFileType): string => {
    return videoFileType ? "파일로 첨부" : "URL로 첨부";
};

export const getPlaceholder = (index: number): string => {
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
};
