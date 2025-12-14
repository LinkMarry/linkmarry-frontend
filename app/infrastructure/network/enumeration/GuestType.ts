import {allCasesOfEnum} from "~/shared/enum-util";

const GuestTypeValues = {
    BRIDE: 'BRIDE',
    GROOM: 'GROOM',
} as const;
export type GuestType = typeof GuestTypeValues[keyof typeof GuestTypeValues];
export const GuestTypeList = allCasesOfEnum(GuestTypeValues);

export const guestTypeMap: Record<GuestType, {
    korean: string;
}> = {
    BRIDE: {
        korean: '신부'
    },
    GROOM: {
        korean: '신랑'
    }
};