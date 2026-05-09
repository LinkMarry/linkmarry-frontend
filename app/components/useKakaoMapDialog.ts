import {useCallback, useEffect, useRef, useState} from "react";
import type {WeddingPlace} from "~/domain";

interface UseKakaoMapDialogProps {
    show: boolean;
    weddingPlace: WeddingPlace;
    onChange: (weddingPlace: WeddingPlace) => void;
    dismiss: () => void;
}

export function useKakaoMapDialog({show, weddingPlace, onChange, dismiss}: UseKakaoMapDialogProps) {
    const kakaoMapRef = useRef<HTMLDivElement>(null);
    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<any>();
    const [searchText, setSearchText] = useState("");
    const [map, setMap] = useState<any>();

    const keywordSearch = useCallback(
        (keyword: string, option?: any) => {
            const {kakao} = window as any;
            if (!kakao || !kakao.maps) return;

            const ps = new kakao.maps.services.Places();

            ps.keywordSearch(
                keyword,
                (result: any, status: any) => {
                    if (status !== kakao.maps.services.Status.OK) return;

                    setPlaces(result);

                    const first = result[0];
                    if (first) {
                        map?.setCenter(new kakao.maps.LatLng(first.y, first.x));
                    }
                },
                option,
            );
        },
        [map],
    );

    const searchAddress = useCallback(
        (coords: any) => {
            const {kakao} = window as any;
            if (!kakao || !kakao.maps) return;

            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.coord2Address(coords.getLng(), coords.getLat(), (result: any, status: any) => {
                if (status !== kakao.maps.services.Status.OK) return;

                const keyword = result[0].address.address_name;
                keywordSearch(keyword, {
                    location: coords,
                    radius: 50,
                });
            });
        },
        [keywordSearch],
    );

    useEffect(() => {
        const {kakao} = window as any;
        if (!kakao || !kakao.maps || !map) return;

        // Marker 설정
        const marker = new kakao.maps.Marker({
            position: map.getCenter(), // 초기 마커 위치 (지도의 중앙)
            map, // 지도 객체와 연결
        });

        // 지도가 움직일 때 마커의 위치를 중앙으로 유지
        kakao.maps.event.addListener(map, "center_changed", () => {
            const center = map.getCenter(); // 지도 중심 좌표 가져오기
            marker.setPosition(center); // 마커 위치를 지도 중심으로 업데이트
        });

        // 움직임 멈췄을 때 중심 좌표로 주소 및 장소 검색
        kakao.maps.event.addListener(map, "dragend", () => {
            const center = map.getCenter();
            searchAddress(center); // 주소 검색
        });
    }, [map, searchAddress]);

    useEffect(() => {
        if (!show) return;

        const {kakao} = window as any;
        if (!kakao || !kakao.maps || !kakaoMapRef.current) return;

        const mapInstance = new kakao.maps.Map(kakaoMapRef.current, {
            center: new kakao.maps.LatLng(37.5665851, 126.9782038),
            level: 5, // 확대 레벨
        });
        setMap(mapInstance);
    }, [show]);

    const handleSelectPlace = (place: any) => {
        if (selectedPlace?.id === place.id) {
            setSelectedPlace(undefined);
        } else {
            setSelectedPlace(place);
        }
    };

    const confirmSelection = () => {
        if (!selectedPlace) return;
        onChange({
            ...weddingPlace,
            x: selectedPlace.x,
            y: selectedPlace.y,
            placeUrl: selectedPlace.place_url,
            placeName: selectedPlace.place_name,
            addressName: selectedPlace.address_name,
        });
        dismiss();
    };

    return {
        kakaoMapRef,
        places,
        selectedPlace,
        searchText,
        setSearchText,
        keywordSearch,
        handleSelectPlace,
        confirmSelection,
    };
}
