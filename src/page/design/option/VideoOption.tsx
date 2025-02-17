import React, {ChangeEvent, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import OptionLabel from "@page/design/component/OptionLabel";
import OptionTextField from "@page/design/component/OptionTextField";
import Button from "@designsystem/component/Button";
import {IconType} from "@designsystem/foundation/icon";
import Video from "@remote/value/Video";
import VoidInput from "@src/component/VoidInput";
import fileApi from "@remote/api/FileApi";

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
    const [isFetching, setIsFetching] = useState(false);
    const videoFieldRef = useRef<HTMLInputElement>(null);

    const onChangeVideoUrl = (value: string) => {
        if (value === '') {
            onChange({...video, videoUrl: value});
            return;
        }

        const urlPattern = /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = value.match(urlPattern);

        if (match && match[1]) {
            const videoID = match[1];
            onChange({...video, videoUrl: `https://www.youtube.com/embed/${videoID}`});
        }
    };

    const uploadVideo = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        const file = files[0];
        if (!file) return;

        setIsFetching(true);
        const {data} = await fileApi.upload(file);

        onChange({...video, videoUrl: data.url});
        setIsFetching(false);
        if (videoFieldRef.current) {
            videoFieldRef.current.value = '';
        }
    };

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
                        onChange: event => onChangeVideoUrl(event.target.value)
                    }} placeholder={'유튜브 링크'} width={264}/>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'파일'}/>
                    <label htmlFor={'choose-video'}>
                        <Button
                            text={'파일 업로드'}
                            leadingIcon={IconType.AddLine}
                            buttonType={'outlined'}
                            customStyle={css`
                                width: 264px;
                                pointer-events: none;
                            `}
                        />
                    </label>
                    <VoidInput
                        id={'choose-video'}
                        ref={videoFieldRef}
                        onChange={uploadVideo}
                        type={'file'}
                        accept={'video/*'}
                    />
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