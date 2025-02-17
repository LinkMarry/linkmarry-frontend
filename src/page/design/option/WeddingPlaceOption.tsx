import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Divider from "@designsystem/component/Divider";
import OptionLabel from "@page/design/component/OptionLabel";
import Checkbox from "@designsystem/component/Checkbox";
import OptionTextField from "@page/design/component/OptionTextField";
import KakaoMapDialog from "@src/component/dialog/KakaoMapDialog";
import WeddingPlace from "@remote/value/WeddingPlace";
import Textarea from "@designsystem/component/Textarea";
import Button from "@designsystem/component/Button";

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
        <Row $customStyle={css`
            padding: 32px;
        `}>
            <Column flex={1} gap={32}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'주소'}/>
                        <Row gap={12} $customStyle={css`
                            width: 264px;
                            overflow: hidden;
                        `}>
                            <OptionTextField fieldProps={{
                                value: weddingPlace.addressName,
                                disabled: true
                            }} width={184}/>
                            <Button text={'검색'} buttonType={'outlined'} customStyle={css`
                                border-radius: 8px;
                                width: 68px;
                            `} onClick={() => {
                                setShowKakaoMapDialog(true);
                            }}/>
                        </Row>
                    </Row>
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
                        <OptionLabel label={'교통편'} style={{alignSelf: 'flex-start'}}/>
                        <Textarea
                            value={weddingPlace.placeTransportation}
                            onChange={event => onChange({
                                ...weddingPlace,
                                placeTransportation: event.target.value
                            })}
                            placeholder={'주변 교통편 입력'}
                            customStyle={css`
                                width: 264px;
                            `}
                        />
                    </Row>
                </Column>
                <Divider/>
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
                <KakaoMapDialog
                    weddingPlace={weddingPlace}
                    onChange={weddingPlace => onChange(weddingPlace)}
                    dismiss={() => setShowKakaoMapDialog(false)}
                />
            )}
        </Row>
    );
}

export default WeddingPlaceOption;