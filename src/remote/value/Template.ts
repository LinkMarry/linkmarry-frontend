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
]

export default interface Template {
    // 선택한 템플릿 이름
    templateName: string;

    // 선택한 템플릿 색
    templateColor: TemplateColor;

    // 선택한 템플릿 폰트
    templateFont: string;

    // 선택한 템플릿 폰트 사이즈
    templateFontSize: string;
}

export const defaultTemplate: Template = {
    templateName: '템플릿1',
    templateColor: '#F7F7F2',
    templateFont: 'LINE',
    templateFontSize: '14px',
}

export const dummyTemplate: Template = {
    templateName: '템플릿1',
    templateColor: '#F7F7F2',
    templateFont: 'LINE',
    templateFontSize: '14px',
};