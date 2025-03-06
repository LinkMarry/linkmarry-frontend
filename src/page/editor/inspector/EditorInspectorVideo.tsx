import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorVideo = (
    {
        value: {video},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'video'} toggle={{
            checked: false,
            OnChange: () => {
            }
        }}>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={video.videoTitle} onChange={event => update(draft => {
                    draft.video.videoTitle = event.target.value;
                })}/>
            </Column>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>URL로 첨부</Text>
                <Input hasLabel={false} value={video.videoUrl} onChange={event => update(draft => {
                    draft.video.videoUrl = event.target.value;
                })}/>
            </Column>
            <Column alignment={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>파일로 첨부</Text>
                <PhotoUploadBox id={'EditorInspectorVideo-videoUrl'} value={[video.videoUrl]} onChange={images => update(draft => {
                    draft.video.videoUrl = images[0];
                })}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorVideo;
