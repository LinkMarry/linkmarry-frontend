export default interface WeddingPlace {
    x: number; // 지도 x값
    y: number; // 지도 y값
    placeUrl: string; // 위치 URL (카카오)
    placeName: string; // 예식장 이름
    addressName: string; // 예식장 주소
    placeTel: string; // 예식장 전화번호
    placeTransportation: string; // 예식장 교통편
    placeStatus: boolean; // 지도 표시 여부
}