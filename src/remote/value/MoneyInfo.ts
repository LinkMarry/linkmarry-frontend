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