import {allCasesOfEnum} from "~/shared/enum-util";

const KakaoButtonValues = {
    NONE: 'NONE',
    PLACE: 'PLACE',
    ATTEND: 'ATTEND',
}

export type KakaoButton = typeof KakaoButtonValues[keyof typeof KakaoButtonValues];
export const kakaoButtonList = allCasesOfEnum(KakaoButtonValues);
export const kakaoButtonMap: Record<KakaoButton, {
    korean: string;
}> = {
    NONE: {
        korean: '설정 안 함'
    },
    PLACE: {
        korean: '위치 보기'
    },
    ATTEND: {
        korean: '참석의사'
    }
}