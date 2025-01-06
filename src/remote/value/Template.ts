export default interface Template {
    // 선택한 템플릿 이름
    templateName: string;
    
    // 선택한 템플릿 색
    templateColor: string;
    
    // 선택한 템플릿 폰트
    templateFont: string;
    
    // 선택한 템플릿 폰트 사이즈
    templateFontSize: string;
}

export const dummyTemplate: Template = {
    templateName: '템플릿1',
    templateColor: '#F7F7F2',
    templateFont: 'LINE',
    templateFontSize: '14px',
};