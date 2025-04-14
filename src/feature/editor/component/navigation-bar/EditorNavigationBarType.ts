import {IconType} from "@src/userinterface/foundation/Icon";

type EditorNavigationBarType = 'design' |
    'groom' |
    'bride' |
    'greeting' |
    'weddingSchedule' |
    'weddingPlace' |
    'gallery' |
    'backgroundMusic' |
    'money' |
    'video' |
    'rsvp' |
    'phone' |
    'guestComment' |
    'fontAndStyle' |
    'urlShare' |
    'kakaotalkInvitationLetter' |
    'changeOrder' |
    'ai';

export const editorNavigationBarTypeList: EditorNavigationBarType[] = [
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
    'changeOrder',
    'ai'
];
export const editorNavigationBarTypeMap: Record<EditorNavigationBarType, {
    navigationBarText: string;
    inspectorText: string;
    icon: IconType;
}> = {
    design: {
        icon: IconType.Brush,
        navigationBarText: '디자인',
        inspectorText: '디자인'
    },
    groom: {
        icon: IconType.PersonLine,
        navigationBarText: '신랑측',
        inspectorText: '신랑측 정보'
    },
    bride: {
        icon: IconType.PersonLine,
        navigationBarText: '신부측',
        inspectorText: '신부측 정보'
    },
    greeting: {
        icon: IconType.Note,
        navigationBarText: '인사말',
        inspectorText: '인사말'
    },
    weddingSchedule: {
        icon: IconType.CalendarLine,
        navigationBarText: '예식 일시',
        inspectorText: '예식 일시'
    },
    weddingPlace: {
        icon: IconType.LocationPoint,
        navigationBarText: '예식 장소',
        inspectorText: '예식 장소'
    },
    gallery: {
        icon: IconType.Photo2,
        navigationBarText: '갤러리',
        inspectorText: '갤러리'
    },
    backgroundMusic: {
        icon: IconType.CirclePlay,
        navigationBarText: '배경음악',
        inspectorText: '배경음악'
    },
    money: {
        icon: IconType.Money,
        navigationBarText: '축의금',
        inspectorText: '축의금'
    },
    video: {
        icon: IconType.Video,
        navigationBarText: '동영상',
        inspectorText: '동영상'
    },
    rsvp: {
        icon: IconType.EmailOpen,
        navigationBarText: '참석의사',
        inspectorText: '참석의사 RSVP'
    },
    phone: {
        icon: IconType.Phone,
        navigationBarText: '연락처',
        inspectorText: '연락처'
    },
    guestComment: {
        icon: IconType.Clipboard,
        navigationBarText: '방명록',
        inspectorText: '방명록'
    },
    fontAndStyle: {
        icon: IconType.Edit,
        navigationBarText: '폰트',
        inspectorText: '폰트 및 스타일'
    },
    urlShare: {
        icon: IconType.ShareLine,
        navigationBarText: '링크 공유',
        inspectorText: 'URL 공유'
    },
    kakaotalkInvitationLetter: {
        icon: IconType.SendLine,
        navigationBarText: '카카오 공유',
        inspectorText: '카카오톡 초대장'
    },
    changeOrder: {
        icon: IconType.Envelope,
        navigationBarText: '순서 변경',
        inspectorText: '순서 변경'
    },
    ai: {
        icon: IconType.Search,
        navigationBarText: 'AI',
        inspectorText: 'AI 이미지 변환'
    }
};

export default EditorNavigationBarType;
