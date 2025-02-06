import React, {useEffect, useRef} from 'react';
import Video from "@remote/value/Video";
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import styled, {css} from "styled-components";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";

interface VideoTemplateProps {
    video: Video;
}

function VideoTemplate(
    {
        video
    }: VideoTemplateProps
) {
    const isYoutubeUrl = video.videoUrl.startsWith('https://www.youtube.com');
    const videoRef = useRef<HTMLDivElement>(null);

    useScrollOnUpdate(videoRef, [video]);

    return (
        <S.container ref={videoRef}>
            <Column gap={12} $alignItems="center">
                <Text size={20} weight={300} customStyle={css`
                    color: var(--g-600);
                `}>VIDEO</Text>
                <Text size={16} weight={300} customStyle={css`
                    color: var(--g-600);
                `}>{video.videoTitle}</Text>
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
        background: white;
    `,
    iframe: styled.iframe`
        display: flex;
        object-fit: cover;
    `
}

export default VideoTemplate;