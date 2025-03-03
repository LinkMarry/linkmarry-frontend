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
    'kakaoInvitationLetter' |
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
    'kakaoInvitationLetter',
    'changeOrder',
];
export const editorNavTypeMap: Record<EditorNavType, {
    text: string;
    icon: IconType;
}> = {
    design: {
        icon: IconType.Envelope,
        text: '디자인'
    },
    groom: {
        icon: IconType.Envelope,
        text: '신랑측'
    },
    bride: {
        icon: IconType.Envelope,
        text: '신부측'
    },
    greeting: {
        icon: IconType.Envelope,
        text: '인사말'
    },
    weddingLocation: {
        icon: IconType.Envelope,
        text: '예식 장소'
    },
    weddingSchedule: {
        icon: IconType.Envelope,
        text: '예식 일시'
    },
    gallery: {
        icon: IconType.Envelope,
        text: '갤러리'
    },
    backgroundMusic: {
        icon: IconType.Envelope,
        text: '인사말'
    },
    money: {
        icon: IconType.Envelope,
        text: '축의금'
    },
    video: {
        icon: IconType.Envelope,
        text: '동영상'
    },
    rsvp: {
        icon: IconType.Envelope,
        text: '참석의사 RSVP'
    },
    phone: {
        icon: IconType.Envelope,
        text: '연락처'
    },
    guestComment: {
        icon: IconType.Envelope,
        text: '방명록'
    },
    fontAndStyle: {
        icon: IconType.Envelope,
        text: '폰트 및 스타일'
    },
    urlShare: {
        icon: IconType.Envelope,
        text: 'URL 공유'
    },
    kakaoInvitationLetter: {
        icon: IconType.Envelope,
        text: '카카오톡 초대장'
    },
    changeOrder: {
        icon: IconType.Envelope,
        text: '순서 변경'
    }
};

export default EditorNavType;
