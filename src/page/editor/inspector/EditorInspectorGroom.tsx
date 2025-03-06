import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Spacer from "@designsystem/component/Spacer";
import {css} from "styled-components";
import Checkbox from "@designsystem/component/Checkbox";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorGroom = (
    {
        value: {baseInfo},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'groom'}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>신랑 성함</Text>
                <Column $alignItems={'stretch'} $gap={8}>
                    <Row $gap={8}>
                        <Input placeholder={'성'} value={baseInfo.groomFirstName} onChange={event => update(draft => {
                            draft.baseInfo.groomFirstName = event.target.value;
                        })}/>
                        <Input placeholder={'이름'} value={baseInfo.groomLastName} onChange={event => update(draft => {
                            draft.baseInfo.groomLastName = event.target.value;
                        })}/>
                        <Input placeholder={'관계'} value={baseInfo.groomFamilyName} onChange={event => update(draft => {
                            draft.baseInfo.groomFamilyName = event.target.value;
                        })}/>
                    </Row>
                    <Row $gap={8}>
                        <Input placeholder={'영문 이름'} value={baseInfo.groomEnglishName} onChange={event => update(draft => {
                            draft.baseInfo.groomEnglishName = event.target.value;
                        })} ui={css`
                            flex: 1;
                        `}/>
                        <Spacer/>
                        <Spacer/>
                    </Row>
                </Column>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>신랑 아버지</Text>
                <Row $gap={8} $alignItems={'center'}>
                    <Input placeholder={'성'} value={baseInfo.groomFatherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.groomFatherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.groomFatherLastName} onChange={event => update(draft => {
                        draft.baseInfo.groomFatherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.groomFatherFamilyName} onChange={event => update(draft => {
                        draft.baseInfo.groomFatherFamilyName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                </Row>
                <Row $gap={8}>
                    <Checkbox checked={baseInfo.groomFatherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.groomFatherStatus = checked;
                    })} label={'故'} ui={css`
                        flex: 1;
                    `}/>
                    <Spacer/>
                    <Spacer/>
                </Row>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>신랑 어머니</Text>
                <Row $gap={8} $alignItems={'center'}>
                    <Input placeholder={'성'} value={baseInfo.groomMotherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.groomMotherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.groomMotherLastName} onChange={event => update(draft => {
                        draft.baseInfo.groomMotherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.groomMotherFamilyName} onChange={event => update(draft => {
                        draft.baseInfo.groomMotherFamilyName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                </Row>
                <Row $gap={8}>
                    <Checkbox checked={baseInfo.groomMotherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.groomMotherStatus = checked;
                    })} label={'故'} ui={css`
                        flex: 1;
                    `}/>
                    <Spacer/>
                    <Spacer/>
                </Row>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGroom;
