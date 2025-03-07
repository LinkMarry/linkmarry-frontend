import React, {ChangeEvent, ComponentPropsWithoutRef, useRef, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import FormToggle from "@designsystem/component/FormToggle";
import {css} from "styled-components";
import Button from "@designsystem/component/Button";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import View from "@designsystem/core/View";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import Music from "@remote/value/Music";
import VoidInput from "@src/component/VoidInput";
import useUpload from "@hook/useUpload";
import Loading from "@src/component/Loading";
import Spacer from "@designsystem/component/Spacer";
import {makeInteractionEffect} from "@util/css.util";

interface Props extends Binding<WeddingDto> {
}

export interface BackgroundMusicProps {
    backgroundMusics?: Music[];
}

const inputId = 'EditorInspectorBackgroundMusic-backgroundMusic';

const EditorInspectorBackgroundMusic = (
    {
        value: {backgroundMusic},
        update,
        backgroundMusics
    }: Props & BackgroundMusicProps
) => {
    const {uploadFile} = useUpload();
    const inputRef = useRef<HTMLInputElement>(null);

    const audioRef = useRef<HTMLAudioElement>(null);
    const [selectedPlayingMusicUrl, setSelectedPlayingMusicUrl] = useState<string>();

    const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || !files.length || !inputRef.current) return;

        const data = await uploadFile(files[0]);

        update(draft => {
            draft.backgroundMusic.backgroundMusic = data.url;
            draft.backgroundMusic.backgroundMusicName = data.name;
        });

        inputRef.current.value = '';
    };

    const onClickPlayMusic = async (music: Music) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.15;

        if (music.musicUrl === selectedPlayingMusicUrl) {
            setSelectedPlayingMusicUrl(undefined);
            audio.src = '';
            audio.pause();
        } else {
            setSelectedPlayingMusicUrl(music.musicUrl);
            audio.src = music.musicUrl;
            await audio.play();
        }
    }

    return (
        <EditorInspectorWrapper type={'backgroundMusic'} toggle={{
            checked: backgroundMusic.backgroundMusicActivate,
            OnChange: checked => update(draft => {
                draft.backgroundMusic.backgroundMusicActivate = checked;
            })
        }}>
            <audio ref={audioRef} loop={true} style={{display: 'none'}}/>
            <Column $alignItems={'stretch'} $gap={8}>
                {backgroundMusics ? backgroundMusics.map((music, index) => (
                    <Item
                        key={index}
                        music={music}
                        selected={music.musicUrl === backgroundMusic.backgroundMusic}
                        isPlaying={music.musicUrl === selectedPlayingMusicUrl}
                        onPlay={async () => {
                            await onClickPlayMusic(music);
                        }}
                        onClick={() => update(draft => {
                            draft.backgroundMusic.backgroundMusicName = music.name;
                            draft.backgroundMusic.backgroundMusic = music.musicUrl;
                        })}
                    />
                )) : (
                    <Loading ui={css`
                        margin: 40px 0;
                    `}/>
                )}
            </Column>
            {backgroundMusics && (
                (backgroundMusic.backgroundMusic === '' || backgroundMusics.map(i => i.musicUrl).includes(backgroundMusic.backgroundMusic)) ? (
                    <Column as={'label'} htmlFor={inputId} $alignItems={'stretch'} $ui={css`
                        cursor: pointer;
                    `}>
                        <VoidInput
                            ref={inputRef}
                            id={inputId}
                            type={'file'}
                            accept={'audio/*'}
                            onChange={handleInput}
                        />
                        <Button text={'직접 등록'} leadingIcon={IconType.AddLine} buttonType={'outlined'} ui={css`
                            pointer-events: none;
                        `}/>
                    </Column>
                ) : (
                    // todo: component 로 분리
                    <Row $gap={6} $alignItems={'stretch'} $ui={css`
                        height: 40px;
                    `}>
                        <Row $alignItems={'center'} $ui={css`
                            padding: 0 12px;
                            background: var(--g-100);
                            flex: 1;
                            min-width: 0;
                            border-radius: 8px;
                        `}>
                            <Text type={'caption1'} ui={css`
                                color: var(--g-800);
                            `}>{backgroundMusic.backgroundMusicName}</Text>
                            <Spacer/>
                        </Row>
                        <View $ui={css`
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 8px;
                            cursor: pointer;
                            border-radius: 6px;
                            ${makeInteractionEffect('strong')};
                        `} onClick={() => update(draft => {
                            draft.backgroundMusic.backgroundMusic = '';
                            draft.backgroundMusic.backgroundMusicName = '';
                        })}>
                            <Icon iconType={IconType.Trash} width={24} height={24} ui={css`
                                fill: var(--g-600);
                            `}/>
                        </View>
                    </Row>
                )
            )}
            <FormToggle checked={backgroundMusic.effect} OnChange={checked => update(draft => {
                draft.backgroundMusic.effect = checked;
            })} label={'자동 재생'}/>
            <Divider/>
            <Text type={'p3'} ui={css`
                color: var(--g-400);
            `}>브라우저 정책에 따라 자동 재생 기능이 작동하지 않을 수 있습니다.</Text>
        </EditorInspectorWrapper>
    );
};

interface ItemProps {
    music: Music;
    selected: boolean;
    isPlaying: boolean;
    onPlay: () => void;
}

const Item = ({music, selected, isPlaying, onPlay, ...props}: ItemProps & ComponentPropsWithoutRef<'div'>) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Row
            $alignItems={'center'}
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            $gap={16}
            $ui={css`
                padding: 12px;
                border-radius: 12px;

                &:hover {
                    background: var(--g-50);
                }

                ${selected && css`
                    outline: 1px solid black;
                `};
            `}
            {...props}
        >
            <View $ui={css`
                position: relative;
                width: 60px;
                height: 60px;
                border-radius: 8px;
                overflow: hidden;
                cursor: pointer;
            `} onClick={event => {
                event.stopPropagation();
                onPlay();
            }}>
                <View as={'img'} src={music.imgUrl} $ui={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `} onClick={() => {

                }}/>
                {(isHovering || isPlaying) && (
                    <Icon iconType={isPlaying ? IconType.Pause : IconType.Play} ui={css`
                        fill: white;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    `}/>
                )}
            </View>
            <Column $gap={4} $ui={css`
                flex: 1;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
            `}>
                <Text type={'p3'}>{music.name}</Text>
                {/*<Text type={'caption1'} ui={css`*/}
                {/*    color: var(--g-400);*/}
                {/*`}>tags</Text>*/}
            </Column>
        </Row>
    )
}

export default EditorInspectorBackgroundMusic;
