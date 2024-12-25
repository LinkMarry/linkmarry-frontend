import Design from "../enumeration/Design";

export default interface QuestComment {
    title: string; // 방명록 제목 (청첩장 표시용 X)
    content: string; // 방명록 내용 (청첩장 표시용 X)
    design: Design; // 방명록 디자인 (청첩장 표시용 O)
    privateContent: boolean; // 방명록 내용 표시여부
    privateDate: boolean; // 방명록 날짜 표시 여부
}