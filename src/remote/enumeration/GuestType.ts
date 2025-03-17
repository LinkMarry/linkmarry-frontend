enum GuestType {
    BRIDE = 'BRIDE',
    GROOM = 'GROOM',
}

export const guestTypeMap: Record<GuestType, {
    korean: string;
}> = {
    [GuestType.BRIDE]: {
        korean: '신부'
    },
    [GuestType.GROOM]: {
        korean: '신랑'
    }
};

export default GuestType;
