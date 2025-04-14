import GuestCommentDesign from "@src/infrastructure/network/enumeration/GuestCommentDesign";

export default interface GuestComment {
    // 방명록 제목 (청첩장 표시용 X)
    title: string;

    content: string;

    // 방명록 디자인 (청첩장 표시용 O)
    guestCommentDesign: GuestCommentDesign;

    // 방명록 내용 표시여부
    privateContent: boolean;
}

export const defaultGuestComment: GuestComment = {
    title: "",
    content: '저희 둘에게 하고 싶은 말을 남겨주세요',
    guestCommentDesign: GuestCommentDesign.BASIC,
    privateContent: true,
}

export const dummyGuestComment: GuestComment = {
    title: "방명록",
    content: '',
    guestCommentDesign: GuestCommentDesign.BASIC,
    privateContent: true,
};
