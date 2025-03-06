import React, {useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import FormToggle from "@designsystem/component/FormToggle";
import {css} from "styled-components";
import Button from "@designsystem/component/Button";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import CustomStyle from "@designsystem/core/CustomStyle";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import Music from "@remote/value/Music";

interface Props extends Binding<WeddingDto> {
}

export interface BackgroundMusicProps {
    backgroundMusics?: Music[];
}

const EditorInspectorBackgroundMusic = ({value, update, backgroundMusics}: Props & BackgroundMusicProps) => {
    return (
        <EditorInspectorWrapper type={'backgroundMusic'} toggle={{
            checked: value.backgroundMusic.effect,
            OnChange: checked => {
                update(draft => {
                    draft.backgroundMusic.effect = checked;
                })
            }
        }}>
            <Column $alignItems={'stretch'} gap={8}>
                {backgroundMusics ? backgroundMusics.map((music, index) => (
                    <Item key={index} music={music} isPlaying={false}/>
                )) : null}
                {/*tood shimmer*/}
            </Column>
            <Button text={'직접 등록'} leadingIcon={IconType.AddLine} buttonType={'outlined'}/>
            <FormToggle checked={value.backgroundMusic.effect} OnChange={checked => {
            }} label={'자동 재생'}/>
            <Divider/>
            <Text type={'p3'} customStyle={css`
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
             gap={16} css={css`
            padding: 12px;
            border-radius: 12px;

            &:hover {
                background: var(--g-50);
            }
        `}>
            <CustomStyle css={css`
                position: relative;
                width: 60px;
                height: 60px;
                border-radius: 8px;
                overflow: hidden;
                cursor: pointer;
            `} onClick={() => {

            }}>
                <CustomStyle as={'img'} css={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background: gray; // dummy
                `} onClick={() => {

                }}></CustomStyle>
                {(isHovering || isPlaying) && (
                    <Icon iconType={isPlaying ? IconType.Pause : IconType.Play} customStyle={css`
                        fill: white;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    `}/>
                )}
            </CustomStyle>
            <Column gap={4} css={css`
                flex: 1;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
            `}>
                <Text type={'p3'}>{music.name}</Text>
                <Text type={'caption1'} customStyle={css`
                    color: var(--g-400);
                `}>tags</Text>
            </Column>
        </Row>
    )
}

export default EditorInspectorBackgroundMusic;
