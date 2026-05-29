import {Text, Spacer, Toggle, Divider, Icon, View} from "~/components";
import {type ComponentProps, type ReactNode} from "react";

import {responsive} from "~/style/responsive";
import {css, cx} from "@linaria/core";
import {weddingInvitationEditorNavigationBarTypeRecord} from "~/routes/editor/domain.ts";
import {type WeddingInvitationEditorNavigationBarType} from "~/routes/editor/domain.ts";

import {hideScrollBarStyle} from "~/style/common.ts";

interface Props {
    type: WeddingInvitationEditorNavigationBarType;
    toggle?: ComponentProps<typeof Toggle>;
    hasDivider?: boolean;
    children?: ReactNode;
}

const EditorInspectorWrapper = ({type, toggle, hasDivider = true, children}: Props) => {
    const content = () => {
        if (!toggle || toggle.checked) {
            return children;
        } else {
            return <Empty type={type} />;
        }
    };

    return (
        <View
            ui={cx(
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
                hideScrollBarStyle,
            )}
        >
            <View
                flexDirection={"row"}
                ui={css`
                    align-items: center;
                `}
            >
                <Text type={"p1"} bold={true}>
                    {weddingInvitationEditorNavigationBarTypeRecord[type].inspectorTitleText}
                </Text>
                <Spacer />
                {toggle && <Toggle {...toggle} />}
            </View>
            {hasDivider && <Divider />}
            {content()}
        </View>
    );
};

interface EmptyProps {
    type: WeddingInvitationEditorNavigationBarType;
}

const Empty = ({type}: EmptyProps) => {
    const {icon, inspectorTitleText} = weddingInvitationEditorNavigationBarTypeRecord[type];
    return (
        <View
            ui={css`
                gap: 12px;
                justify-content: center;
                height: 436px;
            `}
        >
            <Icon
                iconType={icon}
                width={24}
                height={24}
                ui={css`
                    fill: var(--g-400);
                `}
            />
            <Text
                type={"p3"}
                bold={true}
                ui={css`
                    text-align: center;
                    color: var(--g-400);
                `}
            >
                토글을 활성화하여
                <br />
                {inspectorTitleText}을 설정할 수 있습니다.
            </Text>
        </View>
    );
};

export default EditorInspectorWrapper;
