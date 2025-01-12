import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";

const {kakao} = window as any;

interface KakaoMapDialogProps {
    dismiss: () => void;
}

function KakaoMapDialog(
    {
        dismiss
    }: KakaoMapDialogProps
) {
    const geocoder = new kakao.maps.services.Geocoder();
    const kakaoMap = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<any>();
    const searchFieldRef = useRef<HTMLInputElement>(null);
    const [selectedPlaceOverlay, setSelectedPlaceOverlay] = useState<any | null>(null);

    const search = () => {
        const searchField = searchFieldRef.current;
        if (!searchField) return;

        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchField.value, (data: any, status: any, pagination: any) => {
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
        });
    }
    const displayMarker = (place: any) => {
        new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x)
        });
    };

    useEffect(() => {
        if (!kakao || !kakao.maps) {
            alert('지도 서비스가 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        const createdMap = new kakao.maps.Map(kakaoMap.current, {
            center: new kakao.maps.LatLng(35.6632, 128.4141),
            level: 5, // 확대 레벨
        });
        setMap(createdMap);

        kakao.maps.event.addListener(createdMap, 'click', mapClickEventListener);
    }, []);

    const mapClickEventListener = useCallback((mouseEvent: any) => {
        const latLng = mouseEvent.latLng;

        const lat = latLng.getLat();
        const lng = latLng.getLng();

        geocoder.coord2Address(lng, lat, (result: any, status: any) => {
            if (status !== kakao.maps.services.Status.OK) return;
            const place = result[0];

            const address = place.address?.address_name;
            const content = `
<div style="border: 1px solid #ccc; background: #fff; padding: 10px; border-radius: 10px; width: 250px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
    <h3 style="margin: 0 0 10px; font-size: 16px; font-weight: bold; color: #333;">클릭한 위치</h3>
    <p style="margin: 5px 0; font-size: 14px; color: #555;"><strong>주소:</strong> ${address}</p>
    <p style="margin: 5px 0; font-size: 14px; color: #555;"><strong>위도:</strong> ${latLng.getLat().toFixed(6)}</p>
    <p style="margin: 5px 0; font-size: 14px; color: #555;"><strong>경도:</strong> ${latLng.getLng().toFixed(6)}</p>
    <a href="https://map.kakao.com/link/to/${address},${latLng.getLat()},${latLng.getLng()}" target="_blank" style="display: inline-block; margin-top: 10px; padding: 5px 10px; background: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">길찾기</a>
</div>`;
            console.log(selectedPlaceOverlay)
            if (selectedPlaceOverlay) {
                selectedPlaceOverlay.setContent(content);
                selectedPlaceOverlay.setPosition(latLng);
            } else {
                const overlay = new kakao.maps.CustomOverlay({
                    position: latLng,
                    content,
                    xAnchor: 0,
                    yAnchor: 0,
                    map
                });
                setSelectedPlaceOverlay(overlay);
            }
        });
    }, [map, selectedPlaceOverlay]);

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <S.search>
                    <S.searchInput ref={searchFieldRef} placeholder="장소를 검색하세요" onKeyDown={event => {
                        if (event.key === 'Enter') search();
                    }}/>
                    <Icon type={IconType.Search} size={28} tint={colors.g600} onClick={search}/>
                </S.search>
                <S.kakaoMap ref={kakaoMap}></S.kakaoMap>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 80vw;
        max-width: 1100px;
        ${applyBaseDialogContent()};
        border-radius: 12px;
    `,
    search: styled.div`
        display: flex;
        background: ${colors.white};
        align-items: center;
        padding-right: 18px;
    `,
    searchInput: styled.input`
        display: flex;
        padding: 20px;
        flex: 1;
        font-size: 18px;
        outline: none;
        border: none;
        background: transparent;
    `,
    kakaoMap: styled.div`
        display: flex;
        height: 600px;
    `
}

export default KakaoMapDialog;