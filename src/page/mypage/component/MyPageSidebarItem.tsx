import React, {ComponentPropsWithoutRef} from "react";
import {Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Text from "@designsystem/component/Text";

function MyPageSidebarItem({icon, text, selected = false, ...props}: {
    icon: IconType;
    text: string;
    selected?: boolean;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Row gap={8} alignment={'center'} ui={css`
            padding: 16px;
            cursor: pointer;
            transition: 0.1s background;
            border-radius: 6px;

            ${selected ? css`
                background: var(--g-100);
            ` : css`
                &:hover {
                    background: var(--g-50);
                }`
            };
        `} {...props}>
            <Icon iconType={icon} width={24} height={24} ui={css`
                fill: var(--g-600);
            `}/>
            <Text type={'p2'} bold={true} ui={css`
                color: var(--g-600);
            `}>{text}</Text>
        </Row>
    );
}

export default MyPageSidebarItem;
