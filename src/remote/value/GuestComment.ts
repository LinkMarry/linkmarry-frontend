import GuestCommentDesign from "@remote/enumeration/GuestCommentDesign";

export default interface GuestComment {
    // 방명록 제목 (청첩장 표시용 X)
    title: string;

    // 방명록 디자인 (청첩장 표시용 O)
    guestCommentDesign: GuestCommentDesign;

    // 방명록 내용 표시여부
    privateContent: boolean;
}

export const defaultGuestComment: GuestComment = {
    title: "",
    guestCommentDesign: GuestCommentDesign.BASIC,
    privateContent: true,
}

export const dummyGuestComment: GuestComment = {
    title: "방명록",
    guestCommentDesign: GuestCommentDesign.BASIC,
    privateContent: true,
};
