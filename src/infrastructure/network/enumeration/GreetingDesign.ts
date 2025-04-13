import {allCasesOfEnum} from "@src/shared/enum.util";

enum GreetingDesign {
    BASIC = 'BASIC',
    TEXT = 'TEXT',
    FLOWER = 'FLOWER',
}

export const greetingDesignMap: Record<GreetingDesign, {
    korean: string;
}> = {
    [GreetingDesign.BASIC]: {
        korean: '기본'
    },
    [GreetingDesign.TEXT]: {
        korean: '초대 글자'
    },
    [GreetingDesign.FLOWER]: {
        korean: '꽃 아이콘'
    }
}
export const greetingDesignList = allCasesOfEnum(GreetingDesign);

export default GreetingDesign;
