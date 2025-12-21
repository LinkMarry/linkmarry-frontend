export const GuestTypeList = [
    'BRIDE',
    'GROOM',
] as const;

export type GuestType = typeof GuestTypeList[number];

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