import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import Textarea from "~/userinterface/component/Textarea.tsx";
import {css} from "@linaria/core";
import PhotoUploadBox from "~/userinterface/specific/PhotoUploadBox.tsx";
import SharingLink from "~/userinterface/specific/SharingLink.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import View from "~/userinterface/core/View.tsx";


const EditorInspectorUrlShare = (
    {
        value: {url, linkShare},
        update
    }: Binding<WeddingDto>
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
