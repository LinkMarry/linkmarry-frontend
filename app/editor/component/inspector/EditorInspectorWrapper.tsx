import {type ComponentProps, type ReactNode} from 'react';
import Text from "~/userinterface/component/Text.tsx";
import Spacer from "~/userinterface/component/Spacer.tsx";
import Toggle from "~/userinterface/component/Toggle.tsx";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import {css, cx} from "@linaria/core";
import {editorNavigationBarTypeMap} from "~/editor/component/navigation-bar/EditorNavigationBarType.ts";
import {type EditorNavigationBarType} from "~/editor/component/navigation-bar/EditorNavigationBarType.ts";
import Divider from "~/userinterface/component/Divider.tsx";
import Icon from "~/userinterface/foundation/Icon.tsx";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";
import View from "~/userinterface/core/View.tsx";

interface Props {
    type: EditorNavigationBarType;
    toggle?: ComponentProps<typeof Toggle>;
    hasDivider?: boolean;
    children?: ReactNode;
}

const EditorInspectorWrapper = ({type, toggle, hasDivider = true, children}: Props) => {
    const content = (() => {
        if (!toggle || toggle.checked) {
            return children;
        } else {
            return <Empty type={type}/>;
        }
    });

    return (
        <View ui={cx(
            css`
                overflow-y: scroll;
                padding: 32px 24px 100px 24px;

                ${responsive.desktop} {
                    gap: 32px;
                }

                ${responsive.notDesktop} {
                    padding: 24px 16px 40px 16px;
                    gap: 24px;
                    flex: 1;
                }
            `,
            hideScrollBarStyle
        )}>
            <View ui={css`
                flex-direction: row !important;
                align-items: center;
            `}>
                <Text type={'p1'} bold={true}>{editorNavigationBarTypeMap[type].inspectorText}</Text>
                <Spacer/>
                {toggle && (
                    <Toggle {...toggle}/>
                )}
            </View>
            {hasDivider && (
                <Divider/>
            )}
            {content()}
        </View>
    );
};

interface EmptyProps {
    type: EditorNavigationBarType;
}

const Empty = ({type}: EmptyProps) => {
    const {icon, inspectorText} = editorNavigationBarTypeMap[type];
    return (
        <View ui={css`
            gap: 12px;
            justify-content: center;
            height: 436px;
        `}>
            <Icon iconType={icon} width={24} height={24} ui={css`
                fill: var(--g-400);
            `}/>
            <Text type={'p3'} bold={true} ui={css`
                text-align: center;
                color: var(--g-400);
            `}>토글을 활성화하여<br/>{inspectorText}을 설정할 수 있습니다.</Text>
        </View>
    )
}

export default EditorInspectorWrapper;
