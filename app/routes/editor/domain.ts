import type {IconType} from "~/components/core/icon";

export const WeddingInvitationEditorNavigationBarTypeList = [
    "design",
    "groom",
    "bride",
    "greeting",
    "weddingSchedule",
    "weddingPlace",
    "gallery",
    "backgroundMusic",
    "money",
    "video",
    "rsvp",
    "phone",
    "guestComment",
    "fontAndStyle",
    "urlShare",
    "kakaotalkInvitationLetter",
    "changeOrder",
] as const;

export type WeddingInvitationEditorNavigationBarType = (typeof WeddingInvitationEditorNavigationBarTypeList)[number];

export const WeddingPosterEditorNavigationBarTypeList = ["design", "image", "baseInfo"] as const;

export type WeddingPosterEditorNavigationBarType = (typeof WeddingPosterEditorNavigationBarTypeList)[number];

interface NavigationBarTypeRecordValue {
    navigationBarText: string;
    inspectorTitleText: string;
    icon: IconType;
}

export const weddingInvitationEditorNavigationBarTypeRecord: Record<
    WeddingInvitationEditorNavigationBarType,
    NavigationBarTypeRecordValue
> = {
    design: {
        icon: "Brush",
        navigationBarText: "디자인",
        inspectorTitleText: "디자인",
    },
    groom: {
        icon: "PersonLine",
        navigationBarText: "신랑측",
        inspectorTitleText: "신랑측 정보",
    },
    bride: {
        icon: "PersonLine",
        navigationBarText: "신부측",
        inspectorTitleText: "신부측 정보",
    },
    greeting: {
        icon: "Note",
        navigationBarText: "인사말",
        inspectorTitleText: "인사말",
    },
    weddingSchedule: {
        icon: "CalendarLine",
        navigationBarText: "예식 일시",
        inspectorTitleText: "예식 일시",
    },
    weddingPlace: {
        icon: "LocationPoint",
        navigationBarText: "예식 장소",
        inspectorTitleText: "예식 장소",
    },
    gallery: {
        icon: "Photo2",
        navigationBarText: "갤러리",
        inspectorTitleText: "갤러리",
    },
    backgroundMusic: {
        icon: "CirclePlay",
        navigationBarText: "배경음악",
        inspectorTitleText: "배경음악",
    },
    money: {
        icon: "Money",
        navigationBarText: "축의금",
        inspectorTitleText: "축의금",
    },
    video: {
        icon: "Video",
        navigationBarText: "동영상",
        inspectorTitleText: "동영상",
    },
    rsvp: {
        icon: "EmailOpen",
        navigationBarText: "참석의사",
        inspectorTitleText: "참석의사 RSVP",
    },
    phone: {
        icon: "Phone",
        navigationBarText: "연락처",
        inspectorTitleText: "연락처",
    },
    guestComment: {
        icon: "Clipboard",
        navigationBarText: "방명록",
        inspectorTitleText: "방명록",
    },
    fontAndStyle: {
        icon: "Edit",
        navigationBarText: "폰트",
        inspectorTitleText: "폰트 및 스타일",
    },
    urlShare: {
        icon: "ShareLine",
        navigationBarText: "링크 공유",
        inspectorTitleText: "URL 공유",
    },
    kakaotalkInvitationLetter: {
        icon: "SendLine",
        navigationBarText: "카카오 공유",
        inspectorTitleText: "카카오톡 초대장",
    },
    changeOrder: {
        icon: "Envelope",
        navigationBarText: "순서 변경",
        inspectorTitleText: "순서 변경",
    },
    // ai: {
    //     icon: Search,
    //     navigationBarText: 'AI',
    //     inspectorText: 'AI 이미지 변환'
    // }
};

export const weddingPosterEditorNavigationBarTypeRecord: Record<
    WeddingPosterEditorNavigationBarType,
    NavigationBarTypeRecordValue
> = {
    design: {
        navigationBarText: "디자인",
        inspectorTitleText: "디자인",
        icon: "Brush",
    },
    image: {
        navigationBarText: "이미지",
        inspectorTitleText: "이미지",
        icon: "Photo2",
    },
    baseInfo: {
        navigationBarText: "기본정보",
        inspectorTitleText: "기본정보",
        icon: "PersonLine",
    },
};
