export const FileTypeList = [
    'IMG',
    'MUSIC'
] as const;
export type FileType = typeof FileTypeList[number];
