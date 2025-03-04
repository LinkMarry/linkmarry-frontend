import {IconType} from "@designsystem/foundation/Icon";

type EditorNavType = 'design' |
    'groom' |
    'bride' |
    'greeting' |
    'weddingSchedule' |
    'weddingLocation' |
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
    'changeOrder';

export const editorNavList: EditorNavType[] = [
    'design',
    'groom',
    'bride',
    'greeting',
    'weddingSchedule',
    'weddingLocation',
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
];
export const editorNavTypeMap: Record<EditorNavType, {
    text: string;
    icon: IconType;
}> = {
    design: {
        icon: IconType.Brush,
        text: '디자인'
    },
    groom: {
        icon: IconType.PersonLine,
        text: '신랑측'
    },
    bride: {
        icon: IconType.PersonLine,
        text: '신부측'
    },
    greeting: {
        icon: IconType.Note,
        text: '인사말'
    },
    weddingSchedule: {
        icon: IconType.CalendarLine,
        text: '예식 일시'
    },
    weddingLocation: {
        icon: IconType.LocationPoint,
        text: '예식 장소'
    },
    gallery: {
        icon: IconType.Photo2,
        text: '갤러리'
    },
    backgroundMusic: {
        icon: IconType.CirclePlay,
        text: '인사말'
    },
    money: {
        icon: IconType.Money,
        text: '축의금'
    },
    video: {
        icon: IconType.Video,
        text: '동영상'
    },
    rsvp: {
        icon: IconType.EmailOpen,
        text: '참석의사'
    },
    phone: {
        icon: IconType.Phone,
        text: '연락처'
    },
    guestComment: {
        icon: IconType.Clipboard,
        text: '방명록'
    },
    fontAndStyle: {
        icon: IconType.Edit,
        text: '폰트'
    },
    urlShare: {
        icon: IconType.ShareLine,
        text: '링크 공유'
    },
    kakaotalkInvitationLetter: {
        icon: IconType.SendLine,
        text: '카카오 공유'
    },
    changeOrder: {
        icon: IconType.Envelope,
        text: '순서 변경'
    }
};

export default EditorNavType;
