import React, {useEffect, useRef} from 'react';
import Spacer from "@designsystem/component/Spacer";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import styled, {css} from "styled-components";
import WeddingPlace from "@remote/value/WeddingPlace";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import View from "@designsystem/core/View";
import FadeIn from "@src/component/fadein/FadeIn";
import {backgroundStyle} from "@remote/value/WeddingDesign";
import Button from "@designsystem/component/Button";

const {kakao} = window as any;

interface LocationProps {
    weddingDesignColor: string;
    weddingPlace: WeddingPlace;
}

function LocationTemplate(
    {
        weddingDesignColor,
        weddingPlace
    }: LocationProps
) {
    const kakaoMapRef = useRef<HTMLDivElement>(null);
    const weddingPlaceRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(weddingPlaceRef, [weddingPlace]);

    useEffect(() => {
        if (!kakao || !kakao.maps || !kakaoMapRef.current) {
            // alert('지도 서비스가 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
            return;
        }


        if (!weddingPlace.x || !weddingPlace.y) {
            return;
        }

        const createdMap = new kakao.maps.Map(kakaoMapRef.current, {
            center: new kakao.maps.LatLng(weddingPlace.y, weddingPlace.x),
            level: 5, // 확대 레벨
        });

        new kakao.maps.Marker({
            position: new kakao.maps.LatLng(weddingPlace.y, weddingPlace.x), // 초기 마커 위치 (지도의 중앙)
            map: createdMap, // 지도 객체와 연결
        });

        if (weddingPlace.placeLock) {
            createdMap.setDraggable(false); // 드래그 비활성화
            createdMap.setZoomable(false); // 줌 비활성화
        }
    }, []);

    return (
        <Column $alignItems={'stretch'} ref={weddingPlaceRef} $ui={css`
            ${backgroundStyle(weddingDesignColor)};
            align-items: stretch;
            padding: 72px 0;
        `}>
            <Column $gap={40} $alignItems={'center'}>
                <FadeIn>
                    <Text size={20} weight={300} ui={css`
                        color: var(--g-600);
                    `}>LOCATION</Text>
                </FadeIn>
                <FadeIn>
                    <Column $alignItems={'center'} $gap={12}>
                        <Column $alignItems={'center'}>
                            <Text size={16} weight={300}>
                                {weddingPlace.placeName}
                            </Text>
                            <Text size={16} weight={300}>
                                {weddingPlace.addressName} {weddingPlace.floorHall}
                            </Text>
                        </Column>
                        <Text size={16} weight={300}>
                            {weddingPlace.placeTel}
                        </Text>
                    </Column>
                </FadeIn>
                <View ref={kakaoMapRef} $ui={css`
                    display: flex;
                    align-self: stretch;
                    height: 307px;
                    ${!weddingPlace.placeStatus && css`
                        display: none;
                    `};
                `}></View>
                <Column $gap={12} $alignSelf={'stretch'} $alignItems={'stretch'} $ui={css`
                    padding: 0 24px;
                `}>
                    <FadeIn>
                        {weddingPlace.placeTransportation.length > 0 && (
                            <Column $gap={4} $alignItems={'stretch'} $ui={css`
                                padding-bottom: 12px;
                            `}>
                                <Text type={'p2'} bold={true}>버스</Text>
                                <Text size={16} weight={300} ui={css`
                                    text-align: start;
                                    white-space: pre-line;
                                `}>{weddingPlace.placeTransportation[0]}</Text>
                            </Column>
                        )}
                    </FadeIn>
                    <FadeIn>
                        {weddingPlace.placeTransportation.length > 1 && (
                            <Column $gap={4} $alignItems={'stretch'} $ui={css`
                                padding-bottom: 12px;
                            `}>
                                <Text type={'p2'} bold={true}>지하철</Text>
                                <Text size={16} weight={300} ui={css`
                                    text-align: start;
                                    white-space: pre-line;
                                `}>{weddingPlace.placeTransportation[1]}</Text>
                            </Column>
                        )}
                    </FadeIn>
                    <FadeIn>
                        {weddingPlace.placeTransportation.length > 2 && (
                            <Column $gap={4} $alignItems={'stretch'} $ui={css`
                                padding-bottom: 12px;
                            `}>
                                <Text type={'p2'} bold={true}>주차안내</Text>
                                <Text size={16} weight={300} ui={css`
                                    text-align: start;
                                    white-space: pre-line;
                                `}>{weddingPlace.placeTransportation[2]}</Text>
                            </Column>
                        )}
                    </FadeIn>
                    {weddingPlace.placeTransportation.length > 3 && weddingPlace.placeTransportation.slice(3).map((transportation, index) => (
                        <FadeIn key={index}>
                            <Text size={16} weight={300} ui={css`
                                text-align: start;
                                white-space: pre-line;
                                padding-bottom: 12px;
                            `}>{transportation}</Text>
                        </FadeIn>
                    ))}
                </Column>
                {weddingPlace.placeNav && (
                    <Button text={'길 찾기'} onClick={() => window.open(weddingPlace.placeUrl)} ui={css`
                        align-self: stretch;
                        margin: 0 24px;
                    `}/>
                )}
            </Column>
        </Column>
    );
}

export default LocationTemplate;
