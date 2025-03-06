import React, {useEffect, useRef} from 'react';
import Spacer from "@designsystem/component/Spacer";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import styled, {css} from "styled-components";
import WeddingPlace from "@remote/value/WeddingPlace";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import View from "@designsystem/core/View";
import FadeIn from "@src/component/fadein/FadeIn";

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

    }, []);

    return (
        <Column $alignItems={'stretch'} ref={weddingPlaceRef} ui={css`
            background: ${weddingDesignColor};
            align-items: stretch;
        `}>
            <Spacer h={92}/>
            <Column gap={40} $alignItems={'center'}>
                <FadeIn>
                    <Text size={20} weight={300} ui={css`
                        color: var(--g-600);
                    `}>LOCATION</Text>
                </FadeIn>
                <FadeIn>
                    <Column $alignItems={'center'}>
                        <Text size={16} weight={300}>
                            {weddingPlace.placeName}
                        </Text>
                        <Text size={16} weight={300}>
                            {weddingPlace.addressName} {weddingPlace.floorHall}
                        </Text>
                    </Column>
                </FadeIn>
                <View ref={kakaoMapRef} ui={css`
                    display: flex;
                    align-self: stretch;
                    height: 307px;
                    ${!weddingPlace.placeStatus && css`
                        display: none;
                    `}
                `}></View>
                <FadeIn>
                    <Text size={16} weight={300} style={{
                        marginLeft: 24,
                        alignSelf: 'stretch',
                        textAlign: 'start',
                        whiteSpace: 'pre-line'
                    }}>{weddingPlace.placeTransportation}</Text>
                </FadeIn>
            </Column>
            <Spacer h={65}/>
        </Column>
    );
}

export default LocationTemplate;
