import {LinkMarryFont} from "@designsystem/foundation/text/textType";

export type TemplateName =
    '템플릿1'
    | '템플릿2'
    | '템플릿3'
    | '템플릿4'
    | '템플릿5'
    | '템플릿6'
export const templateNames: TemplateName[] = ['템플릿1', '템플릿2', '템플릿3', '템플릿4', '템플릿5', '템플릿6'];
export const templateNameRecord: Record<TemplateName, {
    imgSrc: string;
}> = {
    템플릿1: {
        imgSrc: '/template-sample/template1.png'
    },
    템플릿2: {
        imgSrc: '/template-sample/template2.png'
    },
    템플릿3: {
        imgSrc: '/template-sample/template3.png'
    },
    템플릿4: {
        imgSrc: '/template-sample/template4.png'
    },
    템플릿5: {
        imgSrc: '/template-sample/template5.png'
    },
    템플릿6: {
        imgSrc: '/template-sample/template6.png'
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
    templateFont: LinkMarryFont;

    // 선택한 템플릿 폰트 사이즈
    templateFontSize: TemplateFontSize;
}

export const defaultTemplate: Template = {
    templateName: '템플릿1',
    templateColor: '#F7F7F2',
    templateFont: 'LINESeedKR',
    templateFontSize: 'medium',
}

export const dummyTemplate: Template = {
    templateName: '템플릿1',
    templateColor: '#F7F7F2',
    templateFont: 'LINESeedKR',
    templateFontSize: 'medium',
};