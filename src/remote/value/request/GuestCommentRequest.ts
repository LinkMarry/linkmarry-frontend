export default interface GuestCommentRequest {
    url: string; // 청첩장 URL
    name: string; // 이름
    comment: string; // 내용
    password: string; // 나중 글 수정 삭제를 위한 비번(수정불가)
}