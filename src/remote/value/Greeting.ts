export default interface Greeting {
    // 인사말 제목
    greetingTitle: string;

    // 인사말 내용
    greetingContent: string;

    // 인사말 디자인
    greetingDesign: 'default' | 'invitation' | 'flower';
}

export const defaultGreeting: Greeting = {
    greetingTitle: '',
    greetingContent: '',
    greetingDesign: 'default'
}

export const dummyGreeting: Greeting = {
    greetingTitle: "저희의 결혼식에 여러분들을 초대합니다.",
    greetingContent: "특별한 순간 여러분들의 필요합니다.\n귀한시간 저희 결혼식 오셔서 축하부탁드립니다.\n\n내 인생에 가장 잘한 일은 너를 만난거야\n\n- 영화 디즈니 대사중 -",
    greetingDesign: 'default'
};
