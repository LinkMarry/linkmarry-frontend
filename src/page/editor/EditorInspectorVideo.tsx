import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import Toggle from "@designsystem/component/Toggle";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import PhotoUploadBox from "@src/component/PhotoUploadBox";

const EditorInspectorVideo = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Row $alignItems={'center'}>
                <Text type={'p1'} bold={true}>동영상</Text>
                <Spacer/>
                <Toggle checked={false} OnChange={checked => {
                }}/>
            </Row>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>URL로 첨부</Text>
                <Input hasLabel={false}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>파일로 첨부</Text>
                <PhotoUploadBox title={'파일을 첨부해 주세요'} content={'mp4 파일 형식만 업로드 가능합니다.'}/>
            </Column>
        </Column>
    );
};

export default EditorInspectorVideo;
