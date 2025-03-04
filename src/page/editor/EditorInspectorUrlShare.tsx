import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SharingLink from "@src/component/SharingLink";

const EditorInspectorUrlShare = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>URL 공유</Text>
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
        </Column>
    );
};

export default EditorInspectorUrlShare;
