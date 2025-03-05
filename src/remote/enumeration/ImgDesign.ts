enum ImgDesign {
    SLIDE = 'SLIDE',
    HIGHLIGHT = 'HIGHLIGHT',
    GRID = 'GRID',
}

export const imgDesigns: ImgDesign[] = [ImgDesign.SLIDE, ImgDesign.GRID];
export const imgDesignRecord: Record<ImgDesign, {
    index: number,
    korean: string,
}> = {
    [ImgDesign.SLIDE]: {
        index: 0,
        korean: '슬라이드'
    },
    [ImgDesign.HIGHLIGHT]: {
        index: 1,
        korean: '하이라이트'
    },
    [ImgDesign.GRID]: {
        index: 2,
        korean: '그리드'
    },
};

export default ImgDesign;
