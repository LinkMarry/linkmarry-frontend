import {type GuestCommentDesign} from "~/api/enumeration/GuestCommentDesign.ts";

export interface Comment {
    id: number;
    name: string;
    comment: string;
    createdDate: string;
}

export const dummyComments: Comment[] = [
    {
        id: 3,
        name: "김지민",
        comment: "진짜 행복하게 잘 살아야해!!!!",
        createdDate: "2025-02-06T08:45:38.339792",
    },
];

export interface GuestComment {
    title: string;
    content: string;
    guestCommentDesign: GuestCommentDesign;
    privateContent: boolean;
}

export const defaultGuestComment: GuestComment = {
    title: "",
    content: "저희 둘에게 하고 싶은 말을 남겨주세요",
    guestCommentDesign: "BASIC",
    privateContent: true,
};

export const dummyGuestComment: GuestComment = {
    title: "방명록",
    content: "저희 둘에게 하고 싶은 말을 남겨주세요",
    guestCommentDesign: "BASIC",
    privateContent: false,
};

export interface DeleteCommentRequest {
    url: string;
    id: number;
    password?: string;
}

export interface EditCommentRequest {
    id: number;
    url: string;
    name: string;
    comment: string;
    password: string;
}

export interface GuestCommentRequest {
    url: string;
    name: string;
    comment: string;
    password: string;
}
