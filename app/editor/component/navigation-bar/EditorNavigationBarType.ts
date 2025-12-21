import type {IconType} from "~/userinterface/foundation/Icon.tsx";


export const editorNavigationBarTypeList = [
    'design',
    'groom',
    'bride',
    'greeting',
    'weddingSchedule',
    'weddingPlace',
    'gallery',
    'backgroundMusic',
    'money',
    'video',
    'rsvp',
    'phone',
    'guestComment',
    'fontAndStyle',
    'urlShare',
    'kakaotalkInvitationLetter',
    'changeOrder'
] as const;

export type EditorNavigationBarType = typeof editorNavigationBarTypeList[number];

export const editorNavigationBarTypeMap: Record<EditorNavigationBarType, {
    navigationBarText: string;
    inspectorText: string;
    icon: IconType;
}> = {
    design: {
        icon: 'Brush',
        navigationBarText: '디자인',
        inspectorText: '디자인'
    },
    groom: {
        icon: 'PersonLine',
        navigationBarText: '신랑측',
        inspectorText: '신랑측 정보'
    },
    bride: {
        icon: 'PersonLine',
        navigationBarText: '신부측',
        inspectorText: '신부측 정보'
    },
    greeting: {
        icon: 'Note',
        navigationBarText: '인사말',
        inspectorText: '인사말'
    },
    weddingSchedule: {
        icon: 'CalendarLine',
        navigationBarText: '예식 일시',
        inspectorText: '예식 일시'
    },
    weddingPlace: {
        icon: 'LocationPoint',
        navigationBarText: '예식 장소',
        inspectorText: '예식 장소'
    },
    gallery: {
        icon: 'Photo2',
        navigationBarText: '갤러리',
        inspectorText: '갤러리'
    },
    backgroundMusic: {
        icon: 'CirclePlay',
        navigationBarText: '배경음악',
        inspectorText: '배경음악'
    },
    money: {
        icon: 'Money',
        navigationBarText: '축의금',
        inspectorText: '축의금'
    },
    video: {
        icon: 'Video',
        navigationBarText: '동영상',
        inspectorText: '동영상'
    },
    rsvp: {
        icon: 'EmailOpen',
        navigationBarText: '참석의사',
        inspectorText: '참석의사 RSVP'
    },
    phone: {
        icon: 'Phone',
        navigationBarText: '연락처',
        inspectorText: '연락처'
    },
    guestComment: {
        icon: 'Clipboard',
        navigationBarText: '방명록',
        inspectorText: '방명록'
    },
    fontAndStyle: {
        icon: 'Edit',
        navigationBarText: '폰트',
        inspectorText: '폰트 및 스타일'
    },
    urlShare: {
        icon: 'ShareLine',
        navigationBarText: '링크 공유',
        inspectorText: 'URL 공유'
    },
    kakaotalkInvitationLetter: {
        icon: 'SendLine',
        navigationBarText: '카카오 공유',
        inspectorText: '카카오톡 초대장'
    },
    changeOrder: {
        icon: 'Envelope',
        navigationBarText: '순서 변경',
        inspectorText: '순서 변경'
    },
    // ai: {
    //     icon: Search,
    //     navigationBarText: 'AI',
    //     inspectorText: 'AI 이미지 변환'
    // }
};
