import React, {ComponentPropsWithoutRef, ReactNode} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {hideScrollBar, makeInteractionEffect} from "@util/css.util";
import EditorNavType, {editorNavList, editorNavTypeMap} from "@page/editor/EditorNavType";
import Text from "@designsystem/component/Text";
import useResponsive from "@hook/useResponsive";
import Spacer from "@designsystem/component/Spacer";

interface Props extends EditorNavigationBarImplProps {
    children?: ReactNode;
}

const EditorNavigationBar = ({children, ...props}: Props) => {
    const {deviceSize} = useResponsive();
    if (deviceSize === 'mobile' || deviceSize === 'tablet') {
        return (
            <Column $alignItems={'stretch'} flex={1} css={css`
                min-height: 0;
            `}>
                {children}
                <Spacer/>
                <EditorNavigationBarImpl {...props}/>
            </Column>
        );
    }

    return (
        <Row $alignItems={'stretch'} flex={1} css={css`
            min-height: 0;
        `}>
            <EditorNavigationBarImpl {...props}/>
            {children}
        </Row>
    )
};

interface EditorNavigationBarImplProps {
    currentNavType: EditorNavType;
    onChangeNavType: (type: EditorNavType) => void;
    openInspector: boolean;
    onToggleInspector: () => void;
}

const EditorNavigationBarImpl = (props: EditorNavigationBarImplProps) => {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile' || deviceSize === 'tablet') {
        return <SmallEditorNavigationBarImpl {...props}/>
    }

    return <DesktopEditorNavigationBarImpl {...props}/>;
}

const SmallEditorNavigationBarImpl = ({currentNavType, onChangeNavType}: EditorNavigationBarImplProps) => {
    return (
        <Row gap={12} css={css`
            ${hideScrollBar};
            padding: 8px 32px;
            border-top: 1px solid var(--g-100);
            min-height: 72px;
            height: 72px;
        `}>
            {editorNavList.map((type, index) => (
                <Item key={index} type={type} selected={currentNavType === type} onClick={() => {
                    onChangeNavType(type);
                }}/>
            ))}
        </Row>
    );
}


const DesktopEditorNavigationBarImpl = (
    {
        currentNavType,
        onChangeNavType,
        openInspector,
        onToggleInspector
    }: EditorNavigationBarImplProps
) => {
    return (
        <Column css={css`
            border-right: 1px solid var(--g-100);
            width: 72px;
        `}>
            <Column gap={10} flex={1} css={css`
                padding: 8px;
                overflow-y: scroll;
                ${hideScrollBar};
            `}>
                {editorNavList.map((type, index) => (
                    <Item key={index} type={type} selected={currentNavType === type} onClick={() => {
                        onChangeNavType(type);
                    }}/>
                ))}
            </Column>
            <Column $alignItems={'center'} $justifyContent={'center'} css={css`
                width: 72px;
                height: 72px;
                rotate: 180deg;
                ${openInspector && css`
                    rotate: none;
                `};
            `} onClick={() => {
                onToggleInspector();
            }}>
                <Icon iconType={IconType.DoubleArrowLeft} width={24} height={24} ui={css`
                    padding: 12px;
                    fill: var(--g-500);
                    border-radius: 12px;
                    ${makeInteractionEffect('strong')};
                `}/>
            </Column>
        </Column>
    );
}

const Item = ({type, selected, ...props}: {
    type: EditorNavType;
    selected: boolean;
} & ComponentPropsWithoutRef<'div'>) => {
    const {icon, navigationBarText} = editorNavTypeMap[type];
    return (
        <Column gap={2} $alignItems={'center'} $justifyContent={'center'} css={css`
            min-width: 56px;
            width: 56px;
            min-height: 56px;
            height: 56px;
            border-radius: 12px;
            ${makeInteractionEffect('strong')};
        `} {...props}>
            <Icon iconType={icon} width={24} height={24} ui={css`
                ${selected ? css`
                    fill: var(--g-700);
                ` : css`
                    fill: var(--g-400);
                `};
            `}/>
            <Text type={'caption2'} ui={css`
                ${selected ? css`
                    color: var(--g-700);
                ` : css`
                    color: var(--g-400);
                `};
            `}>{navigationBarText}</Text>
        </Column>
    );
};

export default EditorNavigationBar;
