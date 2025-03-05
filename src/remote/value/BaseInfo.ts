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

    // 관계 (기본값 : 아버지)
    groomFatherFamilyName: string;

    // 관계 (기본값 : 어머니)
    groomMotherFamilyName: string;

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

    // 관계 (기본값 : 아버지)
    brideFatherFamilyName: string;

    // 관계 (기본값 : 어머니)
    brideMotherFamilyName: string;

    // 국화로 표시 (기본값 : false)
    statusFlower: boolean;

    // 신부먼저 표시 (기본값 : false)
    brideMarkFirst: boolean;
}

export const defaultBaseInfo: BaseInfo = {
    groomName: "",
    groomFatherName: "",
    groomFatherStatus: false,
    groomMotherName: "",
    groomMotherStatus: false,
    groomFamilyName: "아들",
    groomFatherFamilyName: '아버지',
    groomMotherFamilyName: '어머니',
    brideName: "",
    brideFatherName: "",
    brideFatherStatus: false,
    brideMotherName: "",
    brideMotherStatus: false,
    brideFamilyName: "딸",
    brideFatherFamilyName: '아버지',
    brideMotherFamilyName: '어머니',
    statusFlower: false,
    brideMarkFirst: false,
}

export const dummyBaseInfo: BaseInfo = {
    groomName: "김민수",
    groomFatherName: "김수민",
    groomFatherStatus: false,
    groomMotherName: "이수진",
    groomMotherStatus: false,
    groomFamilyName: "아들",
    groomFatherFamilyName: '',
    groomMotherFamilyName: '',
    brideName: "김민지",
    brideFatherName: "김강민",
    brideFatherStatus: false,
    brideMotherName: "이지안",
    brideMotherStatus: false,
    brideFamilyName: "딸",
    brideFatherFamilyName: '',
    brideMotherFamilyName: '',
    statusFlower: false,
    brideMarkFirst: false
};

type InfoByBrideMarkFirst = {
    name: string;
    fatherName: string;
    fatherStatus: boolean;
    motherName: string;
    motherStatus: boolean;
    familyName: string;
    korean: string;
}

export function getBaseInfoByBrideMarkFirst(baseInfo: BaseInfo): {
    first: InfoByBrideMarkFirst;
    second: InfoByBrideMarkFirst;
} {
    const groomInfo: InfoByBrideMarkFirst = {
        name: baseInfo.groomName,
        fatherName: baseInfo.groomFatherName,
        fatherStatus: baseInfo.groomFatherStatus,
        motherName: baseInfo.groomMotherName,
        motherStatus: baseInfo.groomMotherStatus,
        familyName: baseInfo.groomFamilyName,
        korean: '신랑'
    };

    const brideInfo: InfoByBrideMarkFirst = {
        name: baseInfo.brideName,
        fatherName: baseInfo.brideFatherName,
        fatherStatus: baseInfo.brideFatherStatus,
        motherName: baseInfo.brideMotherName,
        motherStatus: baseInfo.brideMotherStatus,
        familyName: baseInfo.brideFamilyName,
        korean: '신부'
    };

    if (baseInfo.brideMarkFirst) {
        return {
            first: brideInfo,
            second: groomInfo,
        }
    } else {
        return {
            first: groomInfo,
            second: brideInfo
        }
    }
}
