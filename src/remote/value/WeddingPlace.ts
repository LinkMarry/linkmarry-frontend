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

export const defaultWeddingPlace: WeddingPlace = {
    x: -1,
    y: -1,
    placeUrl: "",
    placeName: "",
    addressName: "",
    floorHall: "",
    placeTel: "",
    placeTransportation: "",
    placeStatus: true,
}

export const dummyWeddingPlace: WeddingPlace = {
    x: 126.972317,
    y: 37.555946,
    placeUrl: "https://kko.kakao.com/zLDNmwVavR",
    placeName: "서울역",
    addressName: "서울 용산구 한강대로 405",
    floorHall: "1번 출구",
    placeTel: "1544-7788",
    placeTransportation: "그냥 기차타고 오시면 됩니다",
    placeStatus: true,
}