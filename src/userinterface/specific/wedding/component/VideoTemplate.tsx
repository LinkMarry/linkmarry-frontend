import {useRef, type RefObject, useState, useLayoutEffect} from 'react';
import type Video from "@src/infrastructure/network/value/Video";
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import useScrollOnUpdate from "@src/hook/useScrollOnUpdate";
import View from "@src/userinterface/core/View";
import FadeIn from "@src/userinterface/specific/fadein/FadeIn";

interface VideoTemplateProps {
    video: Video;
    rootRef?: RefObject<HTMLDivElement | null>;
}

function VideoTemplate(
    {
        video,
        rootRef
    }: VideoTemplateProps
) {
    const isYoutubeUrl = video.videoUrl.startsWith('https://www.youtube.com');
    const videoRef = useRef<HTMLDivElement>(null);
    const [videoWidth, setVideoWidth] = useState<number>();

    useScrollOnUpdate(videoRef, [video]);

    useLayoutEffect(() => {
        if (!rootRef?.current) {
            return;
        }

        const observer = new ResizeObserver((entries) => {
            // entries 배열에는 관찰 중인 모든 요소가 포함됩니다.
            for (const entry of entries) {
                // contentRect를 사용하여 크기를 얻습니다.
                setVideoWidth(entry.contentRect.width);
            }
        });

        observer.observe(rootRef.current);

        return () => {
            observer.disconnect();
        };
    }, [rootRef]);

    if (!video.videoActivate) {
        return null;
    }

    const videoUrl = video.videoFileType ? video.videoFileUrl : video.videoUrl;

    const youtubeUrlPattern = /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(youtubeUrlPattern);

    const clearedVideoUrl = (() => {
        if (match && match[1]) {
            const videoID = match[1];
            return `https://www.youtube.com/embed/${videoID}`
        } else {
            return videoUrl;
        }
    })()

    return (
        <FadeIn>
            <Column $gap={40} $alignItems={'stretch'} ref={videoRef} $ui={css`
                padding: 92px 0;
                background: white;
            `}>
                <Column $gap={12} $alignItems={'stretch'}>
                    <FadeIn>
                        <Text size={20} weight={300} ui={css`
                            color: var(--g-600);
                            text-align: center;
                        `}>VIDEO</Text>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <Text size={16} weight={300} ui={css`
                            color: var(--g-600);
                            text-align: center;
                            word-break: break-all;
                            padding: 0 16px;
                        `}>{video.videoTitle}</Text>
                    </FadeIn>
                </Column>
                {isYoutubeUrl ? (
                    <View
                        as={'iframe'}
                        height={videoWidth ? videoWidth / 16 * 9 : 250}
                        title={video.videoTitle}
                        src={clearedVideoUrl}
                        $ui={css`
                            display: flex;
                            object-fit: cover;
                        `}
                    ></View>
                ) : (
                    <video src={clearedVideoUrl} controls={true}></video>
                )}
            </Column>
        </FadeIn>
    );
}

export default VideoTemplate;
