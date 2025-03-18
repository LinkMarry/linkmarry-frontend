export default interface WeddingInfo {
    // 청첩장 갤러리 안에 포함된 사진중 첫번째꺼 (없음 공백 반환)
    img: string;

    // 청첩장 URL 반환
    url: string;

    name: string;

    // 모청 워터마크 제거 여부
    waterMark: boolean;

    // 청첩장 생성 시간
    createdDate: string;
}
