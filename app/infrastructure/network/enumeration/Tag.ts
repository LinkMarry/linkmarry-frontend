import {allCasesOfEnum} from "~/shared/enum-util.ts";

const TagValues = {
    NOTIFICATION: 'NOTIFICATION',
    UPDATE: 'UPDATE',
    ETC: 'ETC',
    PRIVACY: 'PRIVACY',
    TERMS: 'TERMS',
} as const;

const TagWithAllValues = {
    ALL: 'ALL',
    ...TagValues,
} as const;

export type Tag = typeof TagValues[keyof typeof TagValues];
export type TagWithAll = typeof TagWithAllValues[keyof typeof TagWithAllValues];
export const TagList = allCasesOfEnum(TagValues);
export const TagWithAll = allCasesOfEnum(TagWithAllValues);

export const tagToKoreanRecord: Record<TagWithAll, string> = {
    ALL: '전체',
    NOTIFICATION: '공지사항',
    UPDATE: '업데이트',
    ETC: '기타',
    PRIVACY: '개인정보 처리방침',
    TERMS: '이용약관'
};