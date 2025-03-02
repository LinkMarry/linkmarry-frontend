import React, {useEffect, useRef} from 'react';
import Video from "@remote/value/Video";
import {Column} from "@designsystem/component/core/FlexLayout";
import Text from "@designsystem/component/Text";
import styled, {css} from "styled-components";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import CustomStyle from "@designsystem/component/core/CustomStyle";
import FadeIn from "@designsystem/component/fadein/FadeIn";

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
        <FadeIn>
            <Column gap={40} $alignItems={'stretch'} ref={videoRef} $customStyle={css`
                padding: 92px 0;
                background: white;
            `}>
                <Column gap={12} $alignItems="center">
                    <FadeIn>
                        <Text size={20} weight={300} customStyle={css`
                            color: var(--g-600);
                        `}>VIDEO</Text>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <Text size={16} weight={300} customStyle={css`
                            color: var(--g-600);
                        `}>{video.videoTitle}</Text>
                    </FadeIn>
                </Column>
                {isYoutubeUrl ? (
                    <CustomStyle
                        as={'iframe'}
                        height={250} title={video.videoTitle}
                        src={video.videoUrl}
                        $customStyle={css`
                            display: flex;
                            object-fit: cover;
                        `}
                    ></CustomStyle>
                ) : (
                    <video src={video.videoUrl} controls={true}></video>
                )}
            </Column>
        </FadeIn>
    );
}

export default VideoTemplate;
