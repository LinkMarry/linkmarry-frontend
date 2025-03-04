import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import FormToggle from "@designsystem/component/FormToggle";

const EditorInspectorGallery = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>갤러리</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox title={'사진을 첨부해 주세요'} content={'사진은 최대 30장까지 업로드 가능합니다.'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton items={['슬라이드', '하이라이트', '그리드']} selectedTab={0} onChange={tab => {
                }}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>설정</Text>
                <FormToggleSet>
                    <FormToggle checked={false} OnChange={checked => {
                    }} label={'사진 확대 방지'}/>
                    <FormToggle checked={false} OnChange={checked => {
                    }} label={'이미지 클릭 시 전체 화면'}/>
                </FormToggleSet>
            </Column>
        </Column>
    );
};

export default EditorInspectorGallery;
