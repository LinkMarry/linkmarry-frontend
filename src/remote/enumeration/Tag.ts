enum Tag {
    NOTIFICATION,
    UPDATE,
    ETC
}

export const tagToKoreanRecord: Record<Tag, string> = {
    [Tag.NOTIFICATION]: '공지사항',
    [Tag.UPDATE]: '업데이트',
    [Tag.ETC]: '기타'
}

export default Tag;