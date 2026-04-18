export const TagList = [
    'NOTIFICATION',
    'UPDATE',
    'ETC',
    'PRIVACY',
    'TERMS',
] as const;

export const TagWithAllList = [
    'ALL',
    ...TagList,
] as const;

export type Tag = typeof TagList[number];
export type TagWithAll = typeof TagWithAllList[number];

export const tagToKoreanRecord: Record<TagWithAll, string> = {
    ALL: '전체',
    NOTIFICATION: '공지사항',
    UPDATE: '업데이트',
    ETC: '기타',
    PRIVACY: '개인정보 처리방침',
    TERMS: '이용약관'
};