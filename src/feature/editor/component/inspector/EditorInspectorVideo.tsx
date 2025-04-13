import React from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Input from "@src/userinterface/component/Input";
import EditorInspectorWrapper from "@src/feature/editor/component/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import FileUploadBox from "@src/userinterface/specific/FileUploadBox";
import SegmentedButton from "@src/userinterface/component/SegmentedButton";
import {getKoreanByVideoFileType, videoFileTypeList} from "@src/infrastructure/network/value/Video";
import Divider from "@src/userinterface/component/Divider";
import {css} from "styled-components";

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
            checked: video.videoActivate,
            OnChange: checked => update(draft => {
                draft.video.videoActivate = checked;
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
            <Divider/>
            <Text type={'p3'} ui={css`
                color: var(--g-400);
            `}>
                <Column $alignItems={'stretch'} $gap={12}>
                    <span>유튜브에 업로드한 영상의 URL을 입력해 주세요.</span>
                    <span>※ '퍼가기 허용' 설정이 필요합니다. (설정 방법: 연령 제한(고급) → 자세히 보기 → 라이선스)</span>
                    <span>공개 범위는 '공개' 또는 '일부 공개'로 설정해 주세요.</span>
                </Column>
            </Text>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorVideo;
