import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import Checkbox, {CheckboxRef} from "../../../../designsystem/component/checkbox";
import OptionTextField from "../component/OptionTextField";
import Button from "../../../../designsystem/component/button";

interface WeddingPlaceOptionProps {
    refs: {
        placeNameRef: RefObject<HTMLInputElement>
        placeTelRef: RefObject<HTMLInputElement>,
        placeTransportationRef: RefObject<HTMLInputElement>,
        placeStatusRef: RefObject<CheckboxRef>,
    }
}

function WeddingPlaceOption(
    {
        refs: {
            placeNameRef,
            placeTelRef,
            placeTransportationRef,
            placeStatusRef
        }
    }: WeddingPlaceOptionProps
) {
    return (
        <S.container>
            <Column flex={1} gap={32}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'주소'}/>
                        <Row gap={12} style={{width: 264, overflow: 'hidden'}}>
                            <OptionTextField width={184}/>
                            <Button text={'검색'} role={'assistive'} style={{
                                borderRadius: 8,
                                width: 68
                            }}/>
                        </Row>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'예식장명'}/>
                        <OptionTextField ref={placeNameRef} placeholder={'예식장 이름 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'층/홀'}/>
                        <OptionTextField placeholder={'층, 웨딩홀 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'연락처'}/>
                        <OptionTextField ref={placeTelRef} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'교통편'}/>
                        <OptionTextField ref={placeTransportationRef} placeholder={'주변 교통편 입력'} width={264}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'표시'}/>
                    <Checkbox ref={placeStatusRef} label={'지도 표시'}/>
                </Row>
            </Column>
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