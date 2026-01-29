import React, {type ComponentPropsWithoutRef, type ReactNode} from 'react';
import {
    type EditorNavigationBarType,
    editorNavigationBarTypeList, editorNavigationBarTypeMap
} from "~/routes/editor/component/EditorNavigationBarType.ts";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";
import {hideScrollBarStyle, interactionEffectStyles} from "~/userinterface/css.util.ts";
import Icon from "~/userinterface/foundation/Icon.tsx";
import Text from "~/userinterface/component/Text.tsx";
import {desktopStyle, notDesktopStyle} from "~/hook/ResponsiveSwitch.tsx";
import useResponsive from "~/hook/useResponsive.ts";


interface Props extends EditorNavigationBarImplProps {
    children?: ReactNode;
}

const EditorNavigationBar = ({children, ...props}: Props) => {
    const {deviceSize} = useResponsive();
    if (deviceSize === 'mobile' || deviceSize === 'tablet') {
        return (
            <View ui={css`
                min-height: 0;
                flex: 1;
            `}>
                {children}
                <EditorNavigationBarImpl {...props}/>
            </View>
        );
    }

    return (
        <View ui={css`
            flex-direction: row !important;
            flex: 1;
            min-height: 0;
        `}>
            <EditorNavigationBarImpl {...props}/>
            {children}
        </View>
    )
}

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
        <View ui={cx(
            css`
                gap: 12px;
                flex-direction: row !important;
                align-items: flex-start;
                overflow-y: hidden;
                padding: 8px 32px;
                border-top: 1px solid var(--g-100);
                min-height: 72px;
                height: 72px;
            `,
            hideScrollBarStyle,
            notDesktopStyle
        )}>
            {editorNavigationBarTypeList.map((type, index) => (
                <Item key={index} type={type} selected={currentNavType === type} onClick={() => {
                    onChangeNavType(type);
                }}/>
            ))}
        </View>
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
        <View ui={cx(
            css`
                align-items: flex-start;
                border-right: 1px solid var(--g-100);
                width: 72px;
            `,
            desktopStyle
        )}>
            <View ui={cx(
                css`
                    align-items: flex-start;
                    flex: 1;
                    gap: 10px;
                    padding: 8px;
                    overflow-y: scroll;
                `,
                hideScrollBarStyle
            )}>
                {editorNavigationBarTypeList.map((type, index) => (
                    <Item key={index} type={type} selected={currentNavType === type} onClick={() => {
                        onChangeNavType(type);
                    }}/>
                ))}
            </View>
            <View ui={cx(
                css`
                    align-items: center;
                    justify-content: center;
                    width: 72px;
                    height: 72px;
                    rotate: 180deg;
                `,
                openInspector ? css`
                    rotate: none;
                ` : undefined
            )} onClick={() => {
                onToggleInspector();
            }}>
                <Icon iconType={'DoubleArrowLeft'} width={24} height={24} ui={cx(
                    css`
                        padding: 12px;
                        fill: var(--g-500);
                        border-radius: 12px;
                    `,
                    interactionEffectStyles.strong
                )}/>
            </View>
        </View>
    );
}

interface ItemProps extends ComponentPropsWithoutRef<'div'> {
    type: EditorNavigationBarType;
    selected: boolean;
}

const Item = ({type, selected, ...props}: ItemProps) => {
    const {icon, navigationBarText} = editorNavigationBarTypeMap[type];
    return (
        <View ui={cx(
            css`
                align-items: center;
                justify-content: center;
                gap: 2px;
                min-width: 56px;
                width: 56px;
                min-height: 56px;
                height: 56px;
                border-radius: 12px;
            `,
            interactionEffectStyles.strong
        )} {...props}>
            <Icon iconType={icon} width={24} height={24} ui={selected ? css`
                fill: var(--g-700);
            ` : css`
                fill: var(--g-400);
            `}/>
            <Text type={'caption2'} ui={selected ? css`
                color: var(--g-700);
            ` : css`
                color: var(--g-400);
            `}>{navigationBarText}</Text>
        </View>
    );
};

export default EditorNavigationBar;
