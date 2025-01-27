import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import Checkbox from "@designsystem/component/checkbox";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import Text from "@designsystem/component/text";
import BaseMusic from "@remote/value/BaseMusic";
import fileApi from "@remote/api/FileApi";
import Music, {getMusicName} from "@remote/value/Music";
import LoadingOverlay from "@src/component/LoadingOverlay";
import VoidInput from "@src/component/VoidInput";
import Radio from "@designsystem/component/radio";

type SelectMode = 'select' | 'direct';
const selectModeRecord: Record<SelectMode, string> = {
    select: '선택',
    direct: '직접 등록'
}
const selectModes: SelectMode[] = ['select', 'direct'];
const selectModesTitle = selectModes.map(mode => selectModeRecord[mode]);

interface BaseMusicOptionProps {
    baseMusic: BaseMusic;
    onChange: (baseMusic: BaseMusic) => void;
}

function BaseMusicOption(
    {
        baseMusic,
        onChange
    }: BaseMusicOptionProps
) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [selectedPlayingMusicUrl, setSelectedPlayingMusicUrl] = useState<string>();
    const [selectedSelectMode, setSelectedSelectMode] = useState(0);
    const [musics, setMusics] = useState<Music[]>();
    const imageFieldRef = useRef<HTMLInputElement>(null);
    const [isFetching, setIsFetching] = useState(false);
    const currentSelectMode = baseMusic.musicUrl === '' ? 0 : musics?.map(i => i.url).includes(baseMusic.musicUrl) ? 0 : 1;

    const uploadAudio = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        const file = files[0];
        if (!file) return;

        setIsFetching(true);
        const {data} = await fileApi.upload(file);

        onChange({...baseMusic, musicUrl: data.url});
        setIsFetching(false);
    };

    useEffect(() => {
        (async () => {
            const {data} = await fileApi.getMusics();
            setMusics(data);
        })();
    }, []);

    const onClickPlayMusic = async (music: Music) => {
        const audio = audioRef.current;
        if (!audio) return;

        if (!selectedPlayingMusicUrl) {
            setSelectedPlayingMusicUrl(music.url);
            audio.src = music.url;
            await audio.play();
            return;
        }

        if (music.url === selectedPlayingMusicUrl) {
            setSelectedPlayingMusicUrl(undefined);
            audio.src = '';
            audio.pause();
        } else {
            setSelectedPlayingMusicUrl(music.url);
            audio.src = music.url;
            await audio.play();
        }
    }

    const onClickPlayCustomMusic = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        setSelectedPlayingMusicUrl(baseMusic.musicUrl);
        audio.src = baseMusic.musicUrl;
        await audio.play();
    }

    const selectModeContent = () => {
        switch (selectModes[selectedSelectMode]) {
            case 'select':
                return (
                    <Column gap={16}>
                        {musics && (
                            musics.map((music, index) => (
                                <Row key={index} gap={12} $alignItems={'center'}>
                                    <Radio
                                        selected={music.url === baseMusic.musicUrl}
                                        label={getMusicName(music)}
                                        onChange={() => onChange({...baseMusic, musicUrl: music.url})}
                                    />
                                    <Row $alignItems={'center'} $justifyContent={'center'} padding={'4px'}>
                                        <Icon
                                            type={IconType.LoudSpeaker} size={20}
                                            tint={(music.url === selectedPlayingMusicUrl) ? colors.p800 : colors.g400}
                                            style={{cursor: 'pointer'}}
                                            onClick={async () => await onClickPlayMusic(music)}
                                        />
                                    </Row>
                                </Row>
                            ))
                        )}
                    </Column>
                );
            case 'direct':
                return (
                    <S.addAudioFileContainer
                        htmlFor={'choose-base-music-audio'}
                        style={{
                            cursor: currentSelectMode === 0 ? 'pointer' : undefined
                        }}
                    >
                        {currentSelectMode === 0 ? (
                            <>
                                <Icon type={IconType.AddLine} size={24} tint={colors.g600}/>
                                <Column gap={4} $alignItems={'center'}>
                                    <Text type={'caption1'} color={colors.g400}>음원 파일 추가</Text>
                                    <Text type={'caption1'} color={colors.g400}>최대 20MB MP3 파일만 가능</Text>
                                </Column>
                                <VoidInput
                                    id={'choose-base-music-audio'}
                                    ref={imageFieldRef}
                                    onChange={uploadAudio}
                                    type={'file'}
                                    accept={'audio/*'}
                                />
                            </>
                        ) : (
                            <Row gap={12} $alignItems={'center'} padding={'8px 16px'} background={colors.white} style={{
                                borderRadius: 8
                            }}>
                                <Text type={'p5'} color={colors.g500}>배경음악 선택됨</Text>
                                <Icon
                                    type={IconType.LoudSpeaker} size={20}
                                    tint={(baseMusic.musicUrl === selectedPlayingMusicUrl) ? colors.p800 : colors.g400}
                                    style={{cursor: 'pointer'}}
                                    onClick={onClickPlayCustomMusic}
                                />
                                <Icon
                                    type={IconType.CrossLine} size={20}
                                    tint={colors.g600}
                                    style={{cursor: 'pointer'}}
                                    onClick={event => {
                                        event.preventDefault();
                                        onChange({...baseMusic, musicUrl: ''});
                                        audioRef.current?.pause();
                                        setSelectedPlayingMusicUrl(undefined);
                                    }}
                                />
                            </Row>
                        )}
                        {isFetching && <LoadingOverlay/>}
                    </S.addAudioFileContainer>
                );
        }
    };

    return (
        <S.container>
            <audio ref={audioRef}/>
            <Column gap={32} flex={1} $alignItems={'stretch'}>
                <Column gap={20}>
                    <OptionSegmentedButton
                        style={{width: 264}}
                        selectedIndex={selectedSelectMode}
                        items={selectModesTitle}
                        onClickItem={mode => {
                            setSelectedSelectMode(mode);
                        }}
                    />
                    {selectModeContent()}
                </Column>
                <HorizontalDivider/>
                <Row gap={12} $alignItems={'center'}>
                    <OptionLabel label={'효과'}/>
                    <Checkbox
                        checked={baseMusic.effect}
                        onChange={checked => onChange({...baseMusic, effect: checked})}
                        label={'자동 재생'}
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
    `,
    addAudioFileContainer: styled.label`
        display: flex;
        flex-direction: column;
        align-self: stretch;
        gap: 20px;
        align-items: center;
        position: relative;
        background: ${colors.g100};
        border-radius: 8px;
        padding: 30px 0;
    `,
}

export default BaseMusicOption;