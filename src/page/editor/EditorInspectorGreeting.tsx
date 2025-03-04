import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";

const EditorInspectorGreeting = () => {
    return (
        <Column gap={32}>
            <Text type={'p1'} bold={true}>인사말</Text>

        </Column>
    );
};

export default EditorInspectorGreeting;
