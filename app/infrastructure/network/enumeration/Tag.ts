import {allCasesOfEnum} from "~/shared/enum-util.ts";

const TagValues = {
    NOTIFICATION: 'NOTIFICATION',
    UPDATE: 'UPDATE',
    ETC: 'ETC',
} as const;

export type Tag = typeof TagValues[keyof typeof TagValues];
export const TagList = allCasesOfEnum(TagValues);

export const tagToKoreanRecord: Record<Tag, string> = {
    NOTIFICATION: '공지사항',
    UPDATE: '업데이트',
    ETC: '기타'
};