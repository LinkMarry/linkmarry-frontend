import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import FormToggle from "@designsystem/component/FormToggle";

const EditorInspectorWeddingLocation = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>예식 장소</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Input placeholder={'예식장명'}/>
                <Input placeholder={'주소'}/>
                <Input placeholder={'층/홀'}/>
                <Input placeholder={'연락처'}/>
            </Column>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>교통편</Text>
                <Input placeholder={'버스'}/>
                <Input placeholder={'지하철'}/>
                <Input placeholder={'주차안내'}/>
            </Column>
            <Divider/>
            <FormToggleSet>
                <FormToggle checked={false} OnChange={checked => {
                }} label={'지도 표시'}/>
                <FormToggle checked={false} OnChange={checked => {
                }} label={'지도 잠금'}/>
                <FormToggle checked={false} OnChange={checked => {
                }} label={'네비게이션'}/>
            </FormToggleSet>
        </Column>
    );
};

export default EditorInspectorWeddingLocation;
