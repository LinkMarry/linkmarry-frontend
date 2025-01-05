export default interface WeddingPlace {
    // 지도 x값
    x: number;
    
    // 지도 y값
    y: number;
    
    // 위치 URL (카카오)
    placeUrl: string;
    
    // 예식장 이름
    placeName: string;
    
    // 예식장 주소
    addressName: string;
    
    // 층/홀
    floorHall: string;
    
    // 예식장 전화번호
    placeTel: string;
    
    // 예식장 교통편
    placeTransportation: string;
    
    // 지도 표시 여부
    placeStatus: boolean;
}