import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SharingLink from "@src/component/SharingLink";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import KakaoButton from "@remote/enumeration/KakaoButton";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorUrlShare = (
    {
        value: {
            linkShare
        },
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'urlShare'}>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={linkShare.urlTitle} onChange={event => update(draft => {
                    draft.linkShare.urlTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={linkShare.urlContent} onChange={event => update(draft => {
                    draft.linkShare.urlContent = event.target.value;
                })} customStyle={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorUrlShare-urlImgUrl'} value={[linkShare.urlImgUrl]}
                    onChange={images => update(draft => {
                        draft.linkShare.urlImgUrl = images[0];
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink Style={true}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorUrlShare;
