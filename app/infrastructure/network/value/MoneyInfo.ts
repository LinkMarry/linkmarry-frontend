export default interface MoneyInfo {

    // 축의금 제목
    infoTitle: string;

    // 축의금 설명
    infoContent: string;

    // 카카오페이 연동 상태
    kakaoStatus: boolean;

    // 이름
    groomNameMoneyInfo: string;

    // 은행
    groomBankName: string;

    // 계좌번호
    groomBankNumber: string;

    // 카카오페이 URL
    groomKakaoUrl: string;

    // 토글여부
    groomToggle: boolean;

    // 이름
    groomFatherNameMoneyInfo: string;

    // 은행
    groomFatherBankName: string;

    // 계좌번호
    groomFatherBankNumber: string;

    // 카카오페이 URL
    groomFatherKakaoUrl: string;

    // 토글여부
    groomFatherToggle: boolean;

    // 이름
    groomMotherNameMoneyInfo: string;

    // 은행
    groomMotherBankName: string;

    // 계좌번호
    groomMotherBankNumber: string;

    // 카카오페이 URL
    groomMotherKakaoUrl: string;

    // 토글여부
    groomMotherToggle: boolean;

    // 이름
    brideNameMoneyInfo: string;

    // 은행
    brideBankName: string;

    // 계좌번호
    brideBankNumber: string;

    // 카카오페이 URL
    brideKakaoUrl: string;

    // 토글여부
    brideToggle: boolean;

    // 이름
    brideFatherNameMoneyInfo: string;

    // 은행
    brideFatherBankName: string;

    // 계좌번호
    brideFatherBankNumber: string;

    // 카카오페이 URL
    brideFatherKakaoUrl: string;

    // 토글여부
    brideFatherToggle: boolean;

    // 이름
    brideMotherNameMoneyInfo: string;

    // 은행
    brideMotherBankName: string;

    // 계좌번호
    brideMotherBankNumber: string;

    // 카카오페이 URL
    brideMotherKakaoUrl: string;

    // 토글여부
    brideMotherToggle: boolean;
}

export const defaultMoneyInfo: MoneyInfo = {
    infoTitle: "",
    infoContent: "",
    kakaoStatus: false,
    groomNameMoneyInfo: "",
    groomBankName: "",
    groomBankNumber: "",
    groomKakaoUrl: "",
    groomToggle: false,
    groomFatherNameMoneyInfo: "",
    groomFatherBankName: "",
    groomFatherBankNumber: "",
    groomFatherKakaoUrl: "",
    groomFatherToggle: false,
    groomMotherNameMoneyInfo: "",
    groomMotherBankName: "",
    groomMotherBankNumber: "",
    groomMotherKakaoUrl: "",
    groomMotherToggle: false,
    brideNameMoneyInfo: "",
    brideBankName: "",
    brideBankNumber: "",
    brideKakaoUrl: "",
    brideToggle: false,
    brideFatherNameMoneyInfo: "",
    brideFatherBankName: "",
    brideFatherBankNumber: "",
    brideFatherKakaoUrl: "",
    brideFatherToggle: false,
    brideMotherNameMoneyInfo: "",
    brideMotherBankName: "",
    brideMotherBankNumber: "",
    brideMotherKakaoUrl: "",
    brideMotherToggle: false
}

export const dummyMoneyInfo: MoneyInfo = {
    infoTitle: "축의금",
    infoContent: "축의금 보내실 곳",
    kakaoStatus: false,
    groomNameMoneyInfo: "김민수",
    groomBankName: "ㅇㅇ은행",
    groomBankNumber: "12345678",
    groomKakaoUrl: "",
    groomToggle: true,
    groomFatherNameMoneyInfo: "",
    groomFatherBankName: "",
    groomFatherBankNumber: "",
    groomFatherKakaoUrl: "",
    groomFatherToggle: false,
    groomMotherNameMoneyInfo: "",
    groomMotherBankName: "",
    groomMotherBankNumber: "",
    groomMotherKakaoUrl: "",
    groomMotherToggle: false,
    brideNameMoneyInfo: "김지안",
    brideBankName: "ㅇㅇ은행",
    brideBankNumber: "12345678",
    brideKakaoUrl: "",
    brideToggle: true,
    brideFatherNameMoneyInfo: "",
    brideFatherBankName: "",
    brideFatherBankNumber: "",
    brideFatherKakaoUrl: "",
    brideFatherToggle: false,
    brideMotherNameMoneyInfo: "",
    brideMotherBankName: "",
    brideMotherBankNumber: "",
    brideMotherKakaoUrl: "",
    brideMotherToggle: false
}

export type MoneyInfoByBrideMarkFirst = {
    bankName: string;
    bankNumber: string;
    toggle: boolean;
    kakaoUrl: string;
    nameMoneyInfo: string;
    korean: string;
}

export function getMoneyInfoByBrideMarkFirst(moneyInfo: MoneyInfo, brideMarkFirst: boolean): {
    first: MoneyInfoByBrideMarkFirst;
    firstFather: MoneyInfoByBrideMarkFirst;
    firstMother: MoneyInfoByBrideMarkFirst;
    second: MoneyInfoByBrideMarkFirst;
    secondFather: MoneyInfoByBrideMarkFirst;
    secondMother: MoneyInfoByBrideMarkFirst;
    kakaoStatus: boolean;
} {
    const groomMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.groomBankName,
        bankNumber: moneyInfo.groomBankNumber,
        toggle: moneyInfo.groomToggle,
        kakaoUrl: moneyInfo.groomKakaoUrl,
        nameMoneyInfo: moneyInfo.groomNameMoneyInfo,
        korean: '신랑'
    };

    const groomFatherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.groomFatherBankName,
        bankNumber: moneyInfo.groomFatherBankNumber,
        toggle: moneyInfo.groomFatherToggle,
        kakaoUrl: moneyInfo.groomFatherKakaoUrl,
        nameMoneyInfo: moneyInfo.groomFatherNameMoneyInfo,
        korean: '아버지'
    };

    const groomMotherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.groomMotherBankName,
        bankNumber: moneyInfo.groomMotherBankNumber,
        toggle: moneyInfo.groomMotherToggle,
        kakaoUrl: moneyInfo.groomMotherKakaoUrl,
        nameMoneyInfo: moneyInfo.groomMotherNameMoneyInfo,
        korean: '어머니'
    };

    const brideMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.brideBankName,
        bankNumber: moneyInfo.brideBankNumber,
        toggle: moneyInfo.brideToggle,
        kakaoUrl: moneyInfo.brideKakaoUrl,
        nameMoneyInfo: moneyInfo.brideNameMoneyInfo,
        korean: '신부'
    };

    const brideFatherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.brideFatherBankName,
        bankNumber: moneyInfo.brideFatherBankNumber,
        toggle: moneyInfo.brideFatherToggle,
        kakaoUrl: moneyInfo.brideFatherKakaoUrl,
        nameMoneyInfo: moneyInfo.brideFatherNameMoneyInfo,
        korean: '아버지'
    };

    const brideMotherMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.brideMotherBankName,
        bankNumber: moneyInfo.brideMotherBankNumber,
        toggle: moneyInfo.brideMotherToggle,
        kakaoUrl: moneyInfo.brideMotherKakaoUrl,
        nameMoneyInfo: moneyInfo.brideMotherNameMoneyInfo,
        korean: '어머니'
    };

    if (brideMarkFirst) {
        return {
            first: brideMoneyInfo,
            firstFather: brideFatherMoneyInfo,
            firstMother: brideMotherMoneyInfo,
            second: groomMoneyInfo,
            secondFather: groomFatherMoneyInfo,
            secondMother: groomMotherMoneyInfo,
            kakaoStatus: moneyInfo.kakaoStatus
        }
    } else {
        return {
            first: groomMoneyInfo,
            firstMother: groomMotherMoneyInfo,
            firstFather: groomFatherMoneyInfo,
            second: brideMoneyInfo,
            secondFather: brideFatherMoneyInfo,
            secondMother: brideMotherMoneyInfo,
            kakaoStatus: moneyInfo.kakaoStatus
        }
    }
}
