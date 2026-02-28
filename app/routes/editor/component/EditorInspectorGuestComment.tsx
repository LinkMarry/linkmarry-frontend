import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import SegmentedButton from "~/userinterface/component/SegmentedButton.tsx";
import FormToggle from "~/userinterface/component/FormToggle.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import {
    GuestCommentDesignList,
    guestCommentDesignMap
} from "~/infrastructure/network/enumeration/GuestCommentDesign.ts";
import View from "~/userinterface/core/View.tsx";
import {css} from "@linaria/core";
import Textarea from "~/userinterface/component/Textarea.tsx";


const EditorInspectorGuestComment = (
    {
        value: {guestComment},
        update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'guestComment'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={guestComment.title} onChange={event => update(draft => {
                    draft.guestComment.title = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={guestComment.content} onChange={event => update(draft => {
                    draft.guestComment.content = event.target.value;
                })} ui={css`
                    height: 194px;
                `}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton
                    items={GuestCommentDesignList.map(i => guestCommentDesignMap[i].korean)}
                    selectedTab={GuestCommentDesignList.indexOf(guestComment.guestCommentDesign)}
                    onChange={tab => update(draft => {
                        draft.guestComment.guestCommentDesign = GuestCommentDesignList[tab];
                    })}
                />
            </View>
            <FormToggle checked={guestComment.privateContent} OnChange={checked => update(draft => {
                draft.guestComment.privateContent = checked;
            })} label={'내용 비공개'}/>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGuestComment;
