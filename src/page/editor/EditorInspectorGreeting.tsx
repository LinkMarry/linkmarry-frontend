import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import Select from "@designsystem/component/Select";
import SegmentedButton from "@designsystem/component/SegmentedButton";

const EditorInspectorGreeting = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>인사말</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'}>제목</Text>
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'}>내용</Text>
                <Textarea hasLabel={false} customStyle={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'}>샘플 양식</Text>
                <Select items={[]} OnChange={index => {}}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'}>내용</Text>
                <SegmentedButton items={['기본', '초대 글자', '꽃 아이콘']} selectedTab={0} onChange={tab => {}}/>
            </Column>
        </Column>
    );
};

export default EditorInspectorGreeting;
