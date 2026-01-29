import {type ChangeEvent, type ComponentPropsWithoutRef, useRef, useState} from 'react';
import Text from "~/userinterface/component/Text.tsx";
import Divider from "~/userinterface/component/Divider.tsx";
import FormToggle from "~/userinterface/component/FormToggle.tsx";
import {css, cx} from "@linaria/core";
import Button from "~/userinterface/component/Button.tsx";
import Icon from "~/userinterface/foundation/Icon.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import View from "~/userinterface/core/View.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import type Music from "~/infrastructure/network/value/Music.ts";
import VoidInput from "~/userinterface/specific/VoidInput.ts";
import useUpload from "~/hook/useUpload.ts";
import Loading from "~/userinterface/specific/Loading.tsx";
import Spacer from "~/userinterface/component/Spacer.tsx";
import {interactionEffectStyles} from "~/userinterface/css.util.ts";


export interface BackgroundMusicProps extends Binding<WeddingDto> {
    backgroundMusics?: Music[];
}

const inputId = 'EditorInspectorBackgroundMusic-backgroundMusic';

const EditorInspectorBackgroundMusic = (
    {
        value: {url, backgroundMusic},
        update,
        backgroundMusics
    }: BackgroundMusicProps
) => {
    const {uploadFile} = useUpload();
    const inputRef = useRef<HTMLInputElement>(null);

    const audioRef = useRef<HTMLAudioElement>(null);
    const [selectedPlayingMusicUrl, setSelectedPlayingMusicUrl] = useState<string | undefined>(backgroundMusic.backgroundMusicUrl);

    const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || !files.length || !inputRef.current) return;

        const data = await uploadFile(files[0], url);

        update(draft => {
            draft.backgroundMusic.backgroundMusicUrl = data.url;
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
            <View ui={css`
                gap: 8px;
            `}>
                {backgroundMusics ? backgroundMusics.map((music, index) => (
                    <Item
                        key={index}
                        music={music}
                        selected={music.musicUrl === backgroundMusic.backgroundMusicUrl}
                        isPlaying={music.musicUrl === selectedPlayingMusicUrl}
                        onPlay={async () => {
                            await onClickPlayMusic(music);
                        }}
                        onClick={() => update(draft => {
                            draft.backgroundMusic.backgroundMusicName = music.name;
                            draft.backgroundMusic.backgroundMusicUrl = music.musicUrl;
                        })}
                    />
                )) : (
                    <Loading ui={css`
                        margin: 40px 0;
                    `}/>
                )}
            </View>
            {backgroundMusics && (
                (backgroundMusic.backgroundMusicUrl === '' || backgroundMusics.map(i => i.musicUrl).includes(backgroundMusic.backgroundMusicUrl)) ? (
                    <View as={'label'} htmlFor={inputId} ui={css`
                        cursor: pointer;
                    `}>
                        <VoidInput
                            ref={inputRef}
                            id={inputId}
                            type={'file'}
                            accept={'audio/*'}
                            onChange={handleInput}
                        />
                        <Button text={'직접 등록'} leadingIcon={'AddLine'} buttonType={'outlined'} ui={css`
                            pointer-events: none;
                        `}/>
                    </View>
                ) : (
                    // todo: specific 로 분리
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 6px;
                        height: 40px;
                    `}>
                        <View ui={css`
                            align-items: center;
                            flex-direction: row !important;
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
                        </View>
                        <View ui={cx(
                            css`
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                padding: 8px;
                                cursor: pointer;
                                border-radius: 6px;
                            `,
                            interactionEffectStyles.strong
                        )} onClick={() => update(draft => {
                            draft.backgroundMusic.backgroundMusicUrl = '';
                            draft.backgroundMusic.backgroundMusicName = '';
                        })}>
                            <Icon iconType={'Trash'} width={24} height={24} ui={css`
                                fill: var(--g-600);
                            `}/>
                        </View>
                    </View>
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
        <View
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            ui={cx(
                css`
                    flex-direction: row !important;
                    align-items: center;
                    gap: 16px;
                    padding: 12px;
                    border-radius: 12px;

                    &:hover {
                        background: var(--g-50);
                    }
                `,
                selected ? css`
                    outline: 1px solid black;
                ` : undefined
            )}
            {...props}
        >
            <View ui={css`
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
                <View as={'img'} src={music.imgUrl} ui={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `}/>
                {(isHovering || isPlaying) && (
                    <Icon iconType={isPlaying ? 'Pause' : 'Play'} ui={css`
                        fill: white;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    `}/>
                )}
            </View>
            <Text type={'p3'} ui={css`
                flex: 1;
                gap: 4px;
                align-items: flex-start;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
            `}>{music.name}</Text>
        </View>
    )
}

export default EditorInspectorBackgroundMusic;
