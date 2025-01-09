import React from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Button from "@designsystem/component/button";
import {IconType} from "@designsystem/foundation/icon";
import Video from "@remote/value/Video";

interface VideoOptionProps {
    video: Video;
    onChange: (video: Video) => void;
}

function VideoOption(
    {
        video,
        onChange
    }: VideoOptionProps
) {
    return (
        <S.container>
            <Column gap={16}>
                <Row gap={12}>
                    <OptionLabel label={'제목'}/>
                    <OptionTextField
                        fieldProps={{
                            maxLength: 20,
                            value: video.videoTitle,
                            onChange: event => onChange({...video, videoTitle: event.target.value})
                        }}
                        placeholder={'최대 20자'}
                        width={264}
                    />
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'URL'}/>
                    <OptionTextField fieldProps={{
                        value: video.videoUrl,
                        onChange: event => onChange({...video, videoUrl: event.target.value})
                    }} placeholder={'유튜브 링크'} width={264}/>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'파일'}/>
                    {/* TODO */}
                    <Button text={'파일 업로드'} leadingIcon={IconType.AddLine} role={'assistive'} style={{width: 264}}/>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `
}

export default VideoOption;