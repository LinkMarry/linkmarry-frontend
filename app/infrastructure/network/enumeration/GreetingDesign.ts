import {allCasesOfEnum} from "~/shared/enum-util";

const GreetingDesignValues = {
    BASIC: 'BASIC',
    TEXT: 'TEXT',
    FLOWER: 'FLOWER',
} as const;

export type GreetingDesign = typeof GreetingDesignValues[keyof typeof GreetingDesignValues];
export const GreetingDesignList = allCasesOfEnum(GreetingDesignValues);

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