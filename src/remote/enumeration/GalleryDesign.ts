import {allCasesOfEnum} from "@util/enum.util";

enum GalleryDesign {
    SLIDE = 'SLIDE',
    HIGHLIGHT = 'HIGHLIGHT',
    GRID = 'GRID',
}

export const galleryDesignList = allCasesOfEnum(GalleryDesign);
export const galleryDesignMap: Record<GalleryDesign, {
    korean: string,
}> = {
    [GalleryDesign.SLIDE]: {
        korean: '슬라이드'
    },
    [GalleryDesign.HIGHLIGHT]: {
        korean: '하이라이트'
    },
    [GalleryDesign.GRID]: {
        korean: '그리드'
    },
};

export default GalleryDesign;
