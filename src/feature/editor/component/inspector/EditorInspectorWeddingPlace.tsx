import React, {useState} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Divider from "@src/userinterface/component/Divider";
import Input from "@src/userinterface/component/Input";
import FormToggleSet from "@src/userinterface/component/FormToggleSet";
import FormToggle from "@src/userinterface/component/FormToggle";
import EditorInspectorWrapper from "@src/feature/editor/component/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import {getPlaceholder} from "@src/infrastructure/network/value/WeddingPlace";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import Button from "@src/userinterface/component/Button";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import {css} from "styled-components";
import View from "@src/userinterface/core/View";
import KakaoMapDialog from "@src/userinterface/specific/dialog/KakaoMapDialog";
import {formatPhone} from "@src/shared/format-util";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorWeddingPlace = (
    {
        value: {weddingPlace},
        update
    }: Props
) => {
    const [showKakaoMapDialog, setShowKakaoMapDialog] = useState(false);

    return (
        <EditorInspectorWrapper type={'weddingPlace'}>
            {showKakaoMapDialog && (
                <KakaoMapDialog
                    weddingPlace={weddingPlace}
                    onChange={weddingPlace => update(draft => {
                        draft.weddingPlace = weddingPlace;
                    })}
                    dismiss={() => setShowKakaoMapDialog(false)}
                />
            )}
            <Column $alignItems={'stretch'} $gap={12}>
                <Input placeholder={'예식장명'} value={weddingPlace.placeName} onChange={event => update(draft => {
                    draft.weddingPlace.placeName = event.target.value;
                })} ui={css`
                    pointer-events: none;
                `}/>
                <Row $gap={12} $alignItems={'stretch'}>
                    <Input placeholder={'주소'} value={weddingPlace.addressName} onChange={event => update(draft => {
                        draft.weddingPlace.addressName = event.target.value;
                    })} ui={css`
                        flex: 1;
                        min-width: 0;
                        pointer-events: none;
                    `}/>
                    <Button text={'검색'} buttonType={'tonal'} ui={css`
                        height: auto;
                    `} onClick={() => setShowKakaoMapDialog(true)}/>
                </Row>
                <Input placeholder={'층/홀'} value={weddingPlace.floorHall} onChange={event => update(draft => {
                    draft.weddingPlace.floorHall = event.target.value;
                })}/>
                <Input placeholder={'연락처'} value={weddingPlace.placeTel} onChange={event => update(draft => {
                    const value = event.target.value;
                    draft.weddingPlace.placeTel = formatPhone(value);
                })}/>
            </Column>
            <Divider/>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>교통편</Text>
                {Array.from(weddingPlace.placeTransportation).map((item, index) => {
                    const input = <Input
                        key={index}
                        placeholder={getPlaceholder(index)}
                        value={item}
                        onChange={event => update(draft => {
                            draft.weddingPlace.placeTransportation[index] = event.target.value;
                        })}
                        ui={css`
                            flex: 1;
                        `}
                    />;
                    if (index <= 2) {
                        return input;
                    } else {
                        return (
                            <Row key={index} $gap={12} $alignItems={'center'}>
                                {input}
                                <View $ui={css`
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                `} onClick={() => {
                                    const copiedPlaceTransportation = [...weddingPlace.placeTransportation];
                                    copiedPlaceTransportation.splice(index, 1);
                                    update(draft => {
                                        draft.weddingPlace.placeTransportation = copiedPlaceTransportation;
                                    });
                                }}>
                                    <Icon iconType={IconType.Trash} width={24} height={24} ui={css`
                                        padding: 8px;
                                        cursor: pointer;
                                    `}/>
                                </View>
                            </Row>
                        );
                    }
                })}
                <Button text={'교통편 추가'} leadingIcon={IconType.AddLine} buttonType={'tonal'} onClick={() => {
                    update(draft => {
                        draft.weddingPlace.placeTransportation.push('');
                    })
                }}/>
            </Column>
            <Divider/>
            <FormToggleSet>
                <FormToggle checked={weddingPlace.placeStatus} OnChange={checked => update(draft => {
                    draft.weddingPlace.placeStatus = checked;
                })} label={'지도 표시'}/>
                <FormToggle checked={weddingPlace.placeLock} OnChange={checked => update(draft => {
                    draft.weddingPlace.placeLock = checked;
                })} label={'지도 잠금'}/>
                <FormToggle checked={weddingPlace.placeNav} OnChange={checked => update(draft => {
                    draft.weddingPlace.placeNav = checked;
                })} label={'네비게이션'}/>
            </FormToggleSet>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorWeddingPlace;
