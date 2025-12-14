import {allCasesOfEnum} from "~/shared/enum-util.ts";

const FileTypeValues = {
    IMG: 'IMG',
    FILE: 'FILE',
    EMOJI: 'EMOJI'
} as const;

export type FileType = typeof FileTypeValues[keyof typeof FileTypeValues];
export const FileTypeList = allCasesOfEnum(FileTypeValues);