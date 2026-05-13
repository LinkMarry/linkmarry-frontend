import {type GuestType, type Tag} from "~/domain/wedding.ts";

export interface NotificationRequest {
    tag: Tag;
    title: string;
    content: string;
}

export interface RsvpRequest {
    url: string;
    guestType: GuestType;
    isAttend: boolean;
    isMeal: boolean;
    guestName: string;
    guestPhone: string;
    bus: boolean;
    guestCnt: number;
    guestComment: string;
}
