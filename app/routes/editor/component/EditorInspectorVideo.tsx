import Text from "~/components/core/Text.tsx";
import Input from "~/components/core/Input.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import Divider from "~/components/core/Divider.tsx";
import {css} from "@linaria/core";
import View from "~/components/core/View.tsx";
import type Wedding from "~/api/value/Wedding.ts";


const EditorInspectorVideo = (
    {
        value: {video},
        update
    }: Binding<Wedding>
) => {
    return (
        <EditorInspectorWrapper type={'video'} toggle={{
            checked: video.videoActivate,
            OnChange: checked => update(draft => {
                draft.video.videoActivate = checked;
            })
        }}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={video.videoTitle} onChange={event => update(draft => {
                    draft.video.videoTitle = event.target.value;
                })}/>
            </View>
            {/*<Column $alignItems={'stretch'} $gap={12}>*/}
            {/*    <Text type={'p3'} bold={true}>동영상 첨부</Text>*/}
            {/*    <SegmentedButton*/}
            {/*        items={videoFileTypeList.map(i => getKoreanByVideoFileType(i))}*/}
            {/*        selectedTab={videoFileTypeList.indexOf(video.videoFileType)}*/}
            {/*        onChange={tab => update(draft => {*/}
            {/*            draft.video.videoFileType = videoFileTypeList[tab];*/}
            {/*        })}*/}
            {/*    />*/}
            {/*</Column>*/}
            {/*{video.videoFileType ? (*/}
            {/*    <Column $alignItems={'stretch'} $gap={12}>*/}
            {/*        <Text type={'p3'} bold={true}>파일로 첨부</Text>*/}
            {/*        <FileUploadBox*/}
            {/*            id={'EditorInspectorVideo-videoUrl'}*/}
            {/*            value={video.videoFileUrl}*/}
            {/*            label={video.videoName}*/}
            {/*            onChange={newValue => update(draft => {*/}
            {/*                draft.video.videoFileUrl = newValue.url;*/}
            {/*                draft.video.videoName = newValue.name;*/}
            {/*            })}*/}
            {/*        />*/}
            {/*    </Column>*/}
            {/*) : (*/}
                <View ui={css`
                    gap: 12px;
                `}>
                    <Text type={'p3'} bold={true}>URL로 첨부</Text>
                    <Input hasLabel={false} value={video.videoUrl} onChange={event => update(draft => {
                        draft.video.videoUrl = event.target.value;
                    })}/>
                </View>
            {/*)}*/}
            <Divider/>
            <Text type={'p3'} ui={css`
                color: var(--g-400);
            `}>
                <View ui={css`
                    gap: 12px;
                `}>
                    <span>유튜브에 업로드한 영상의 URL을 입력해 주세요.</span>
                    <span>※ '퍼가기 허용' 설정이 필요합니다. (설정 방법: 연령 제한(고급) → 자세히 보기 → 라이선스)</span>
                    <span>공개 범위는 '공개' 또는 '일부 공개'로 설정해 주세요.</span>
                </View>
            </Text>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorVideo;
