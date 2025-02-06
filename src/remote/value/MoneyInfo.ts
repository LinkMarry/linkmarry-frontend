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
    infoTitle: "축의금",
    infoContent: "신랑신부의 결혼을 축하해주세요!",
    kakaoStatus: false,
    groomNameMoneyInfo: "김민수",
    groomBankName: "대구",
    groomBankNumber: "1928-1293-4192",
    groomKakaoUrl: "",
    groomFatherNameMoneyInfo: "김수민",
    groomFatherBankName: "신한",
    groomFatherBankNumber: "9700-1293-4192",
    groomFatherKakaoUrl: "",
    groomMotherNameMoneyInfo: "이수진",
    groomMotherBankName: "국민",
    groomMotherBankNumber: "5192-1293-4192",
    groomMotherKakaoUrl: "",
    brideNameMoneyInfo: "김민지",
    brideBankName: "국민",
    brideBankNumber: "3271-1293-4192",
    brideKakaoUrl: "",
    brideFatherNameMoneyInfo: "김강민",
    brideFatherBankName: "토스",
    brideFatherBankNumber: "5291-1293-4192",
    brideFatherKakaoUrl: "",
    brideMotherNameMoneyInfo: "이지안",
    brideMotherBankName: "SC 제일",
    brideMotherBankNumber: "3214-1293-4192",
    brideMotherKakaoUrl: ""
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