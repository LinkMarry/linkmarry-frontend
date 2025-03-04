import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/EditorInspectorWrapper";

const EditorInspectorPhone = () => {
    return (
        <EditorInspectorWrapper title={'연락처'}>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 신부 전화번호</Text>
                <Input placeholder={'신랑'}/>
                <Input placeholder={'신부'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>혼주 전화번호</Text>
                <FormToggle checked={false} OnChange={checked => {
                }} label={'혼주 연락처'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑측 혼주</Text>
                <Input placeholder={'신랑 아버지'}/>
                <Input placeholder={'신부 어머니'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부측 혼주</Text>
                <Input placeholder={'신부 아버지'}/>
                <Input placeholder={'신부 어머니'}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorPhone;
