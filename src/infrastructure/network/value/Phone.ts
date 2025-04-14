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

    // 혼주 연락처 여부
    parentTel: boolean;
}

export const defaultPhone: Phone = {
    groomTel: "",
    groomFatherTel: "",
    groomMotherTel: "",
    brideTel: "",
    brideFatherTel: "",
    brideMotherTel: "",
    parentTel: false
};

export const dummyPhone: Phone = {
    groomTel: "010-1234-5678",
    groomFatherTel: "010-1234-5678",
    groomMotherTel: "010-1234-5678",
    brideTel: "010-1234-5678",
    brideFatherTel: "010-1234-5678",
    brideMotherTel: "010-1234-5678",
    parentTel: true

};
