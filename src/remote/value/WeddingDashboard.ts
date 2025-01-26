import WeddingInfo from "@remote/value/WeddingInfo";

export default interface WeddingDashboard {
    // 본인이 생성한 모청
    weddingInfo: WeddingInfo[];
    
    // 워터마크 제거 가능한 수
    invitation: number;
}