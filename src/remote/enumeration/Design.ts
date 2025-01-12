enum Design {
    BASIC = 'BASIC',
    STICKER = 'STICKER',
}

export const designs: Design[] = [Design.BASIC, Design.STICKER];
export const designRecord: Record<Design, {
    index: number;
    korean: string
}> = {
    [Design.BASIC]: {
        index: 0,
        korean: '기본형'
    },
    [Design.STICKER]: {
        index: 1,
        korean: '스티커'
    }
};

export default Design;