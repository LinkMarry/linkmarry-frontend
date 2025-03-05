import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import Video from "@remote/value/Video";

interface Props extends Binding<Video> {}

const EditorInspectorVideo = ({value, onChange}: Props) => {
    return (
        <EditorInspectorWrapper title={'동영상'} toggle={{
            checked: false,
            OnChange: () => {
            }
        }}>
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
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorVideo;
