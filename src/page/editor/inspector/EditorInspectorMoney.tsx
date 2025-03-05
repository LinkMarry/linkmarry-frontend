import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import FormToggle from "@designsystem/component/FormToggle";
import Checkbox from "@designsystem/component/Checkbox";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import MoneyInfo from "@remote/value/MoneyInfo";

interface Props extends Binding<MoneyInfo> {
}

const EditorInspectorMoney = ({value, onChange}: Props) => {
    return (
        <EditorInspectorWrapper title={'축의금'}>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>대표 사진</Text>
                <Input hasLabel={false}/>
            </Column>

            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>대표 사진</Text>
                <Textarea hasLabel={false} customStyle={css`
                    height: 194px;
                `}/>
            </Column>
            <FormToggle checked={false} OnChange={checked => {
            }} label={'카카오페이 계좌 연동'}/>
            <Column $alignItems={'stretch'} gap={12}>
                <Checkbox checked={false} OnChange={checked => {
                }} label={'신랑'}/>
                <Row gap={12}>
                    <Input placeholder={'예금주'} customStyle={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'예금주'} customStyle={css`
                        flex: 1;
                    `}/>
                </Row>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorMoney;
