import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import Spacer from "@designsystem/component/Spacer";
import {css} from "styled-components";
import Select from "@designsystem/component/Select";
import Checkbox from "@designsystem/component/Checkbox";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import BaseInfo from "@remote/value/BaseInfo";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorGroom = ({value, update}: Props) => {
    return (
        <EditorInspectorWrapper type={'groom'}>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 성함</Text>
                <Column $alignItems={'stretch'} gap={8}>
                    <Row gap={8}>
                        <Input placeholder={'성'}/>
                        <Input placeholder={'이름'}/>
                        <Input placeholder={'관계'}/>
                    </Row>
                    <Row gap={8}>
                        <Input placeholder={'영문 이름'} ui={css`
                            flex: 1;
                        `}/>
                        <Spacer/>
                        <Spacer/>
                    </Row>
                </Column>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 아버지</Text>
                <Row gap={8} $alignItems={'center'}>
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
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 어머니</Text>
                <Row gap={8} $alignItems={'center'}>
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
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 아버지</Text>
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

export default EditorInspectorGroom;
