import {useRef, type RefObject, useState, useLayoutEffect} from 'react';
import type Video from "~/infrastructure/network/value/Video";
import Text from "~/userinterface/component/Text";
import {css} from "@linaria/core";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate";
import View from "~/userinterface/core/View.tsx";
import FadeIn from "~/userinterface/specific/fadein/FadeIn";
import type {WeddingMode} from "~/userinterface/specific/wedding/WeddingMode.ts";

interface VideoTemplateProps {
    video: Video;
    rootRef?: RefObject<HTMLDivElement | null>;
    mode: WeddingMode;
}

function VideoTemplate(
    {
        video,
        rootRef,
        mode
    }: VideoTemplateProps
) {
    const isYoutubeUrl = video.videoUrl.startsWith('https://www.youtube.com');
    const videoRef = useRef<HTMLDivElement>(null);
    const [videoWidth, setVideoWidth] = useState<number>();

    useScrollOnUpdate(videoRef, [video], mode === 'preview');

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
            <View ref={videoRef} ui={css`
                gap: 40px;
                padding: 92px 0;
                background: white;
            `}>
                <View ui={css`
                    gap: 12px;
                `}>
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
                </View>
                {isYoutubeUrl ? (
                    <View
                        as={'iframe'}
                        height={videoWidth ? videoWidth / 16 * 9 : 250}
                        title={video.videoTitle}
                        src={clearedVideoUrl}
                        ui={css`
                            display: flex;
                            object-fit: cover;
                        `}
                    ></View>
                ) : clearedVideoUrl ? (
                    <video src={clearedVideoUrl} controls={true}></video>
                ) : null}
            </View>
        </FadeIn>
    );
}

export default VideoTemplate;
