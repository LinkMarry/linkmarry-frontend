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
    backgroundMusic: {
        icon: IconType.Envelope,
        text: '디자인'
    },
    bride: {
        icon: IconType.Envelope,
        text: '신랑측'
    },
    changeOrder: {
        icon: IconType.Envelope,
        text: '신부측'
    },
    design: {
        icon: IconType.Envelope,
        text: '인사말'
    },
    fontAndStyle: {
        icon: IconType.Envelope,
        text: '폰트 및 스타일'
    },
    gallery: {
        icon: IconType.Envelope,
        text: '갤러리'
    },
    greeting: {
        icon: IconType.Envelope,
        text: '인사말'
    },
    groom: {
        icon: IconType.Envelope,
        text: '신랑측'
    },
    guestComment: {
        icon: IconType.Envelope,
        text: '방명록'
    },
    kakaoInvitationLetter: {
        icon: IconType.Envelope,
        text: '카카오톡 초대장'
    },
    money: {
        icon: IconType.Envelope,
        text: '축의금'
    },
    phone: {
        icon: IconType.Envelope,
        text: '연락처'
    },
    rsvp: {
        icon: IconType.Envelope,
        text: '참석의사 RSVP'
    },
    urlShare: {
        icon: IconType.Envelope,
        text: 'URL 공유'
    },
    video: {
        icon: IconType.Envelope,
        text: '동영상'
    },
    weddingLocation: {
        icon: IconType.Envelope,
        text: '예식 장소'
    },
    weddingSchedule: {
        icon: IconType.Envelope,
        text: '예식 일시'
    }
};

export default EditorNavType;
