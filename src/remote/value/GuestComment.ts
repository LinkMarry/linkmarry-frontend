import Design from "@remote/enumeration/Design";

export default interface GuestComment {
    // 방명록 제목 (청첩장 표시용 X)
    title: string;

    // 방명록 내용 (청첩장 표시용 X)
    content: string;

    // 방명록 디자인 (청첩장 표시용 O)
    design: Design;

    // 방명록 내용 표시여부
    privateContent: boolean;

    // 방명록 날짜 표시 여부
    privateDate: boolean;
}

export const dummyGuestComment: GuestComment = {
    title: "환영 ~",
    content: "넹",
    design: Design.STICKER,
    privateContent: true,
    privateDate: true,
};