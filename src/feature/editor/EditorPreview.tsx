import React, {useState} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Spacer from "@src/userinterface/component/Spacer";
import Text from "@src/userinterface/component/Text";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import {hideScrollBar, makeInteractionEffect} from "@src/userinterface/css.util";
import WeddingComponent from "@src/userinterface/specific/wedding/WeddingComponent";
import Wedding from "@src/infrastructure/network/value/Wedding";
import useAutoFocus from "@src/hook/useAutoFocus";
import Toggle from "@src/userinterface/component/Toggle";

interface Props {
    wedding: Wedding;
}

const EditorPreview = ({wedding}: Props) => {
    return (
        <Column $flex={1} $alignItems={'center'} $justifyContent={'center'} $ui={css`
            background: var(--g-100);
            position: relative;
        `}>
            <Column $alignItems={'stretch'} $ui={css`
                max-height: 733px;
                overflow-y: scroll;
                overflow-x: hidden;
                width: 380px;
                border-radius: 36px;
                box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
                ${hideScrollBar};
            `}>
                <WeddingComponent wedding={wedding} isPreview={true}/>
            </Column>
            <PreviewSetting/>
        </Column>
    );
};

const PreviewSetting = () => {
    const [openSetting, setOpenSetting] = useState(false);
    const {autoFocus, setAutoFocus} = useAutoFocus();

    return (
        <Column $gap={4} $alignItems={'stretch'} $ui={css`
            width: 220px;
            padding: 10px;
            background: white;
            border-radius: 12px;
            position: absolute;
            left: 24px;
            bottom: 24px;
            ${openSetting ? css`
                max-height: 104px; // hard code
            ` : css`
                max-height: 56px;
            `};
            transition: 0.2s max-height ease-out;
            overflow: hidden;
        `}>
            <Row $alignItems={'center'} $ui={css`
                padding: 6px;
                border-radius: 6px;
                ${makeInteractionEffect('strong')};
            `} onClick={() => {
                setOpenSetting(i => !i);
            }}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-800);
                `}>미리보기 설정</Text>
                <Spacer/>
                <Icon iconType={IconType.ExpandArrow} width={18} height={18} ui={css`
                    fill: var(--g-400);
                    transition: 0.2s rotate ease-out;
                    ${openSetting ? css`
                        rotate: 90deg;
                    ` : css`
                        rotate: -90deg;
                    `};
                `}/>
            </Row>
            <Row $alignItems={'center'} $ui={css`
                padding: 6px;
            `}>
                <Text type={'p3'} ui={css`
                    color: var(--g-600);
                `}>자동포커스</Text>
                <Spacer/>
                <Toggle checked={autoFocus} OnChange={checked => setAutoFocus(checked)}/>
            </Row>
        </Column>
    );
};

export default EditorPreview;
