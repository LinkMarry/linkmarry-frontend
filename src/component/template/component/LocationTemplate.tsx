import React, {useEffect, useRef} from 'react';
import Spacer from "@designsystem/component/spacer";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import styled from "styled-components";
import WeddingPlace from "@remote/value/WeddingPlace";

const {kakao} = window as any;

interface LocationProps {
    templateColor: string;
    weddingPlace: WeddingPlace;
}

function LocationTemplate(
    {
        templateColor,
        weddingPlace
    }: LocationProps
) {
    const kakaoMapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!kakao || !kakao.maps) {
            alert('지도 서비스가 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
            return;
        }


        new kakao.maps.Map(kakaoMapRef.current, {
            center: new kakao.maps.LatLng(35.6632, 128.4141),
            level: 5, // 확대 레벨
        });
        
    }, []);
    
    return (
        <S.root background={templateColor}>
            <Spacer h={92}/>
            <Column gap={40} $alignItems={'center'}>
                <Text color={colors.g600} size={20} weight={300}>
                    LOCATION
                </Text>
                <Column $alignItems={'center'}>
                    <Text size={16} weight={300}>
                        {weddingPlace.placeName}
                    </Text>
                    <Text size={16} weight={300}>
                        {weddingPlace.addressName} {weddingPlace.floorHall}
                    </Text>
                </Column>
                <S.kakaoMap ref={kakaoMapRef} style={{
                    display: weddingPlace.placeStatus ? 'flex' : 'none'
                }}></S.kakaoMap>
                <Text size={16} weight={300} style={{
                    marginLeft: 24,
                    alignSelf: 'stretch',
                    textAlign: 'start'
                }}>{weddingPlace.placeTransportation}</Text>
            </Column>
            <Spacer h={65}/>
        </S.root>
    );
}

const S = {
    root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        background: ${({background}) => background};
        align-items: stretch;
    `,
    kakaoMap: styled.div`
        align-self: stretch;
        height: 307px;
    `
};

export default LocationTemplate;