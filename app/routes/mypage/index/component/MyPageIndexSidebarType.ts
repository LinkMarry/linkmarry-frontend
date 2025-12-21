export const myPageIndexSidebarTypeList = [
    'wedding',
    'info',
    'logout'
] as const;

export type MyPageIndexSidebarType = typeof myPageIndexSidebarTypeList[number];