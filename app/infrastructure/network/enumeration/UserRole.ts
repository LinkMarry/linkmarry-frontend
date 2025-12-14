import {allCasesOfEnum} from "~/shared/enum-util.ts";

const UserRoleValues = {
    ROLE_ADMIN: 'ROLE_ADMIN',
    ROLE_USER: 'ROLE_USER',
} as const;


export type UserRole = typeof UserRoleValues[keyof typeof UserRoleValues];
export const UserRoleList = allCasesOfEnum(UserRoleValues);