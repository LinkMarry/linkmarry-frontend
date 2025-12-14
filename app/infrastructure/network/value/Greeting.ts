import {type GreetingDesign} from "~/infrastructure/network/enumeration/GreetingDesign";


export default interface Greeting {
    // 인사말 제목
    greetingTitle: string;

    // 인사말 내용
    greetingContent: string;

    // 인사말 디자인
    greetingDesign: GreetingDesign;
}

export const defaultGreeting: Greeting = {
    greetingTitle: '',
    greetingContent: '',
    greetingDesign: 'BASIC'
}

export const dummyGreeting: Greeting = {
    greetingTitle: "",
    greetingContent: "새로운 시작을 알리는 날,\n소중한 분들과 함께하고 싶습니다.\n함께해 주셔서 사랑과 행복을 나눠주세요.",
    greetingDesign: 'FLOWER'
};
