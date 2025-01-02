import Tag from "@remote/enumeration/Tag";

export default interface Notification {
    id: number; // 공지 ID (PK)
    name: string; // 작성자 이름
    title: string; // 공지 제목
    content: string; // 공지 내용
    date: string; // 2020-01-01 형태 (작성일)
    tag: Tag; // 공지 태그 (공지 종류)
}