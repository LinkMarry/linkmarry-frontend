import {type FontFamily} from "~/userinterface/foundation/text/TextType";
import {type Opening} from "~/infrastructure/network/enumeration/Opening";
import type {CSSProperties} from "react";

export default interface WeddingDesign {
    // 선택한 템플릿 이름
    weddingDesignName: WeddingDesignName;

    // 선택한 템플릿 색
    weddingDesignColor: WeddingDesignColor;

    // 선택한 템플릿 폰트
    weddingDesignFont: FontFamily;

    // 선택한 템플릿 폰트 사이즈
    weddingDesignFontSize: WeddingDesignFontSize;

    // 대표 사진 URL
    titleImgUrl: string;

    // 오프닝 여부
    opening: Opening;

    // 오프닝 애니메이션 텍스트
    openingText: OpeningText;
}

export type WeddingDesignName = string;

export type WeddingDesignColor = WeddingDesignDefaultColor | WeddingDesignPaperColor | string;


export const weddingDesignDefaultColorList = [
    '#FFFFFF',
    '#F7F7F2',
    '#F6F2F2',
    '#FBF2F2',
    '#FFFEF5',
    '#EDF8F8',
    '#ECECEC',
] as const;

export type WeddingDesignDefaultColor = typeof weddingDesignDefaultColorList[number];

export const weddingDesignPaperColorList = [
    'paper1',
    'paper2',
    'paper3',
    'paper4'
] as const;

export type WeddingDesignPaperColor = typeof weddingDesignPaperColorList[number];

export function isPaperColor(weddingDesignColor: WeddingDesignColor): boolean {
    return weddingDesignColor.startsWith('paper');
}

export function backgroundStyle(weddingDesignColor: WeddingDesignColor): CSSProperties['background'] {
    if (isPaperColor(weddingDesignColor)) {
        return `url("/paper/${weddingDesignColor}.png")`;
    } else {
        return weddingDesignColor;
    }
}

export const weddingDesignFontSizeList = ['basic', 'large', 'extraLarge'] as const;
export type WeddingDesignFontSize = typeof weddingDesignFontSizeList[number];

export const weddingDesignFontSizeMap: Record<WeddingDesignFontSize, {
    korean: string,
    addFontSize: number
}> = {
    basic: {
        korean: '기본',
        addFontSize: 0
    },
    large: {
        korean: '크게',
        addFontSize: 2
    },
    extraLarge: {
        korean: '더 크게',
        addFontSize: 4
    }
};

export const defaultWeddingDesign: WeddingDesign = {
    weddingDesignName: '',
    weddingDesignColor: '#FFFFFF',
    weddingDesignFont: 'Pretendard',
    weddingDesignFontSize: 'basic',
    titleImgUrl: '',
    opening: 'NONE',
    openingText: "We're getting married!"
}

export const openingTextList = [
    'We\'re getting married!', '저희 둘 결혼합니다',
    'Welcome to Our Wedding',
    '새로운 시작을 함께해주세요'
] as const;
export type OpeningText = typeof openingTextList[number];

export const dummyWeddingDesign: WeddingDesign = {
    weddingDesignName: '모던 심플',
    weddingDesignColor: '#FFFFFF',
    weddingDesignFont: 'Pretendard',
    weddingDesignFontSize: 'basic',
    titleImgUrl: 'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_3.png',
    opening: 'LETTERING',
    openingText: "We're getting married!"
};
