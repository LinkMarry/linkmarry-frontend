import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "../../designsystem/component/Divider";
import Input from "../../designsystem/component/Input";
import Spacer from "@designsystem/component/Spacer";
import {css} from "styled-components";

const EditorInspectorBride = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>신부측 정보</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부 성함</Text>
                <Column $alignItems={'stretch'} gap={8}>
                    <Row gap={8}>
                        <Input placeholder={'성'}/>
                        <Input placeholder={'이름'}/>
                        <Input placeholder={'영문 이름'}/>
                    </Row>
                    <Row gap={8}>
                        <Input customStyle={css`flex: 1;`}/>
                        <Spacer/>
                        <Spacer/>
                    </Row>
                </Column>
            </Column>
        </Column>
    );
};

export default EditorInspectorBride;
