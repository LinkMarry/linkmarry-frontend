import Text from "~/components/core/Text.tsx";
import Input from "~/components/core/Input.tsx";
import Textarea from "~/components/core/Textarea.tsx";
import {css} from "@linaria/core";
import PhotoUploadBox from "~/components/PhotoUploadBox.tsx";
import SharingLink from "~/components/SharingLink.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import View from "~/components/core/View.tsx";
import type Wedding from "~/api/value/Wedding.ts";


const EditorInspectorUrlShare = (
    {
        value: {url, linkShare},
        update
    }: Binding<Wedding>
) => {
    return (
        <EditorInspectorWrapper type={'urlShare'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={linkShare.urlTitle} onChange={event => update(draft => {
                    draft.linkShare.urlTitle = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={linkShare.urlContent} onChange={event => update(draft => {
                    draft.linkShare.urlContent = event.target.value;
                })} ui={css`
                    height: 194px;
                `}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorUrlShare-urlImgUrl'}
                    value={linkShare.urlImgUrl}
                    weddingUrl={url}
                    onChange={images => update(draft => {
                        draft.linkShare.urlImgUrl = images;
                    })}
                />
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink title={linkShare.urlTitle} background={linkShare.urlImgUrl} Style={true}/>
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorUrlShare;
