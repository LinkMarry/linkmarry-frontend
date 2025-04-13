import React from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Input from "@src/userinterface/component/Input";
import Textarea from "@src/userinterface/component/Textarea";
import {css} from "styled-components";
import PhotoUploadBox from "@src/userinterface/specific/PhotoUploadBox";
import SharingLink from "@src/userinterface/specific/SharingLink";
import EditorInspectorWrapper from "@src/feature/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";

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
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={linkShare.urlTitle} onChange={event => update(draft => {
                    draft.linkShare.urlTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={linkShare.urlContent} onChange={event => update(draft => {
                    draft.linkShare.urlContent = event.target.value;
                })} $ui={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorUrlShare-urlImgUrl'} value={linkShare.urlImgUrl}
                    onChange={images => update(draft => {
                        draft.linkShare.urlImgUrl = images;
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink title={linkShare.urlTitle} background={linkShare.urlImgUrl} Style={true}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorUrlShare;
