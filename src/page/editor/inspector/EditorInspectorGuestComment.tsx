import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import {guestCommentDesignList, guestCommentDesignMap} from "@remote/enumeration/GuestCommentDesign";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorGuestComment = (
    {
        value: {guestComment},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'guestComment'}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={guestComment.title} onChange={event => update(draft => {
                    draft.guestComment.title = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Input hasLabel={false} value={guestComment.content} onChange={event => update(draft => {
                    draft.guestComment.content = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton
                    items={guestCommentDesignList.map(i => guestCommentDesignMap[i].korean)}
                    selectedTab={guestCommentDesignList.indexOf(guestComment.guestCommentDesign)}
                    onChange={tab => update(draft => {
                        draft.guestComment.guestCommentDesign = guestCommentDesignList[tab];
                    })}
                />
            </Column>
            <FormToggle checked={guestComment.privateContent} OnChange={checked => update(draft => {
                draft.guestComment.privateContent = checked;
            })} label={'내용 비공개'}/>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGuestComment;
