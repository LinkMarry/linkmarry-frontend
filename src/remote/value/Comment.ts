export default interface Comment {
    id?: number;
    name: string;
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