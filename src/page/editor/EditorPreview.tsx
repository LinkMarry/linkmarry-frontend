import React, {useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Spacer from "@designsystem/component/Spacer";
import Text from "@designsystem/component/Text";
import Toggle from "@designsystem/component/Toggle";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {makeInteractionEffect} from "@util/css.util";

const EditorPreview = () => {
    return (
        <Column flex={1} $customStyle={css`
            background: var(--g-100);
            position: relative;
        `}>
            <PreviewSetting/>
        </Column>
    );
};

const PreviewSetting = () => {
    const [openSetting, setOpenSetting] = useState(false);
    return (
        <Column gap={8} $alignItems={'stretch'} $customStyle={css`
            width: 220px;
            padding: 8px;
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
            <Row $alignItems={'center'} $customStyle={css`
                padding: 8px;
                border-radius: 6px;
                ${makeInteractionEffect('strong')};
            `} onClick={() => {
                setOpenSetting(i => !i);
            }}>
                <Text type={'p3'} bold={true} customStyle={css`
                    color: var(--g-800);
                `}>미리보기 설정</Text>
                <Spacer/>
                <Icon iconType={IconType.ExpandArrow} width={18} height={18} customStyle={css`
                    fill: var(--g-400);
                    transition: 0.2s rotate ease-out;
                    ${openSetting ? css`
                        rotate: 90deg;
                    ` : css`
                        rotate: -90deg;
                    `};
                `}/>
            </Row>
            <Row $alignItems={'center'} $customStyle={css`
                padding: 4px 8px;
            `}>
                <Text type={'p3'} customStyle={css`
                    color: var(--g-600);
                `}>자동포커스</Text>
                <Spacer/>
                <Toggle/>
            </Row>
        </Column>
    );
};

export default EditorPreview;
