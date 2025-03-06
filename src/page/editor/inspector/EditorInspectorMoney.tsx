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
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorMoney = (
    {
        value: {moneyInfo},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'money'}>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={moneyInfo.infoTitle} onChange={event => update(draft => {
                    draft.moneyInfo.infoTitle = event.target.value;
                })}/>
            </Column>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>설명</Text>
                <Textarea hasLabel={false} value={moneyInfo.infoContent} onChange={event => update(draft => {
                    draft.moneyInfo.infoContent = event.target.value;
                })} ui={css`
                    height: 194px;
                `}/>
            </Column>
            <FormToggle checked={moneyInfo.kakaoStatus} OnChange={checked => update(draft => {
                draft.moneyInfo.kakaoStatus = checked;
            })} label={'카카오페이 계좌 연동'}/>
            <Column alignment={'stretch'} gap={12}>
                <Checkbox checked={false} OnChange={checked => {
                }} label={'신랑'}/>
                <Row gap={12}>
                    <Input placeholder={'예금주'} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'예금주'} ui={css`
                        flex: 1;
                    `}/>
                </Row>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorMoney;
