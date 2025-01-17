import React, {useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import Checkbox from "@designsystem/component/checkbox";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Button from "@designsystem/component/button";
import KakaoMapDialog from "@src/component/dialog/KakaoMapDialog";
import WeddingPlace from "@remote/value/WeddingPlace";

interface WeddingPlaceOptionProps {
    weddingPlace: WeddingPlace;
    onChange: (weddingPlace: WeddingPlace) => void
}

function WeddingPlaceOption(
    {
        weddingPlace,
        onChange
    }: WeddingPlaceOptionProps
) {
    const [showKakaoMapDialog, setShowKakaoMapDialog] = useState(false);

    return (
        <S.container>
            <Column flex={1} gap={32}>
                <Column gap={16}>
                    {/* TODO: Apply Kakao Map */}
                    {/*<Row gap={12}>*/}
                    {/*    <OptionLabel label={'주소'}/>*/}
                    {/*    <Row gap={12} style={{width: 264, overflow: 'hidden'}}>*/}
                    {/*        <OptionTextField width={184}/>*/}
                    {/*        <Button text={'검색'} role={'assistive'} style={{borderRadius: 8, width: 68}} onClick={() => {*/}
                    {/*            setShowKakaoMapDialog(true);*/}
                    {/*        }}/>*/}
                    {/*    </Row>*/}
                    {/*</Row>*/}
                    <Row gap={12}>
                        <OptionLabel label={'예식장명'}/>
                        <OptionTextField fieldProps={{
                            value: weddingPlace.placeName,
                            onChange: event => onChange({...weddingPlace, placeName: event.target.value})
                        }} placeholder={'예식장 이름 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'층/홀'}/>
                        <OptionTextField fieldProps={{
                            value: weddingPlace.floorHall,
                            onChange: event => onChange({...weddingPlace, floorHall: event.target.value})
                        }} placeholder={'층, 웨딩홀 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'연락처'}/>
                        <OptionTextField fieldProps={{
                            value: weddingPlace.placeTel,
                            onChange: event => onChange({...weddingPlace, placeTel: event.target.value})
                        }} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'교통편'}/>
                        <OptionTextField fieldProps={{
                            value: weddingPlace.placeTransportation,
                            onChange: event => onChange({...weddingPlace, placeTransportation: event.target.value})
                        }} placeholder={'주변 교통편 입력'} width={264}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'표시'}/>
                    <Checkbox
                        checked={weddingPlace.placeStatus}
                        onChange={checked => onChange({...weddingPlace, placeStatus: checked})}
                        label={'지도 표시'}
                    />
                </Row>
            </Column>
            {showKakaoMapDialog && (
                <KakaoMapDialog dismiss={() => setShowKakaoMapDialog(false)}/>
            )}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 32px;
    `
}

export default WeddingPlaceOption;