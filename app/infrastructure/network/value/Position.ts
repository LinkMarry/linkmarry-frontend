export const positionMap: Record<Position, {
    korean: string;
}> = {
    0: {korean: '인사말'},
    1: {korean: '캘린더'},
    2: {korean: '축의금'},
    3: {korean: '갤러리'},
    4: {korean: '지도'},
    5: {korean: '동영상'},
    6: {korean: '연락처'},
    7: {korean: '방명록'},
    8: {korean: '참석의사 RSVP'},
};

export const positionList = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Position = typeof positionList[number];