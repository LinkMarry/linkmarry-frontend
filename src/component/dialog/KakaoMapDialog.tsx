import React, {useEffect, useRef, useState} from 'react';
import {css} from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/pattern/dialog/BaseDialog";
import {Column} from "@designsystem/core/FlexLayout";
import Style from "@designsystem/core/Style";
import Button from "@designsystem/component/Button";
import Text from "@designsystem/component/Text";
import WeddingPlace from "@remote/value/WeddingPlace";

const {kakao} = window as any;

interface KakaoMapDialogProps {
    weddingPlace: WeddingPlace;
    onChange: (weddingPlace: WeddingPlace) => void;
    dismiss: () => void;
}

function KakaoMapDialog(
    {
        weddingPlace,
        onChange,
        dismiss
    }: KakaoMapDialogProps
) {
    const geocoder = new kakao.maps.services.Geocoder();
    const kakaoMap = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<any>();
    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<any>();

    useEffect(() => {
        if (!kakao || !kakao.maps) {
            // alert('지도 서비스가 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        const createdMap = new kakao.maps.Map(kakaoMap.current, {
            center: new kakao.maps.LatLng(35.6632, 128.4141),
            level: 5, // 확대 레벨
        });
        setMap(createdMap);

        // Marker 설정
        const marker = new kakao.maps.Marker({
            position: createdMap.getCenter(), // 초기 마커 위치 (지도의 중앙)
            map: createdMap, // 지도 객체와 연결
        });

        // 지도가 움직일 때 마커의 위치를 중앙으로 유지
        kakao.maps.event.addListener(createdMap, 'center_changed', () => {
            const center = createdMap.getCenter(); // 지도 중심 좌표 가져오기
            marker.setPosition(center); // 마커 위치를 지도 중심으로 업데이트
        });

        // 움직임 멈췄을 때 중심 좌표로 주소 및 장소 검색
        kakao.maps.event.addListener(createdMap, 'dragend', () => {
            const center = createdMap.getCenter();
            searchAddress(center); // 주소 검색
        });
    }, []);

    // 주소 검색 함수
    const searchAddress = (coords: any) => {
        geocoder.coord2Address(coords.getLng(), coords.getLat(), (result: any, status: any) => {
            if (status !== kakao.maps.services.Status.OK) return;

            const ps = new kakao.maps.services.Places();

            ps.keywordSearch(result[0].address.address_name, (result: any, status: any) => {
                if (status !== kakao.maps.services.Status.OK) return;

                console.log(result);
                setPlaces(result);
            }, {
                location: coords,
                radius: 50
            });
        });
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $alignItems={'stretch'} css={css`
                width: 90vw;
                max-width: 412px;
                height: 75vh;
                ${applyBaseDialogContent()};
                border-radius: 12px;
                background: white;
            `}>
                <Style ref={kakaoMap} css={css`
                    display: flex;
                    flex: 1;
                    position: relative;
                `}>
                </Style>
                {/* 결과 출력 */}
                <Column gap={10} $alignItems={'stretch'} css={css`
                    padding: 16px;
                `}>
                    <Column as={'ul'} gap={4} $alignItems={'stretch'} css={css`
                        height: 128px;
                        overflow-y: scroll;
                        padding: 4px;
                    `}>
                        {places?.map((place, index) => {
                            const selected = place.id === selectedPlace?.id;
                            return (
                                <Column
                                    key={index} as={'li'}
                                    css={css`
                                        &:hover {
                                            background: var(--g-100);
                                        }

                                        border-radius: 8px;
                                        padding: 12px;
                                        transition: 0.1s background;

                                        ${selected && css`
                                            border: 1px solid var(--p-800);
                                        `};
                                    `}
                                    onClick={() => {
                                        if (selected) {
                                            setSelectedPlace(undefined);
                                        } else {
                                            setSelectedPlace(place);
                                        }
                                    }}
                                >
                                    <Text type={'p2'}>{place.address_name}</Text>
                                    {/*<Text*/}
                                    {/*    type={'p5'}*/}
                                    {/*    customStyle={css`*/}
                                    {/*        text-decoration: underline;*/}
                                    {/*        color: var(--g-500);*/}
                                    {/*        cursor: pointer;*/}
                                    {/*    `}*/}
                                    {/*    onClick={() => {*/}
                                    {/*        window.open(place.place_url, '_blank');*/}
                                    {/*    }}*/}
                                    {/*>{place.place_name}</Text>*/}
                                </Column>
                            );
                        })}
                    </Column>
                    <Button text={'선택'} enabled={selectedPlace !== undefined} onClick={() => {
                        onChange({
                            ...weddingPlace,
                            x: selectedPlace.x,
                            y: selectedPlace.y,
                            placeUrl: selectedPlace.place_url,
                            placeName: selectedPlace.place_name,
                            addressName: selectedPlace.address_name,
                        })
                        dismiss();
                    }}/>
                </Column>
            </Column>
        </BaseDialog>
    );
}

export default KakaoMapDialog;
