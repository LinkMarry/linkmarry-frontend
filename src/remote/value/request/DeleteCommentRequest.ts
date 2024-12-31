export default interface DeleteCommentRequest {
    url: string; // 청첩장 URL
    id: number; // 방명록 ID (PK)
    password: string; // 초기 비번
}