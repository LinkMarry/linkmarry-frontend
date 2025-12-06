import {type ComponentPropsWithoutRef, type ReactNode} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Icon from "@src/userinterface/foundation/Icon";
import {hideScrollBar, makeInteractionEffect} from "@src/userinterface/css.util";
import {type EditorNavigationBarType} from "@src/feature/editor/component/navigation-bar/EditorNavigationBarType";
import {
    editorNavigationBarTypeList,
    editorNavigationBarTypeMap
} from "@src/feature/editor/component/navigation-bar/EditorNavigationBarType";
import Text from "@src/userinterface/component/Text";
import {desktopStyle, notDesktopStyle} from "@src/hook/ResponsiveSwitch.tsx";

interface Props extends EditorNavigationBarImplProps {
    children?: ReactNode;
}

const EditorNavigationBar = ({children, ...props}: Props) => {
    return (
        <>
            <Column $alignItems={'stretch'} $flex={1} $ui={css`
                min-height: 0;
                ${notDesktopStyle};
            `}>
                {children}
                <EditorNavigationBarImpl {...props}/>
            </Column>
            <Row $alignItems={'stretch'} $flex={1} $ui={css`
                min-height: 0;
                ${desktopStyle};
            `}>
                <EditorNavigationBarImpl {...props}/>
                {children}
            </Row>
        </>
    );
};

interface EditorNavigationBarImplProps {
    currentNavType: EditorNavigationBarType;
    onChangeNavType: (type: EditorNavigationBarType) => void;
    openInspector: boolean;
    onToggleInspector: () => void;
}

const EditorNavigationBarImpl = (props: EditorNavigationBarImplProps) => {
    return (
        <>
            <NotDesktopEditorNavigationBarImpl {...props}/>
            <DesktopEditorNavigationBarImpl {...props}/>
        </>
    );
}

const NotDesktopEditorNavigationBarImpl = ({currentNavType, onChangeNavType}: EditorNavigationBarImplProps) => {
    return (
        <Row $gap={12} $ui={css`
            ${hideScrollBar};
            ${notDesktopStyle};
            overflow-y: hidden;
            padding: 8px 32px;
            border-top: 1px solid var(--g-100);
            min-height: 72px;
            height: 72px;
        `}>
            {editorNavigationBarTypeList.map((type, index) => (
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
        <Column $ui={css`
            border-right: 1px solid var(--g-100);
            width: 72px;
            ${desktopStyle};
        `}>
            <Column $gap={10} $flex={1} $ui={css`
                padding: 8px;
                overflow-y: scroll;
                ${hideScrollBar};
            `}>
                {editorNavigationBarTypeList.map((type, index) => (
                    <Item key={index} type={type} selected={currentNavType === type} onClick={() => {
                        onChangeNavType(type);
                    }}/>
                ))}
            </Column>
            <Column $alignItems={'center'} $justifyContent={'center'} $ui={css`
                width: 72px;
                height: 72px;
                rotate: 180deg;
                ${openInspector && css`
                    rotate: none;
                `};
            `} onClick={() => {
                onToggleInspector();
            }}>
                <Icon iconType={'DoubleArrowLeft'} width={24} height={24} ui={css`
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
    type: EditorNavigationBarType;
    selected: boolean;
} & ComponentPropsWithoutRef<'div'>) => {
    const {icon, navigationBarText} = editorNavigationBarTypeMap[type];
    return (
        <Column $gap={2} $alignItems={'center'} $justifyContent={'center'} $ui={css`
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
