import {FontFamily} from "@designsystem/foundation/text/TextType";

export type DesignColor =
    '#F7F7F2'
    | '#FBF2F2'
    | '#ECECEC'
    | '#F6F2F2'
    | '#F7F4FE'
    | '#FFFEF5'
    | '#EDF8F8'
    | '#FFF4EB';

export type TemplateFontSize = 'large' | 'medium' | 'small'
export const templateFontSizes: TemplateFontSize[] = ['large', 'medium', 'small'];

export const templateFontSizeRecord: Record<TemplateFontSize, {
    korean: string,
    addFontSize: number
}> = {
    large: {
        korean: '크게',
        addFontSize: 2
    },
    medium: {
        korean: '보통',
        addFontSize: 0
    },
    small: {
        korean: '작게',
        addFontSize: -2
    }
};

export default interface WeddingDesign {
    // 선택한 템플릿 이름
    weddingDesignName: string;

    // 선택한 템플릿 색
    weddingDesignColor: DesignColor;

    // 선택한 템플릿 폰트
    weddingDesignFont: FontFamily;

    // 선택한 템플릿 폰트 사이즈
    weddingDesignFontSize: TemplateFontSize;

    // 대표 사진 URL
    titleImgUrl: string;

    // 오프닝 여부
    opening: boolean;

    // 오프닝 애니메이션 텍스트
    openingText: string;
}

export const defaultTemplate: WeddingDesign = {
    weddingDesignName: '화이트 모먼트',
    weddingDesignColor: '#F7F7F2',
    weddingDesignFont: 'LINESeedKR',
    weddingDesignFontSize: 'medium',
    titleImgUrl: '',
    opening: true,
    openingText: '1'
}

export const dummyTemplate: WeddingDesign = {
    weddingDesignName: '화이트 모먼트',
    weddingDesignColor: '#FFFEF5',
    weddingDesignFont: 'LINESeedKR',
    weddingDesignFontSize: 'large',
    titleImgUrl: 'https://linkmarry.s3.ap-northeast-2.amazonaws.com/27942cb0-58c9-4d44-95a7-c6134547377d-GettyImages-jv12578254.jpg.jpg',
    opening: true,
    openingText: '1'
};
