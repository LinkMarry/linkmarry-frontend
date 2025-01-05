import Tag from "@remote/enumeration/Tag";

export default interface NotificationRequest {
    // 공지 태그
    tag: Tag;
    
    // 공지 제목
    title: string;
    
    // 공지 내용
    content: string;
}