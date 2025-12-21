export const kakaoButtonList = [
    'NONE',
    'PLACE',
    'ATTEND',
] as const;
export type KakaoButton = typeof kakaoButtonList[number];

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