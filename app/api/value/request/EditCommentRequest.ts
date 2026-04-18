export default interface EditCommentRequest {
    // 방명록 ID (PK)
    id: number;
    
    // 청첩장 URL
    url: string;
    
    // 수정할 이름
    name: string;
    
    // 수정할 내용
    comment: string;
    
    // 초기 비번
    password: string;
}