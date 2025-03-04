import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";

const EditorInspectorGreeting = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>인사말</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'}>제목</Text>
                <Input hasLabel={false}/>
            </Column>
        </Column>
    );
};

export default EditorInspectorGreeting;
