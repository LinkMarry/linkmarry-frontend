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
    groomTel: "010-1234-5678",
    groomFatherTel: "010-1234-5678",
    groomMotherTel: "010-1234-5678",
    brideTel: "010-1234-5678",
    brideFatherTel: "010-1234-5678",
    brideMotherTel: "010-1234-5678"
};