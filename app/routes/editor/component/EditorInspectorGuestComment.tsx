import Text from "~/components/core/Text.tsx";
import Input from "~/components/core/Input.tsx";
import SegmentedButton from "~/components/core/SegmentedButton.tsx";
import FormToggle from "~/components/core/FormToggle.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import {
    GuestCommentDesignList,
    guestCommentDesignMap
} from "~/api/enumeration/GuestCommentDesign.ts";
import View from "~/components/core/View.tsx";
import {css} from "@linaria/core";
import Textarea from "~/components/core/Textarea.tsx";
import type Wedding from "~/api/value/Wedding.ts";


const EditorInspectorGuestComment = (
    {
        value: {guestComment},
        update
    }: Binding<Wedding>
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
