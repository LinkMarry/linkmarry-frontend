export default interface EditCommentRequest {
    id: number; // 방명록 ID (PK)
    url: string; // 청첩장 URL
    name: string; // 수정할 이름
    comment: string; // 수정할 내용
    password: string; // 초기 비번
}