export const UserRoleList = [
    'ROLE_ADMIN',
    'ROLE_USER',
] as const;

export type UserRole = typeof UserRoleList[number];