export default interface GuestCommentRequest {
    // 청첩장 URL
    url: string;
    
    // 이름
    name: string;
    
    // 내용
    comment: string;
    
    // 나중 글 수정 삭제를 위한 비번(수정불가)
    password: string;
}