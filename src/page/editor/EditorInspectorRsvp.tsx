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

const EditorInspectorRsvp = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Row $alignItems={'center'}>
                <Text type={'p1'} bold={true}>참석의사 RSVP</Text>
                <Spacer/>
                <Toggle checked={false} OnChange={checked => {
                }}/>
            </Row>
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
                    <FormToggle checked={false} OnChange={() => {}} label={'식사 여부'}/>
                    <FormToggle checked={false} OnChange={() => {}} label={'참석 인원'}/>
                    <FormToggle checked={false} OnChange={() => {}} label={'연락처'}/>
                    <FormToggle checked={false} OnChange={() => {}} label={'버스 탑승 여부'}/>
                    <FormToggle checked={false} OnChange={() => {}} label={'추가 전달사항'}/>
                </FormToggleSet>
            </Column>
        </Column>
    );
};

export default EditorInspectorRsvp;
