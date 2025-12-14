export default interface DeleteCommentRequest {
    // 청첩장 URL
    url: string;
    
    // 방명록 ID (PK)
    id: number;
    
    // 초기 비번
    password: string;
}