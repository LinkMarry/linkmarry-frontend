import React, {type ComponentPropsWithoutRef} from "react";
import Icon, {type IconType} from "~/userinterface/foundation/Icon.tsx";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text.tsx";

function MyPageSidebarItem({icon, text, selected = false, ...props}: {
    icon: IconType;
    text: string;
    selected?: boolean;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <View ui={cx(
            css`
                align-items: center;
                gap: 8px;
                flex-direction: row !important;
                padding: 16px;
                cursor: pointer;
                transition: 0.1s background;
                border-radius: 6px;
            `,
            selected ? css`
                background: var(--g-100);
            ` : css`
                &:hover {
                    background: var(--g-50);
                }
            `
        )} {...props}>
            <Icon iconType={icon} width={24} height={24} ui={css`
                fill: var(--g-600);
            `}/>
            <Text type={'p2'} bold={true} ui={css`
                color: var(--g-600);
            `}>{text}</Text>
        </View>
    );
}

export default MyPageSidebarItem;
