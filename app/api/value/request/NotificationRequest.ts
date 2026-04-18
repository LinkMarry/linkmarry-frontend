import {type Tag} from "~/api/enumeration/Tag.ts";

export default interface NotificationRequest {
    // 공지 태그
    tag: Tag;

    // 공지 제목
    title: string;

    // 공지 내용
    content: string;
}
