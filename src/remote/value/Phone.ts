export default interface Phone {
    // 신랑 전번
    groomTel: string;

    // 신랑 아빠 전번
    groomFatherTel: string;

    // 신랑 엄마 전번
    groomMotherTel: string;

    // 신부 전번
    brideTel: string;

    // 신부 아빠 전번
    brideFatherTel: string;

    // 신부 엄마 전번
    brideMotherTel: string;
}

export const defaultPhone: Phone = {
    groomTel: "",
    groomFatherTel: "",
    groomMotherTel: "",
    brideTel: "",
    brideFatherTel: "",
    brideMotherTel: "",
};

export const dummyPhone: Phone = {
    groomTel: "01012345678",
    groomFatherTel: "01012345678",
    groomMotherTel: "01012345678",
    brideTel: "01012345678",
    brideFatherTel: "01012345678",
    brideMotherTel: "01012345678",
};