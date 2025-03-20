import {allCasesOfEnum} from "@util/enum.util";

enum KakaoButton {
    NONE = 'NONE',
    PLACE = 'PLACE',
    ATTEND = 'ATTEND',
}

export const kakaoButtonList = allCasesOfEnum(KakaoButton);
export const kakaoButtonMap: Record<KakaoButton, {
    korean: string;
}> = {
    [KakaoButton.NONE]: {
        korean: '설정 안 함'
    },
    [KakaoButton.PLACE]: {
        korean: '위치 보기'
    },
    [KakaoButton.ATTEND]: {
        korean: '참석의사'
    }
}

export default KakaoButton;
