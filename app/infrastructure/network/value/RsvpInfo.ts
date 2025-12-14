import {type GuestType} from "~/infrastructure/network/enumeration/GuestType";

export default interface RsvpInfo {
    // Rsvp ID (PK)
    id: number;

    // 참석자 측 (신랑,신부)
    guestType: GuestType;

    // 참석 여부
    isAttend: boolean;

    // 식사 여부
    isMeal: boolean;

    // 참석자 이름
    guestName: string;

    // 참석자 전번
    guestPhone: string;

    // 버스 탑승 여부
    bus: boolean;

    // 참석자 수
    guestCnt: number;

    // 남기고 싶은 말
    guestComment: string;

    // 작성일
    createdDate: string;
}

export function getRsvpText(rsvp: RsvpInfo): string {
    if (!rsvp.isAttend) {
        return '불참';
    }

    switch (rsvp.guestType) {
        case 'GROOM':
            return '신랑측';
        case 'BRIDE':
            return '신부측';
    }
}
