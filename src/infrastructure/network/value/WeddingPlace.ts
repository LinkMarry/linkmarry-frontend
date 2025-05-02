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
    placeTransportation: PlaceTransportation;

    // 지도 표시 여부
    placeStatus: boolean;

    // 지도 잠금 여부
    placeLock: boolean;

    // 지도 네비 여부
    placeNav: boolean;
}

export type PlaceTransportation = string[];
export function getPlaceholder(index: number): string {
    switch (index) {
        case 0:
            return '버스';
        case 1:
            return '지하철';
        case 2:
            return '주차안내';
        default:
            return '';
    }
}

export const defaultWeddingPlace: WeddingPlace = {
    x: 126.9782038,
    y: 37.5665851,
    placeUrl: "",
    placeName: "",
    addressName: "",
    floorHall: "",
    placeTel: "",
    placeTransportation: ["", '', ''],
    placeStatus: true,
    placeLock: true,
    placeNav: true
}

export const dummyWeddingPlace: WeddingPlace = {
    x: 126.97689786832184,
    y: 37.577613288258206,
    placeUrl: "http://place.map.kakao.com/18619553",
    placeName: "경복궁",
    addressName: "서울 종로구 세종로 1-1",
    placeTel: "02-187-3021",
    floorHall: "야외 웨딩홀",
    placeTransportation: [
        "경북궁 앞 버스정류장 101번",
        "경북궁역 0호선",
        "경북궁 공용주차장 (발렛가능)"
    ],
    placeStatus: true,
    placeLock: true,
    placeNav: true,
}
