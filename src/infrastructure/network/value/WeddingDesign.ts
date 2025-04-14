import {FontFamily} from "@src/userinterface/foundation/text/TextType";
import Opening from "@src/infrastructure/network/enumeration/Opening";
import {css, RuleSet} from "styled-components";

export default interface WeddingDesign {
    // 선택한 템플릿 이름
    weddingDesignName: string;

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

export type WeddingDesignColor = WeddingDesignDefaultColor | WeddingDesignPaperColor | string;

export type WeddingDesignDefaultColor =
    '#FFFFFF'
    | '#F7F7F2'
    | '#F6F2F2'
    | '#FBF2F2'
    | '#FFFEF5'
    | '#EDF8F8'
    | '#ECECEC';


export const weddingDesignDefaultColorList: WeddingDesignColor[] = [
    '#FFFFFF',
    '#F7F7F2',
    '#F6F2F2',
    '#FBF2F2',
    '#FFFEF5',
    '#EDF8F8',
    '#ECECEC',
];

export type WeddingDesignPaperColor =
    'paper1' |
    'paper2' |
    'paper3' |
    'paper4';

export const weddingDesignPaperColorList: WeddingDesignPaperColor[] = [
    'paper1',
    'paper2',
    'paper3',
    'paper4'
];

export function isPaperColor(weddingDesignColor: WeddingDesignColor): boolean {
    return weddingDesignColor.startsWith('paper');
}

export function backgroundStyle(weddingDesignColor: WeddingDesignColor): RuleSet {
    return css`
        ${isPaperColor(weddingDesignColor) ? css`
            background: url("/paper/${weddingDesignColor}.png");
        ` : css`
            background: ${weddingDesignColor};
        `};
    `
}

export type WeddingDesignFontSize = 'basic' | 'large' | 'extraLarge'
export const weddingDesignFontSizeList: WeddingDesignFontSize[] = ['basic', 'large', 'extraLarge'];

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
    opening: Opening.NONE,
    openingText: "We're getting married!"
}

export type OpeningText = 'We\'re getting married!' | '저희 둘 결혼합니다' | 'Welcome to Our Wedding' | '새로운 시작을 함께해주세요';
export const openingTextList = ['We\'re getting married!', '저희 둘 결혼합니다', 'Welcome to Our Wedding', '새로운 시작을 함께해주세요'];

export const dummyWeddingDesign: WeddingDesign = {
    weddingDesignName: '화이트 모먼트',
    weddingDesignColor: '#FFFEF5',
    weddingDesignFont: 'LINESeedKR',
    weddingDesignFontSize: 'basic',
    titleImgUrl: 'https://linkmarry.s3.ap-northeast-2.amazonaws.com/27942cb0-58c9-4d44-95a7-c6134547377d-GettyImages-jv12578254.jpg.jpg',
    opening: Opening.NONE,
    openingText: "We're getting married!"
};
