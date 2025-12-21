export const FileTypeList = [
    'IMG',
    'FILE',
    'EMOJI',
] as const;
export type FileTypes = typeof FileTypeList[number];