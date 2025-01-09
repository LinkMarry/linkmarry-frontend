enum Design {
    BASIC = 'BASIC',
    STICKER = 'STICKER',
}

export const designToKoreanRecord: Record<Design, string> = {
    [Design.BASIC]: '기본형',
    [Design.STICKER]: '스티커'
};

export default Design;