import {useEffect, useRef} from 'react';
import Text from "~/userinterface/component/Text";
import {css, cx} from "@linaria/core";
import type WeddingPlace from "~/infrastructure/network/value/WeddingPlace";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate";
import View from "~/userinterface/core/View.tsx";
import FadeIn from "~/userinterface/specific/fadein/FadeIn";
import {backgroundStyle} from "~/infrastructure/network/value/WeddingDesign";
import Button from "~/userinterface/component/Button";
import type {WeddingMode} from "~/userinterface/specific/wedding/WeddingMode.ts";


interface LocationProps {
    weddingDesignColor: string;
    weddingPlace: WeddingPlace;
    mode: WeddingMode;
}

function LocationTemplate(
    {
        weddingDesignColor,
        weddingPlace,
        mode
    }: LocationProps
) {
    const kakaoMapRef = useRef<HTMLDivElement>(null);
    const weddingPlaceRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(weddingPlaceRef, [weddingPlace], mode === 'preview');
    useEffect(() => {
        const {kakao} = window as any;
        if (!kakao || !kakao.maps || !kakaoMapRef.current) {
            return;
        }

        kakaoMapRef.current.innerHTML = '';

        const createdMap = new kakao.maps.Map(kakaoMapRef.current, {
            center: new kakao.maps.LatLng(weddingPlace.y, weddingPlace.x),
            level: 5, // 확대 레벨
        });

        new kakao.maps.Marker({
            position: new kakao.maps.LatLng(weddingPlace.y, weddingPlace.x), // 초기 마커 위치 (지도의 중앙)
            map: createdMap, // 지도 객체와 연결
        });

        createdMap.setDraggable(!weddingPlace.placeLock); // 드래그 비활성화
        createdMap.setZoomable(!weddingPlace.placeLock); // 줌 비활성화
    }, [weddingPlace]);

    return (
        <View ref={weddingPlaceRef} ui={css`
            align-items: stretch;
            padding: 72px 0;
        `} style={{
            background: backgroundStyle(weddingDesignColor)
        }}>
            <View ui={css`
                gap: 40px;
            `}>
                <FadeIn>
                    <Text size={20} weight={300} ui={css`
                        color: var(--g-600);
                        text-align: center;
                    `}>LOCATION</Text>
                </FadeIn>
                <FadeIn>
                    <View ui={css`
                        padding: 0 24px;
                        gap: 12px;
                    `}>
                        <View>
                            <Text size={16} weight={300} ui={css`
                                text-align: center;
                            `}>
                                {weddingPlace.placeName}
                            </Text>
                            <Text size={16} weight={300} ui={css`
                                text-align: center;
                                word-break: break-all;
                            `}>
                                {weddingPlace.addressName} {weddingPlace.floorHall}
                            </Text>
                        </View>
                        <Text size={16} weight={300} ui={css`
                            text-align: center;
                            word-break: break-all;
                        `}>
                            {weddingPlace.placeTel}
                        </Text>
                    </View>
                </FadeIn>
                <View ref={kakaoMapRef} ui={cx(
                    css`
                        display: flex;
                        align-self: stretch;
                        height: 307px;
                    `,
                    !weddingPlace.placeStatus && css`
                        display: none;
                    `
                )}></View>
                <View ui={css`
                    padding: 0 24px;
                    align-self: stretch;
                    gap: 12px;
                `}>
                    {weddingPlace.placeTransportation.length > 0 && weddingPlace.placeTransportation[0].length > 0 && (
                        <View ui={css`
                            gap: 4px;
                            padding-bottom: 12px;
                        `}>
                            <Text type={'p2'} bold={true}>버스</Text>
                            <Text size={16} weight={300} ui={css`
                                text-align: start;
                                white-space: pre-line;
                                word-break: break-all;
                            `}>{weddingPlace.placeTransportation[0]}</Text>
                        </View>
                    )}
                    {weddingPlace.placeTransportation.length > 1 && weddingPlace.placeTransportation[1].length > 0 && (
                        <View ui={css`
                            padding-bottom: 12px;
                            gap: 4px;
                        `}>
                            <Text type={'p2'} bold={true}>지하철</Text>
                            <Text size={16} weight={300} ui={css`
                                text-align: start;
                                white-space: pre-line;
                                word-break: break-all;
                            `}>{weddingPlace.placeTransportation[1]}</Text>
                        </View>
                    )}
                    {weddingPlace.placeTransportation.length > 2 && weddingPlace.placeTransportation[2].length > 0 && (
                        <View ui={css`
                            gap: 4px;
                            padding-bottom: 12px;
                        `}>
                            <Text type={'p2'} bold={true}>주차안내</Text>
                            <Text size={16} weight={300} ui={css`
                                text-align: start;
                                white-space: pre-line;
                                word-break: break-all;
                            `}>{weddingPlace.placeTransportation[2]}</Text>
                        </View>
                    )}
                    {weddingPlace.placeTransportation.length > 3 && weddingPlace.placeTransportation.slice(3).map((transportation, index) => (
                        <Text key={index} size={16} weight={300} ui={css`
                            text-align: start;
                            white-space: pre-line;
                            padding-bottom: 12px;
                        `}>{transportation}</Text>
                    ))}
                </View>
                {weddingPlace.placeNav && (
                    <Button text={'길 찾기'} onClick={() => window.open(weddingPlace.placeUrl)} ui={css`
                        align-self: stretch;
                        margin: 0 24px;
                    `}/>
                )}
            </View>
        </View>
    );
}

export default LocationTemplate;
