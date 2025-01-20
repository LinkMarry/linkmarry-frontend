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
    groomKakaoUrl?: string;

    // 이름
    groomFatherNameMoneyInfo: string;

    // 은행
    groomFatherBankName: string;

    // 계좌번호
    groomFatherBankNumber: string;

    // 카카오페이 URL
    groomFatherKakaoUrl?: string;

    // 이름
    groomMotherNameMoneyInfo: string;

    // 은행
    groomMotherBankName: string;

    // 계좌번호
    groomMotherBankNumber: string;

    // 카카오페이 URL
    groomMotherKakaoUrl?: string;

    // 이름
    brideNameMoneyInfo: string;

    // 은행
    brideBankName: string;

    // 계좌번호
    brideBankNumber: string;

    // 카카오페이 URL
    brideKakaoUrl?: string;

    // 이름
    brideFatherNameMoneyInfo: string;

    // 은행
    brideFatherBankName: string;

    // 계좌번호
    brideFatherBankNumber: string;

    // 카카오페이 URL
    brideFatherKakaoUrl?: string;

    // 이름
    brideMotherNameMoneyInfo: string;

    // 은행
    brideMotherBankName: string;

    // 계좌번호
    brideMotherBankNumber: string;

    // 카카오페이 URL
    brideMotherKakaoUrl?: string;
}

export const defaultMoneyInfo: MoneyInfo = {
    brideBankName: "",
    brideBankNumber: "",
    brideFatherBankName: "",
    brideFatherBankNumber: "",
    brideFatherKakaoUrl: "",
    brideFatherNameMoneyInfo: "",
    brideKakaoUrl: "",
    brideMotherBankName: "",
    brideMotherBankNumber: "",
    brideMotherKakaoUrl: "",
    brideMotherNameMoneyInfo: "",
    brideNameMoneyInfo: "",
    groomBankName: "",
    groomBankNumber: "",
    groomFatherBankName: "",
    groomFatherBankNumber: "",
    groomFatherKakaoUrl: "",
    groomFatherNameMoneyInfo: "",
    groomKakaoUrl: "",
    groomMotherBankName: "",
    groomMotherBankNumber: "",
    groomMotherKakaoUrl: "",
    groomMotherNameMoneyInfo: "",
    groomNameMoneyInfo: "",
    infoContent: "",
    infoTitle: "",
    kakaoStatus: false
}

export const dummyMoneyInfo: MoneyInfo = {
    brideBankName: "토스뱅크",
    brideBankNumber: "1234567890",
    brideFatherBankName: "카카오뱅크",
    brideFatherBankNumber: "1234567890",
    brideFatherKakaoUrl: "google.com",
    brideFatherNameMoneyInfo: "가나다",
    brideKakaoUrl: "google.com",
    brideMotherBankName: "토스뱅크",
    brideMotherBankNumber: "1234567890",
    brideMotherKakaoUrl: "google.com",
    brideMotherNameMoneyInfo: "라마바",
    brideNameMoneyInfo: "1234567890",
    groomBankName: "토스뱅크",
    groomBankNumber: "123456890",
    groomFatherBankName: "신한은행",
    groomFatherBankNumber: "1234567890",
    groomFatherKakaoUrl: "google.com",
    groomFatherNameMoneyInfo: "사아자",
    groomKakaoUrl: "google.com",
    groomMotherBankName: "토스뱅크",
    groomMotherBankNumber: "1234567890",
    groomMotherKakaoUrl: "google.com",
    groomMotherNameMoneyInfo: "차카타",
    groomNameMoneyInfo: "차카타",
    infoContent: "그래영",
    infoTitle: "돈주세영",
    kakaoStatus: true
}

type MoneyInfoByBrideMarkFirst = {
    bankName: string;
    bankNumber: string;
    fatherBankName: string;
    fatherBankNumber: string;
    fatherKakaoUrl?: string;
    fatherNameMoneyInfo: string;
    kakaoUrl?: string;
    motherBankName: string;
    motherBankNumber: string;
    motherKakaoUrl?: string;
    motherNameMoneyInfo: string;
    nameMoneyInfo: string;
}

export function getMoneyInfoByBrideMarkFirst(moneyInfo: MoneyInfo, brideMarkFirst: boolean): {
    first: MoneyInfoByBrideMarkFirst;
    second: MoneyInfoByBrideMarkFirst;
} {
    const groomMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.groomBankName,
        bankNumber: moneyInfo.groomBankNumber,
        fatherBankName: moneyInfo.groomFatherBankName,
        fatherBankNumber: moneyInfo.groomFatherBankNumber,
        fatherKakaoUrl: moneyInfo.groomFatherKakaoUrl,
        fatherNameMoneyInfo: moneyInfo.groomFatherNameMoneyInfo,
        kakaoUrl: moneyInfo.groomKakaoUrl,
        motherBankName: moneyInfo.groomMotherBankName,
        motherBankNumber: moneyInfo.groomMotherBankNumber,
        motherKakaoUrl: moneyInfo.groomMotherKakaoUrl,
        motherNameMoneyInfo: moneyInfo.groomMotherNameMoneyInfo,
        nameMoneyInfo: moneyInfo.groomNameMoneyInfo,
    }
    
    const brideMoneyInfo: MoneyInfoByBrideMarkFirst = {
        bankName: moneyInfo.brideBankName,
        bankNumber: moneyInfo.brideBankNumber,
        fatherBankName: moneyInfo.brideFatherBankName,
        fatherBankNumber: moneyInfo.brideFatherBankNumber,
        fatherKakaoUrl: moneyInfo.brideFatherKakaoUrl,
        fatherNameMoneyInfo: moneyInfo.brideFatherNameMoneyInfo,
        kakaoUrl: moneyInfo.brideKakaoUrl,
        motherBankName: moneyInfo.brideMotherBankName,
        motherBankNumber: moneyInfo.brideMotherBankNumber,
        motherKakaoUrl: moneyInfo.brideMotherKakaoUrl,
        motherNameMoneyInfo: moneyInfo.brideMotherNameMoneyInfo,
        nameMoneyInfo: moneyInfo.brideNameMoneyInfo,
    }
    
    if (brideMarkFirst) {
        return {
            first: brideMoneyInfo,
            second: groomMoneyInfo
        }
    } else {
        return {
            first: groomMoneyInfo,
            second: brideMoneyInfo
        }
    }
}