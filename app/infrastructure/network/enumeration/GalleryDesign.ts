export const GalleryDesignList = [
    'SLIDE',
    'HIGHLIGHT',
    'GRID',
] as const;
export type GalleryDesign = typeof GalleryDesignList[number];

export const galleryDesignMap: Record<GalleryDesign, {
    korean: string,
}> = {
    SLIDE: {
        korean: '슬라이드'
    },
    HIGHLIGHT: {
        korean: '하이라이트'
    },
    GRID: {
        korean: '그리드'
    },
};