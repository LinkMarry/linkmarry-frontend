export default interface BaseInfo {

    // 신랑 이름 성
    groomFirstName: string;

    // 신랑 이름
    groomLastName: string;

    // 신랑 영어 이름
    groomEnglishName: string;

    // 신랑 아빠 이름 성
    groomFatherFirstName: string;

    // 신랑 아빠 이름
    groomFatherLastName: string;

    // 신랑 아빠 생존 상태
    groomFatherStatus: boolean;

    // 신랑 엄마 이름 성
    groomMotherFirstName: string;

    // 신랑 엄마 이름
    groomMotherLastName: string;

    // 신랑 엄마 생존 상태
    groomMotherStatus: boolean;

    // 관계 (기본값 : 아들)
    groomFamilyName: string;

    // 관계 (기본값 : 아버지)
    groomFatherFamilyName: string;

    // 관계 (기본값 : 어머니)
    groomMotherFamilyName: string;

    // 신부 이름 성
    brideFirstName: string;

    // 신부 이름
    brideLastName: string;

    // 신부 영어 이름
    brideEnglishName: string;

    // 신부 아빠 이름 성
    brideFatherFirstName: string;

    // 신부 아빠 이름
    brideFatherLastName: string;

    // 신부 아빠 생존 상태
    brideFatherStatus: boolean;

    // 신부 엄마 이름 성
    brideMotherFirstName: string;

    // 신부 엄마 이름
    brideMotherLastName: string;

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
    groomFirstName: '',
    groomLastName: '',
    groomEnglishName: '',
    groomFatherFirstName: '',
    groomFatherLastName: "",
    groomFatherStatus: false,
    groomMotherFirstName: "",
    groomMotherLastName: '',
    groomMotherStatus: false,
    groomFamilyName: "아들",
    groomFatherFamilyName: '아버지',
    groomMotherFamilyName: '어머니',
    brideFirstName: "",
    brideLastName: '',
    brideEnglishName: '',
    brideFatherFirstName: "",
    brideFatherLastName: "",
    brideFatherStatus: false,
    brideMotherFirstName: "",
    brideMotherLastName: '',
    brideMotherStatus: false,
    brideFamilyName: "딸",
    brideFatherFamilyName: '아버지',
    brideMotherFamilyName: '어머니',
    statusFlower: false,
    brideMarkFirst: false,
}

export const dummyBaseInfo: BaseInfo = {
    groomFirstName: "김",
    groomLastName: '민수',
    groomEnglishName: 'MINSU',
    groomFatherFirstName: "김",
    groomFatherLastName: '수민',
    groomFatherStatus: false,
    groomMotherFirstName: "이",
    groomMotherLastName: '수진',
    groomMotherStatus: false,
    groomFamilyName: "아들",
    groomFatherFamilyName: '',
    groomMotherFamilyName: '',
    brideFirstName: "김",
    brideLastName: '민지',
    brideEnglishName: 'MINJI',
    brideFatherFirstName: "김",
    brideFatherLastName: '강민',
    brideFatherStatus: false,
    brideMotherFirstName: "이",
    brideMotherLastName: '지안',
    brideMotherStatus: false,
    brideFamilyName: "딸",
    brideFatherFamilyName: '',
    brideMotherFamilyName: '',
    statusFlower: false,
    brideMarkFirst: false
};

export type BaseInfoByBrideMarkFirst = {
    name: string;
    firstName: string;
    lastName: string;
    englishName: string;
    fatherName: string;
    fatherStatus: boolean;
    motherName: string;
    motherStatus: boolean;
    familyName: string;
    korean: string;
}

// firstname + lastname 임시
export function getBaseInfoByBrideMarkFirst(baseInfo: BaseInfo): {
    first: BaseInfoByBrideMarkFirst;
    second: BaseInfoByBrideMarkFirst;
} {
    const groomInfo: BaseInfoByBrideMarkFirst = {
        name: baseInfo.groomFirstName + baseInfo.groomLastName,
        firstName: baseInfo.groomFirstName,
        lastName: baseInfo.groomLastName,
        englishName: baseInfo.groomEnglishName,
        fatherName: baseInfo.groomFatherFirstName + baseInfo.groomFatherLastName,
        fatherStatus: baseInfo.groomFatherStatus,
        motherName: baseInfo.groomMotherFirstName + baseInfo.groomMotherLastName,
        motherStatus: baseInfo.groomMotherStatus,
        familyName: baseInfo.groomFamilyName,
        korean: '신랑'
    };

    const brideInfo: BaseInfoByBrideMarkFirst = {
        name: baseInfo.brideFirstName + baseInfo.brideLastName,
        firstName: baseInfo.brideFirstName,
        lastName: baseInfo.brideLastName,
        englishName: baseInfo.brideEnglishName,
        fatherName: baseInfo.brideFatherFirstName + baseInfo.brideFatherLastName,
        fatherStatus: baseInfo.brideFatherStatus,
        motherName: baseInfo.brideMotherFirstName + baseInfo.brideMotherLastName,
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
