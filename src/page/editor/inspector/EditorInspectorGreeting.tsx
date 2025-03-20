import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import Select from "@designsystem/component/Select";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import {greetingDesignList, greetingDesignMap} from "@remote/enumeration/GreetingDesign";

const greetingSampleList: {
    title: string;
    content: string;
}[] = [
    {
        title: '사랑으로 가득한 날, 함께해주세요',
        content: '사랑으로 하나 되는 소중한 날,\n' +
            '함께 해주셔서 따뜻한 축복을 더해주신다면\n' +
            '더없는 기쁨으로 간직하겠습니다.'
    },
    {
        title: '새로운 시작을 함께해주세요',
        content: '새로운 시작을 알리는 날,\n' +
            '소중한 분들과 함께하고 싶습니다.\n' +
            '함께해 주셔서 사랑과 행복을 나눠주세요.'
    },
    {
        title: '둘이 하나 되는 날, 함께해주세요',
        content: '둘이 하나 되는 뜻깊은 날,\n' +
            '함께해 주신다면 더 큰 기쁨이 될 것입니다.\n' +
            '귀한 발걸음으로 축복해 주세요.'
    },
    {
        title: '사랑이 약속이 되는 날',
        content: '인연이 사랑이 되고, 사랑이 약속이 되어\n' +
            '한 길을 함께 걸으려 합니다.\n' +
            '오셔서 따뜻한 축복으로 함께해 주세요.'
    }
];

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorGreeting = ({value, update}: Props) => {
    return (
        <EditorInspectorWrapper type={'greeting'}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={value.greeting.greetingTitle} onChange={event => update(draft => {
                    draft.greeting.greetingTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={value.greeting.greetingContent} onChange={event => update(draft => {
                    draft.greeting.greetingContent = event.target.value;
                })} $ui={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>샘플 양식</Text>
                <Select
                    items={greetingSampleList.map(i => i.title)}
                    selected={greetingSampleList.map(i => i.content).indexOf(value.greeting.greetingContent)}
                    OnChange={index => update(draft => {
                        draft.greeting.greetingContent = greetingSampleList[index].content;
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
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
