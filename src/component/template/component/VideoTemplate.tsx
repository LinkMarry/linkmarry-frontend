import React from 'react';
import Video from "@remote/value/Video";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import styled from "styled-components";

interface VideoTemplateProps {
    video: Video;
}

function VideoTemplate(
    {
        video
    }: VideoTemplateProps
) {
    return (
        <S.container>
            <Column gap={12} $alignItems="center">
                <Text size={20} weight={300} color={colors.g600}>VIDEO</Text>
                <Text size={16} weight={300} color={colors.g600}>{video.videoTitle}</Text>
            </Column>
            <iframe src={video.videoUrl}></iframe>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        padding: 92px 0;
        gap: 40px;
        align-items: stretch;
        background: ${colors.white};
    `
}

export default VideoTemplate;