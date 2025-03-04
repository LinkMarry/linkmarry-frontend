import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/EditorInspectorWrapper";

const EditorInspectorGuestComment = () => {
    return (
        <EditorInspectorWrapper title={'방명록'}>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton items={['기본', '스티커']} selectedTab={0} onChange={() => {
                }}/>
            </Column>
            <FormToggle checked={false} OnChange={() => {
            }} label={'내용 공개'}/>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGuestComment;
