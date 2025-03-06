import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Spacer from "@designsystem/component/Spacer";
import {css} from "styled-components";
import Checkbox from "@designsystem/component/Checkbox";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorBride = (
    {
        value: {
            baseInfo
        },
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'bride'}>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부 성함</Text>
                <Column alignment={'stretch'} gap={8}>
                    <Row gap={8}>
                        <Input placeholder={'성'} value={baseInfo.brideFirstName} onChange={event => update(draft => {
                            draft.baseInfo.brideFirstName = event.target.value;
                        })}/>
                        <Input placeholder={'이름'} value={baseInfo.brideLastName} onChange={event => update(draft => {
                            draft.baseInfo.brideLastName = event.target.value;
                        })}/>
                        <Input placeholder={'관계'} value={baseInfo.brideFamilyName} onChange={event => update(draft => {
                            draft.baseInfo.brideFamilyName = event.target.value;
                        })}/>
                    </Row>
                    <Row gap={8}>
                        <Input placeholder={'영문 이름'} value={baseInfo.brideEnglishName} onChange={event => update(draft => {
                            draft.baseInfo.brideEnglishName = event.target.value;
                        })} ui={css`
                            flex: 1;
                        `}/>
                        <Spacer/>
                        <Spacer/>
                    </Row>
                </Column>
            </Column>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부 아버지</Text>
                <Row gap={8} alignment={'center'}>
                    <Input placeholder={'성'} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} ui={css`
                        flex: 1;
                    `}/>
                </Row>
                <Row gap={8}>
                    <Checkbox checked={false} OnChange={checked => {
                    }} label={'故'} ui={css`
                        flex: 1;
                    `}/>
                    <Spacer/>
                    <Spacer/>
                </Row>
            </Column>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부 어머니</Text>
                <Row gap={8} alignment={'center'}>
                    <Input placeholder={'성'} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} ui={css`
                        flex: 1;
                    `}/>
                </Row>
                <Row gap={8}>
                    <Checkbox checked={false} OnChange={checked => {
                    }} label={'故'} ui={css`
                        flex: 1;
                    `}/>
                    <Spacer/>
                    <Spacer/>
                </Row>
            </Column>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부 아버지</Text>
                <FormToggle
                    checked={false}
                    OnChange={checked => {
                    }}
                    label={'국화꽃으로 표시'}
                />
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorBride;
