import React, {ComponentPropsWithoutRef} from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {hideScrollBar, makeInteractionEffect} from "@util/css.util";
import EditorNavType, {editorNavList, editorNavTypeMap} from "@page/editor/EditorNavType";
import Text from "@designsystem/component/Text";

interface Props {
    currentNavType: EditorNavType;
    onChangeNavType: (type: EditorNavType) => void;
}

const EditorNavigationBar = ({currentNavType, onChangeNavType}: Props) => {
    return (
        <Column $customStyle={css`
            border-right: 1px solid var(--g-100);
            width: 72px;
        `}>
            <Column flex={1} gap={10} $customStyle={css`
                overflow-y: scroll;
                padding: 8px;
                ${hideScrollBar};
            `}>
                {editorNavList.map((type, index) => (
                    <Item key={index} type={type} selected={currentNavType === type} onClick={() => {
                        onChangeNavType(type);
                    }}/>
                ))}
            </Column>
            <Column $alignItems={'center'} $justifyContent={'center'} $customStyle={css`
                width: 72px;
                height: 72px;
            `}>
                <Icon iconType={IconType.DoubleArrowLeft} width={24} height={24} customStyle={css`
                    padding: 12px;
                    fill: var(--g-500);
                    border-radius: 12px;
                    ${makeInteractionEffect('strong')};
                `} onClick={() => {
                }}/>
            </Column>
        </Column>
    );
};

const Item = ({type, selected, ...props}: {
    type: EditorNavType;
    selected: boolean;
} & ComponentPropsWithoutRef<'div'>) => {
    const {icon, text} = editorNavTypeMap[type];
    return (
        <Column gap={2} $alignItems={'center'} $justifyContent={'center'} $customStyle={css`
            width: 56px;
            min-height: 56px;
            border-radius: 12px;
            ${makeInteractionEffect('strong')};
        `} {...props}>
            <Icon iconType={icon} width={24} height={24} customStyle={css`
                ${selected ? css`
                    fill: var(--g-700);
                ` : css`
                    fill: var(--g-400);
                `};
            `}/>
            <Text type={'caption2'} customStyle={css`
                ${selected ? css`
                    color: var(--g-700);
                ` : css`
                    color: var(--g-400);
                `};
            `}>{text}</Text>
        </Column>
    );
};

export default EditorNavigationBar;
