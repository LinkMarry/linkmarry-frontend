export default interface Greeting {
    // 인사말 제목
    greetingTitle: string;
    
    // 인사말 내용
    greetingContent: string;
}

export const defaultGreeting: Greeting = {
    greetingTitle: '',
    greetingContent: '',
}

export const dummyGreeting: Greeting = {
    greetingTitle: "반가워요",
    greetingContent: "그래요",
};