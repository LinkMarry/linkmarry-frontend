import React, {useEffect, useRef} from 'react';
import * as S from '@page/RegisterPage.style';

const {kakao} = window as any;

function RegisterPage() {
    const kakaoMap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (!kakao || !kakao.maps) return;
            
            const container = kakaoMap.current;
            const options = {
                center: new kakao.maps.LatLng(35.6632, 128.4141), // 서울시청 좌표
                level: 3, // 확대 레벨
            };

            const map = new kakao.maps.Map(container, options);

            const ps = new kakao.maps.services.Places();
            ps.keywordSearch('동대구역', placesSearchCB);
            
            const infoWindow = new kakao.maps.InfoWindow({zIndex: 1});

            // ps.keywordSearch
            function placesSearchCB(data: any, status: any, pagination: any) {
                console.log(data);
                console.log(status);
                console.log(pagination);
                
                if (status === kakao.maps.services.Status.OK) {

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                    // LatLngBounds 객체에 좌표를 추가합니다
                    const bounds = new kakao.maps.LatLngBounds();

                    for (const e of data) {
                        displayMarker(e);
                        bounds.extend(new kakao.maps.LatLng(e.y, e.x));
                    }

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                    map.setBounds(bounds);
                }
            }

            // 지도에 마커를 표시하는 함수입니다
            function displayMarker(place: any) {

                // 마커를 생성하고 지도에 표시합니다
                const marker = new kakao.maps.Marker({
                    map,
                    position: new kakao.maps.LatLng(place.y, place.x)
                });

                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function () {
                    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                    infoWindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                    infoWindow.open(map, marker);
                });
            }

        }, 100);
    }, []);

    return (
        <S.Container>
            <div ref={kakaoMap} id="map" style={{
                width: 500,
                height: 400
            }}></div>
        </S.Container>
    );
}

export default RegisterPage;