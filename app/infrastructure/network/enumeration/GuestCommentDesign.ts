import {allCasesOfEnum} from "~/shared/enum-util";

const GuestCommentDesignValues = {
    BASIC: 'BASIC',
    STICKER: 'STICKER',
} as const;

export type GuestCommentDesign = typeof GuestCommentDesignValues[keyof typeof GuestCommentDesignValues];
export const GuestCommentDesignList = allCasesOfEnum(GuestCommentDesignValues);
export const guestCommentDesignMap: Record<GuestCommentDesign, {
    korean: string
}> = {
    BASIC: {
        korean: '기본형'
    },
    STICKER: {
        korean: '스티커'
    }
};