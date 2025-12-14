const OpeningValues = {
    NONE: 'NONE',
    LETTERING: 'LETTERING',
    TYPING: 'TYPING',
} as const;

export type Opening = typeof OpeningValues[keyof typeof OpeningValues];

export const openingMap: Record<Opening, {
    korean: string;
}> = {
    [OpeningValues.NONE]: {
        korean: '선택안함'
    },
    [OpeningValues.LETTERING]: {
        korean: '레터링'
    },
    [OpeningValues.TYPING]: {
        korean: '타이핑'
    }
};

export function fromKorean(korean: string): Opening | null {
    // Record의 키는 이제 OpeningValues의 키(NONE, LETTERING, TYPING)입니다.
    const entry = Object.entries(openingMap).find(([, value]) => value.korean === korean);
    // entry[0]은 "NONE", "LETTERING", "TYPING" 문자열이므로 Opening 타입으로 안전하게 캐스팅 가능합니다.
    return entry ? (entry[0] as Opening) : null;
}
export const openingList = Object.values(OpeningValues);