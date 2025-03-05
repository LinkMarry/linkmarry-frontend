import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import Toggle from "@designsystem/component/Toggle";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import FormToggle from "@designsystem/component/FormToggle";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Divider from "@designsystem/component/Divider";
import Binding from "@src/interface/Binding";
import Rsvp from "@remote/value/Rsvp";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {}

const EditorInspectorRsvp = ({value, update}: Props) => {
    return (
        <EditorInspectorWrapper title={'참석의사 RSVP'} toggle={{
            checked: false,
            OnChange: () => {
            }
        }}>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} customStyle={css`
                    height: 194px;
                `}/>
            </Column>
            <FormToggle checked={false} OnChange={checked => {
            }} label={'청첩장 접속 시 팝업 띄우기'}/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>표시 항목</Text>
                <FormToggleSet>
                    <FormToggle checked={false} OnChange={() => {
                    }} label={'식사 여부'}/>
                    <FormToggle checked={false} OnChange={() => {
                    }} label={'참석 인원'}/>
                    <FormToggle checked={false} OnChange={() => {
                    }} label={'연락처'}/>
                    <FormToggle checked={false} OnChange={() => {
                    }} label={'버스 탑승 여부'}/>
                    <FormToggle checked={false} OnChange={() => {
                    }} label={'추가 전달사항'}/>
                </FormToggleSet>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorRsvp;
