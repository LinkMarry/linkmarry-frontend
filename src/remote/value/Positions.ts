type Positions = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const positionMap: Record<Positions, {
    korean: string;
}> = {
    0: {korean: '디자인'},
    1: {korean: '인사말'},
    2: {korean: '예식 일시'},
    3: {korean: '예식 장소'},
    4: {korean: '갤러리'},
    5: {korean: '배경음악'},
    6: {korean: '축의금'},
    7: {korean: '동영상'},
    8: {korean: '참석의사 RSVP'},
    9: {korean: '연락처'},
    10: {korean: '방명록'},
}

export default Positions;
