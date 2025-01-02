import Tag from "../../enumeration/Tag";

export default interface NotificationRequest {
    tag: Tag; // 공지 태그
    title: string; // 공지 제목
    content: string; // 공지 내용
}