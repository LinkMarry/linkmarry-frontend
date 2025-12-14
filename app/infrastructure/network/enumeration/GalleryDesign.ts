import {allCasesOfEnum} from "~/shared/enum-util";

const GalleryDesignValues = {
    SLIDE: 'SLIDE',
    HIGHLIGHT: 'HIGHLIGHT',
    GRID: 'GRID',
} as const;

export type GalleryDesign = typeof GalleryDesignValues[keyof typeof GalleryDesignValues];
export const GalleryDesignList = allCasesOfEnum(GalleryDesignValues);

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