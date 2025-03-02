import {FontFamily} from "@designsystem/foundation/text/TextType";

export type TemplateName =
    '화이트 모먼트'
    | '포레스트 러브'
    | '네이처 블리스'
    | '소울메이트'
    | '클래식 엘레강스'
    | '내추럴 가든'
    | '모던 심플'
    | '로맨틱 포레스트'
    | '드림 웨딩'
    | '퓨어 러브'
    | '모던 러브'
    | '클래식 로맨스';
export const templateNames: TemplateName[] = [
    '화이트 모먼트',
    '포레스트 러브',
    '네이처 블리스',
    '소울메이트',
    '클래식 엘레강스',
    '내추럴 가든',
    '모던 심플',
    '로맨틱 포레스트',
    '드림 웨딩',
    '퓨어 러브',
    '모던 러브',
    '클래식 로맨스'
];
export const templateNameRecord: Record<TemplateName, {
    imgSrc: string;
}> = {
    '화이트 모먼트': {
        imgSrc: '/template-sample/template1.webp'
    },
    '포레스트 러브': {
        imgSrc: '/template-sample/template2.webp'
    },
    '네이처 블리스': {
        imgSrc: '/template-sample/template4.webp'
    },
    소울메이트: {
        imgSrc: '/template-sample/template6.webp'
    },
    '클래식 엘레강스': {
        imgSrc: ''
    },
    '내추럴 가든': {
        imgSrc: ''
    },
    '모던 심플': {
        imgSrc: ''
    },
    '로맨틱 포레스트': {
        imgSrc: ''
    },
    '드림 웨딩': {
        imgSrc: ''
    },
    '퓨어 러브': {
        imgSrc: ''
    },
    '모던 러브': {
        imgSrc: ''
    },
    '클래식 로맨스': {
        imgSrc: ''
    },
}

export type TemplateColor =
    '#F7F7F2'
    | '#FBF2F2'
    | '#ECECEC'
    | '#F6F2F2'
    | '#F7F4FE'
    | '#FFFEF5'
    | '#EDF8F8'
    | '#FFF4EB';
export const templateColors: TemplateColor[] = [
    '#F7F7F2', '#FBF2F2', '#ECECEC', '#F6F2F2', '#F7F4FE', '#FFFEF5', '#EDF8F8', '#FFF4EB'
];

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

export default interface Template {
    // 선택한 템플릿 이름
    templateName: TemplateName;

    // 선택한 템플릿 색
    templateColor: TemplateColor;

    // 선택한 템플릿 폰트
    templateFont: FontFamily;

    // 선택한 템플릿 폰트 사이즈
    templateFontSize: TemplateFontSize;

    // 대표 사진 URL
    titleImgUrl: string;
}

export const defaultTemplate: Template = {
    templateName: '화이트 모먼트',
    templateColor: '#F7F7F2',
    templateFont: 'LINESeedKR',
    templateFontSize: 'medium',
    titleImgUrl: ''
}

export const dummyTemplate: Template = {
    templateName: '화이트 모먼트',
    templateColor: '#FFFEF5',
    templateFont: 'LINESeedKR',
    templateFontSize: 'large',
    titleImgUrl: 'https://linkmarry.s3.ap-northeast-2.amazonaws.com/27942cb0-58c9-4d44-95a7-c6134547377d-GettyImages-jv12578254.jpg.jpg'
};
