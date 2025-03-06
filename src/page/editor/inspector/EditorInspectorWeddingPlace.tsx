import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import {getPlaceholder} from "@remote/value/WeddingPlace";
import WeddingDto from "@remote/value/WeddingDto";
import Button from "@designsystem/component/Button";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";
import View from "@designsystem/core/View";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorWeddingPlace = (
    {
        value: {weddingPlace},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'weddingPlace'}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Input placeholder={'예식장명'} value={weddingPlace.placeName} onChange={event => update(draft => {
                    draft.weddingPlace.placeName = event.target.value;
                })}/>
                <Input placeholder={'주소'} value={weddingPlace.addressName} onChange={event => update(draft => {
                    draft.weddingPlace.addressName = event.target.value;
                })}/>
                <Input placeholder={'층/홀'} value={weddingPlace.floorHall} onChange={event => update(draft => {
                    draft.weddingPlace.floorHall = event.target.value;
                })}/>
                <Input placeholder={'연락처'} value={weddingPlace.placeTel} onChange={event => update(draft => {
                    draft.weddingPlace.placeTel = event.target.value;
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
