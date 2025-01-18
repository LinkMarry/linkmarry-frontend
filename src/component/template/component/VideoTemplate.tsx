import React, {useRef} from 'react';
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
    const isYoutubeUrl = video.videoUrl.startsWith('https://www.youtube.com');
    return (
        <S.container>
            <Column gap={12} $alignItems="center">
                <Text size={20} weight={300} color={colors.g600}>VIDEO</Text>
                <Text size={16} weight={300} color={colors.g600}>{video.videoTitle}</Text>
            </Column>
            {isYoutubeUrl ? (
                <S.iframe
                    height={250} title={video.videoTitle}
                    src={video.videoUrl}
                ></S.iframe>
            ) : (
                <video src={video.videoUrl} controls={true}></video>
            )}
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
    `,
    iframe: styled.iframe`
        display: flex;
        object-fit: cover;
    `
}

export default VideoTemplate;