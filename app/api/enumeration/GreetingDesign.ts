export const GreetingDesignList = [
    'BASIC',
    'TEXT',
    'FLOWER',
] as const;
export type GreetingDesign = typeof GreetingDesignList[number];

export const greetingDesignMap: Record<GreetingDesign, {
    korean: string;
}> = {
    BASIC: {
        korean: '기본'
    },
    TEXT: {
        korean: '초대 글자'
    },
    FLOWER: {
        korean: '꽃 아이콘'
    }
}