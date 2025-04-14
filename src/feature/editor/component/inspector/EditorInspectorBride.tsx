import React from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Input from "@src/userinterface/component/Input";
import Spacer from "@src/userinterface/component/Spacer";
import {css} from "styled-components";
import Checkbox from "@src/userinterface/component/Checkbox";
import EditorInspectorWrapper from "@src/feature/editor/component/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";

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
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>신부 성함</Text>
                <Column $alignItems={'stretch'} $gap={8}>
                    <Row $gap={8}>
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
                    <Row $gap={8}>
                        <Input placeholder={'영문 이름'} value={baseInfo.brideEnglishName}
                               onChange={event => update(draft => {
                                   draft.baseInfo.brideEnglishName = event.target.value;
                               })} ui={css`
                            flex: 1;
                        `}/>
                        <Spacer/>
                        <Spacer/>
                    </Row>
                </Column>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>신부 아버지</Text>
                <Row $gap={8} $alignItems={'center'}>
                    <Input placeholder={'성'} value={baseInfo.brideFatherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.brideFatherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.brideFatherLastName} onChange={event => update(draft => {
                        draft.baseInfo.brideFatherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.brideFatherFamilyName}
                           onChange={event => update(draft => {
                               draft.baseInfo.brideFatherFamilyName = event.target.value;
                           })} ui={css`
                        flex: 1;
                    `}/>
                </Row>
                <Row $gap={8}>
                    <Checkbox checked={baseInfo.brideFatherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.brideFatherStatus = checked;
                    })} label={'故'} ui={css`
                        flex: 1;
                    `}/>
                    <Spacer/>
                    <Spacer/>
                </Row>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>신부 어머니</Text>
                <Row $gap={8} $alignItems={'center'}>
                    <Input placeholder={'성'} value={baseInfo.brideMotherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.brideMotherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.brideMotherLastName} onChange={event => update(draft => {
                        draft.baseInfo.brideMotherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.brideMotherFamilyName}
                           onChange={event => update(draft => {
                               draft.baseInfo.brideMotherFamilyName = event.target.value;
                           })} ui={css`
                        flex: 1;
                    `}/>
                </Row>
                <Row $gap={8}>
                    <Checkbox checked={baseInfo.brideMotherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.brideMotherStatus = checked;
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

export default EditorInspectorBride;
