export const GuestCommentDesignList = [
    'BASIC',
    'STICKER',
] as const;
export type GuestCommentDesign = typeof GuestCommentDesignList[number];
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