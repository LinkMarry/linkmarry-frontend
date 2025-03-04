import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import FormToggle from "@designsystem/component/FormToggle";

const EditorInspectorGuestComment = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>방명록</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton items={['기본', '스티커']} selectedTab={0} onChange={() => {}}/>
            </Column>
            <FormToggle checked={false} OnChange={() => {}} label={'내용 공개'}/>
        </Column>
    );
};

export default EditorInspectorGuestComment;
