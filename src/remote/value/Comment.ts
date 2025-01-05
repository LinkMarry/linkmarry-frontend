export default interface Comment {
    // 방명록 ID (PK)
    id: number;
    
    // 방명록 작성자
    name: string;
    
    // 방명록 내용
    content: string;
}

export const dummyComments: Comment[] = [
    {
        id: 0,
        name: '작성자',
        content: 'ㅊㅊ'
    },
    {
        id: 1,
        name: '작성자',
        content: 'ㅊㅊ'
    },
    {
        id: 2,
        name: '작성자',
        content: 'ㅊㅊ'
    },{
        id: 3,
        name: '작성자',
        content: 'ㅊㅊ'
    }
]