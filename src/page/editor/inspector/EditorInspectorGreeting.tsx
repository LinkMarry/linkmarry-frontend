import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import Select from "@designsystem/component/Select";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import Greeting from "@remote/value/Greeting";
import WeddingDto from "@remote/value/WeddingDto";
import greetingDesign, {greetingDesignList, greetingDesignMap} from "@remote/enumeration/GreetingDesign";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorGreeting = ({value, update}: Props) => {
    return (
        <EditorInspectorWrapper type={'greeting'}>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={value.greeting.greetingTitle} onChange={event => update(draft => {
                    draft.greeting.greetingTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={value.greeting.greetingContent} onChange={event => update(draft => {
                    draft.greeting.greetingContent = event.target.value;
                })} ui={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                {/*todo*/}
                <Text type={'p3'} bold={true}>샘플 양식</Text>
                <Select items={[]} OnChange={index => {
                }}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <SegmentedButton
                    items={greetingDesignList.map(i => greetingDesignMap[i].korean)}
                    selectedTab={greetingDesignList.indexOf(value.greeting.greetingDesign)}
                    onChange={tab => {
                        update(draft => {
                            draft.greeting.greetingDesign = greetingDesignList[tab];
                        })
                    }}
                />
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGreeting;
