export default interface BaseInfo {
    // 신랑 이름
    groomName: string;
    
    // 신랑 아빠 이름
    groomFatherName: string;
    
    // 신랑 아빠 생존 상태
    groomFatherStatus: boolean;
    
    // 신랑 엄마 이름
    groomMotherName: string;
    
    // 신랑 엄마 생존 상태
    groomMotherStatus: boolean;
    
    // 관계 (기본값 : 아들)
    groomFamilyName: string;
    
    // 신부 이름
    brideName: string;
    
    // 신부 아빠 이름
    brideFatherName: string;
    
    // 신부 아빠 생존 상태
    brideFatherStatus: boolean;
    
    // 신부 엄마 이름
    brideMotherName: string;
    
    // 신부 엄마 생존 상태
    brideMotherStatus: boolean;
    
    // 관계 (기본값 : 딸)
    brideFamilyName: string;
    
    // 국화로 표시 (기본값 : false)
    statusFlower: boolean;
    
    // 신부먼저 표시 (기본값 : false)
    brideMarkFirst: boolean;
}