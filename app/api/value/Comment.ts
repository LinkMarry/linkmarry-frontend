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
        id: 3,
        name: "김지민",
        comment: "진짜 행복하게 잘 살아야해!!!!",
        createdDate: "2025-02-06T08:45:38.339792"
    }
]