import {allCasesOfEnum} from "@src/shared/enum.util";

enum Opening {
    NONE = 'NONE',
    LETTERING = 'LETTERING',
    TYPING = 'TYPING',
}

export const openingMap: Record<Opening, {
    korean: string;
}> = {
    [Opening.NONE]: {
        korean: '선택안함'
    },
    [Opening.LETTERING]: {
        korean: '레터링'
    },
    [Opening.TYPING]: {
        korean: '타이핑'
    }
};

export function fromKorean(korean: string): Opening | null {
    const entry = Object.entries(openingMap).find(([, value]) => value.korean === korean);
    return entry ? (entry[0] as Opening) : null;
}

export const openingList = allCasesOfEnum(Opening);

export default Opening;
