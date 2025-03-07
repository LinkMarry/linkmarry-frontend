import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
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
import fileApi from "@remote/api/FileApi";
import useUpload from "@hook/useUpload";
import Loading from "@src/component/Loading";

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
    const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || !files.length || !inputRef.current) return;

        const {url} = await uploadFile(files[0]);

        update(draft => {
            draft.backgroundMusic.backgroundMusic = url;
        });

        inputRef.current.value = '';
    };

    return (
        <EditorInspectorWrapper type={'backgroundMusic'} toggle={{
            checked: backgroundMusic.backgroundMusicActivate,
            OnChange: checked => update(draft => {
                draft.backgroundMusic.backgroundMusicActivate = checked;
            })
        }}>
            <Column $alignItems={'stretch'} $gap={8}>
                {backgroundMusics ? backgroundMusics.map((music, index) => (
                    <Item key={index} music={music} isPlaying={false}/>
                )) : (
                    <Loading ui={css`
                        margin: 40px 0;
                    `}/>
                )}
            </Column>
            {backgroundMusics && (
                (backgroundMusic.backgroundMusic === '' || backgroundMusics.map(i => i.url).includes(backgroundMusic.backgroundMusic)) ? (
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
                    <Row $alignItems={'center'} $gap={10} $ui={css`
                        height: 44px;
                    `}>

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
    isPlaying: boolean;
}

const Item = ({music, isPlaying}: ItemProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Row $alignItems={'center'} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}
             $gap={16} $ui={css`
            padding: 12px;
            border-radius: 12px;

            &:hover {
                background: var(--g-50);
            }
        `}>
            <View $ui={css`
                position: relative;
                width: 60px;
                height: 60px;
                border-radius: 8px;
                overflow: hidden;
                cursor: pointer;
            `} onClick={() => {

            }}>
                <View as={'img'} $ui={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background: gray; // dummy
                `} onClick={() => {

                }}></View>
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
                <Text type={'caption1'} ui={css`
                    color: var(--g-400);
                `}>tags</Text>
            </Column>
        </Row>
    )
}

export default EditorInspectorBackgroundMusic;
