import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SharingLink from "@src/component/SharingLink";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Divider from "@designsystem/component/Divider";

const EditorInspectorKakaotalkInvitationLetter = () => {
    return (
        <EditorInspectorWrapper title={'카카오톡 초대장'}>
            <Divider/>
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
                <Text type={'p3'} bold={true}>버튼 추가</Text>
                <SegmentedButton items={['설정 안 함', '위치 보기', '참석의사']} selectedTab={0} onChange={tab => {}}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>스타일</Text>
                <SegmentedButton items={['가로', '세로']} selectedTab={0} onChange={tab => {}}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink button={'rsvp'} orientation={'horizontal'}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorKakaotalkInvitationLetter;
