import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import FileUploadBox from "@src/component/FileUploadBox";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import {getKoreanByVideoFileType, videoFileTypeList} from "@remote/value/Video";

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
            checked: video.videoActive,
            OnChange: checked => update(draft => {
                draft.video.videoActive = checked;
            })
        }}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={video.videoTitle} onChange={event => update(draft => {
                    draft.video.videoTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>동영상 첨부</Text>
                <SegmentedButton
                    items={videoFileTypeList.map(i => getKoreanByVideoFileType(i))}
                    selectedTab={videoFileTypeList.indexOf(video.videoFileType)}
                    onChange={tab => update(draft => {
                        draft.video.videoFileType = videoFileTypeList[tab];
                    })}
                />
            </Column>
            {video.videoFileType ? (
                <Column $alignItems={'stretch'} $gap={12}>
                    <Text type={'p3'} bold={true}>파일로 첨부</Text>
                    <FileUploadBox
                        id={'EditorInspectorVideo-videoUrl'}
                        value={video.videoFileUrl}
                        label={video.videoName}
                        onChange={newValue => update(draft => {
                            draft.video.videoFileUrl = newValue.url;
                            draft.video.videoName = newValue.name;
                        })}
                    />
                </Column>
            ) : (
                <Column $alignItems={'stretch'} $gap={12}>
                    <Text type={'p3'} bold={true}>URL로 첨부</Text>
                    <Input hasLabel={false} value={video.videoUrl} onChange={event => update(draft => {
                        draft.video.videoUrl = event.target.value;
                    })}/>
                </Column>
            )}
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorVideo;
