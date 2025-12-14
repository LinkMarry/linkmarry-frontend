import {type ChangeEvent, useCallback, useEffect, useRef, useState} from 'react';
import {css, cx} from "@linaria/core";
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import View from "~/userinterface/core/View.tsx";
import Button from "~/userinterface/component/Button";
import Text from "~/userinterface/component/Text";
import type WeddingPlace from "~/infrastructure/network/value/WeddingPlace";
import Icon from "~/userinterface/foundation/Icon";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import {textStyles} from "~/userinterface/foundation/text/TextType.ts";

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
    const kakaoMap = useRef<HTMLDivElement>(null);
    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<any>();
    const [searchText, setSearchText] = useState('');
    const [map, setMap] = useState<any>();

    const keywordSearch = useCallback((keyword: string, option?: any) => {
        const {kakao} = window as any;

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(keyword, (result: any, status: any) => {
            if (status !== kakao.maps.services.Status.OK) return;

            setPlaces(result);

            const first = result[0];
            if (first) {
                map?.setCenter(new kakao.maps.LatLng(first.y, first.x));
            }
        }, option);
    }, [map]);

    const searchAddress = useCallback((coords: any) => {
        const {kakao} = window as any;
        if (!kakao || !kakao.maps) return;

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.coord2Address(coords.getLng(), coords.getLat(), (result: any, status: any) => {
            if (status !== kakao.maps.services.Status.OK) return;

            const keyword = result[0].address.address_name;
            keywordSearch(keyword, {
                location: coords,
                radius: 50
            });
        });
    }, [keywordSearch]);

    useEffect(() => {
        const {kakao} = window as any;
        if (!kakao || !kakao.maps || !map) return;

        // Marker 설정
        const marker = new kakao.maps.Marker({
            position: map.getCenter(), // 초기 마커 위치 (지도의 중앙)
            map, // 지도 객체와 연결
        });

        // 지도가 움직일 때 마커의 위치를 중앙으로 유지
        kakao.maps.event.addListener(map, 'center_changed', () => {
            const center = map.getCenter(); // 지도 중심 좌표 가져오기
            marker.setPosition(center); // 마커 위치를 지도 중심으로 업데이트
        });

        // 움직임 멈췄을 때 중심 좌표로 주소 및 장소 검색
        kakao.maps.event.addListener(map, 'dragend', () => {
            const center = map.getCenter();
            searchAddress(center); // 주소 검색
        });
    }, [map, searchAddress]);

    useEffect(() => {
        const {kakao} = window as any;
        if (!kakao || !kakao.maps) return;

        const map = new kakao.maps.Map(kakaoMap.current, {
            center: new kakao.maps.LatLng(37.5665851, 126.9782038),
            level: 5, // 확대 레벨
        });
        setMap(map);
    }, []);

    return (
        <BaseDialog dismiss={dismiss}>
            <View ui={cx(
                css`
                    width: 90vw;
                    max-width: 412px;
                    height: 75vh;
                    border-radius: 12px;
                    background: white;
                `,
                baseDialogContentStyle
            )}>
                <View ui={css`
                    flex-direction: row !important;
                    align-items: center;
                    padding-right: 20px;
                `}>
                    <View
                        as={'input'}
                        value={searchText}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
                        onKeyDown={(event: KeyboardEvent) => {
                            if (event.key === 'Enter') {
                                keywordSearch(searchText);
                            }
                        }}
                        placeholder={'장소 검색'}
                        ui={cx(
                            textStyles.p1.normal,
                            css`
                                padding: 20px;
                                outline: none;
                                border: none;
                                flex: 1;
                                min-width: 0;
                            `
                        )}
                    />
                    <Icon iconType={'Search'} onClick={() => {
                        keywordSearch(searchText);
                    }} size={28} ui={css`
                        fill: var(--g-500);
                        cursor: pointer;
                    `}/>
                </View>
                <View ref={kakaoMap} ui={css`
                    display: flex;
                    flex: 1;
                    position: relative;
                `}/>
                {/* 결과 출력 */}
                <View ui={css`
                    gap: 10px;
                    padding: 16px;
                `}>
                    <Text type={'p2'} bold={true} ui={css`
                        color: var(--g-500);
                        margin-left: 14px;
                        margin-top: 4px;
                    `}>장소 선택</Text>
                    <View as={'ul'} ui={css`
                        gap: 4px;
                        height: 128px;
                        overflow-y: scroll;
                        padding: 4px;
                    `}>
                        {places?.map((place, index) => {
                            const selected = place.id === selectedPlace?.id;
                            return (
                                <View
                                    key={index} as={'li'}
                                    ui={cx(
                                        css`
                                            &:hover {
                                                background: var(--g-100);
                                            }

                                            align-items: flex-start;
                                            border-radius: 8px;
                                            padding: 12px;
                                            transition: 0.1s background;
                                        `,
                                        selected ? css`
                                            border: 1px solid var(--g-800);
                                        ` : undefined
                                    )}
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
                                </View>
                            );
                        })}
                    </View>
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
                </View>
            </View>
        </BaseDialog>
    );
}

export default KakaoMapDialog;
