export default interface Comment {
    // 방명록 ID (PK)
    id: number;

    // 방명록 작성자
    name: string;

    // 방명록 내용
    comment: string;

    // 작성일시
    createdDate: string;
}

export const dummyComments: Comment[] = [
    {
        id: 0,
        name: '작성자',
        comment: '결혼 축하한다~~\n' +
            '행복하게 잘 살아라!!',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 1,
        name: '작성자',
        comment: '싸우지 말고 잘 살아라~\n' +
            '결혼식장 기대된다!!! ☺️',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 2,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },{
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    {
        id: 3,
        name: '작성자',
        comment: 'ㅊㅊ',
        createdDate: '2025-01-01 10:10:10'
    },
    
]