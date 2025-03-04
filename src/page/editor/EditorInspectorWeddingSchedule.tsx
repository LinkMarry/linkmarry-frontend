import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import FormToggle from "@designsystem/component/FormToggle";

const EditorInspectorWeddingSchedule = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>예식 일시</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>예식일</Text>
                <Input type={'date'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>예식 시간</Text>
                <Input type={'time'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>추가 요소</Text>
                <FormToggleSet>
                    <FormToggle checked={false} OnChange={checked => {
                    }} label={'캘린더'}/>
                    <FormToggle checked={false} OnChange={checked => {
                    }} label={'디데이'}/>
                </FormToggleSet>
            </Column>
        </Column>
    );
};

export default EditorInspectorWeddingSchedule;
