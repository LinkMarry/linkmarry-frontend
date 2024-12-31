export default interface BaseInfo {
    groomName: string; // 신랑 이름
    groomFatherName: string; // 신랑 아빠 이름
    groomFatherStatus: boolean; // 신랑 아빠 생존 상태
    groomMotherName: string; // 신랑 엄마 이름
    groomMotherStatus: boolean; // 신랑 엄마 생존 상태
    groomFamilyName: string; // 관계 (기본값 : 아들)
    brideName: string; // 신부 이름
    brideFatherName: string; // 신부 아빠 이름
    brideFatherStatus: boolean; // 신부 아빠 생존 상태
    brideMotherName: string; // 신부 엄마 이름
    brideMotherStatus: boolean; // 신부 엄마 생존 상태
    brideFamilyName: string; // 관계 (기본값 : 딸)
    statusFlower: boolean; // 국화로 표시 (기본값 : false)
    brideMarkFirst: boolean; // 신부먼저 표시 (기본값 : false)
}