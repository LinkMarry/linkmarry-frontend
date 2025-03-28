import React, {useEffect, useRef, useState} from 'react';
import {css} from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/pattern/dialog/BaseDialog";
import {Column, Row} from "@designsystem/core/FlexLayout";
import View from "@designsystem/core/View";
import Button from "@designsystem/component/Button";
import Text from "@designsystem/component/Text";
import WeddingPlace from "@remote/value/WeddingPlace";
import makeText from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/Icon";

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
    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<any>();
    const [searchText, setSearchText] = useState('');
    const [map, setMap] = useState<any>();

    useEffect(() => {
        if (!kakao || !kakao.maps) {
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

            const keyword = result[0].address.address_name;
            keywordSearch(keyword, {
                location: coords,
                radius: 50
            });
        });
    };

    const keywordSearch = (keyword: string, option?: any) => {
        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(keyword, (result: any, status: any) => {
            if (status !== kakao.maps.services.Status.OK) return;

            console.log(result);
            setPlaces(result);

            const first = result[0];
            if (first) {
                map?.setCenter(new kakao.maps.LatLng(first.y, first.x));
            }
        }, option);
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $alignItems={'stretch'} $ui={css`
                width: 90vw;
                max-width: 412px;
                height: 75vh;
                ${applyBaseDialogContent()};
                border-radius: 12px;
                background: white;
            `}>
                <Row $alignItems={'center'} $ui={css`
                    padding-right: 20px;
                `}>
                    <View
                        as={'input'}
                        value={searchText}
                        onChange={event => setSearchText(event.target.value)}
                        onKeyDown={event => {
                            if (event.key === 'Enter') {
                                keywordSearch(searchText);
                            }
                        }}
                        placeholder={'장소 검색'}
                        $ui={css`
                            padding: 20px;
                            ${makeText('p1')};
                            outline: none;
                            border: none;
                            flex: 1;
                            min-width: 0;
                        `}
                    />
                    <Icon iconType={IconType.Search} onClick={() => {
                        keywordSearch(searchText);
                    }} size={28} ui={css`
                        fill: var(--g-500);
                        cursor: pointer;
                    `}/>
                </Row>
                <View ref={kakaoMap} $ui={css`
                    display: flex;
                    flex: 1;
                    position: relative;
                `}/>
                {/* 결과 출력 */}
                <Column $gap={10} $alignItems={'stretch'} $ui={css`
                    padding: 16px;
                `}>
                    <Text type={'p2'} bold={true} ui={css`
                        color: var(--g-500);
                        margin-left: 14px;
                        margin-top: 4px;
                    `}>장소 선택</Text>
                    <Column as={'ul'} $gap={4} $alignItems={'stretch'} $ui={css`
                        height: 128px;
                        overflow-y: scroll;
                        padding: 4px;
                    `}>
                        {places?.map((place, index) => {
                            const selected = place.id === selectedPlace?.id;
                            return (
                                <Column
                                    key={index} as={'li'}
                                    $ui={css`
                                        &:hover {
                                            background: var(--g-100);
                                        }

                                        border-radius: 8px;
                                        padding: 12px;
                                        transition: 0.1s background;

                                        ${selected && css`
                                            border: 1px solid var(--g-800);
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
                                    <Text type={'p3'} ui={css`
                                        text-decoration: underline;
                                        color: var(--g-500);
                                        cursor: pointer;
                                    `} onClick={() => {
                                        window.open(place.place_url, '_blank');
                                    }}>{place.place_name}</Text>
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
