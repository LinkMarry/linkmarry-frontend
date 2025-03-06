import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SharingLink from "@src/component/SharingLink";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Divider from "@designsystem/component/Divider";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";

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
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} customStyle={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox title={'사진을 첨부해 주세요'} content={'업로드한 사진은 대표 이미지로 등록됩니다.'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink button={'none'} orientation={'horizontal'}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorUrlShare;
